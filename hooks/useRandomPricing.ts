import { useState, useCallback, useEffect } from "react";

interface PricingOption {
  price: number;
  url: string;
  weight: number; // Weight for weighted random selection
}

const PRICING_OPTIONS: PricingOption[] = [
  {
    price: 17,
    url: "https://copecart.com/products/3c9b0222/checkout",
    weight: 33.33,
  },
  {
    price: 67,
    url: "https://copecart.com/products/687aef3a/checkout",
    weight: 33.33,
  },
  {
    price: 147,
    url: "https://copecart.com/products/1f010ed4/checkout",
    weight: 33.34, // ~33.34% chance (slightly higher to total 100%)
  },
];

export const useRandomPricing = () => {
  const [currentPricing, setCurrentPricing] = useState<PricingOption>(
    PRICING_OPTIONS[0]
  ); // Default to first option

  // Function to get weighted random pricing option
  const getRandomPricing = useCallback((): PricingOption => {
    // Calculate total weight
    const totalWeight = PRICING_OPTIONS.reduce(
      (sum, option) => sum + option.weight,
      0
    );

    // Generate random number between 0 and totalWeight
    let random = Math.random() * totalWeight;

    // Find the option based on weighted probability
    for (const option of PRICING_OPTIONS) {
      random -= option.weight;
      if (random <= 0) {
        return option;
      }
    }

    // Fallback to first option (shouldn't reach here)
    return PRICING_OPTIONS[0];
  }, []);

  // Function to set random pricing
  const selectRandomPricing = useCallback(() => {
    const randomPricing = getRandomPricing();
    setCurrentPricing(randomPricing);
    return randomPricing;
  }, [getRandomPricing]);

  // Function to handle checkout with random pricing
  const handleRandomCheckout = useCallback(() => {
    const selectedPricing = selectRandomPricing();
    window.open(selectedPricing.url, "_blank", "noopener,noreferrer");
    return selectedPricing;
  }, [selectRandomPricing]);

  // Initialize with random pricing on mount
  useEffect(() => {
    selectRandomPricing();
  }, [selectRandomPricing]);

  return {
    currentPricing,
    selectRandomPricing,
    handleRandomCheckout,
    allPricingOptions: PRICING_OPTIONS,
  };
};
