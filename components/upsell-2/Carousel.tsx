"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import Image from "next/image";

const carouselImages = [
  {
    id: 1,
    src: "/upsell-2/c1.jpg",
    alt: "Studio Pro Material 1",
    title: "Money 1"
  },
  {
    id: 2,
    src: "/upsell-2/c2.jpg",
    alt: "Studio Pro Material 2",
    title: "Money 2"
  },
  {
    id: 3,
    src: "/upsell-2/c3.jpg",
    alt: "Studio Pro Material 3",
    title: "Money 3"
  },
  {
    id: 4,
    src: "/upsell-2/c4.jpg",
    alt: "Studio Pro Material 4",
    title: "Money 4"
  },
  {
    id: 5,
    src: "/upsell-2/c5.jpg",
    alt: "Studio Pro Material 5",
    title: "Money 5"
  },
  {
    id: 6,
    src: "/upsell-2/c6.jpg",
    alt: "Studio Pro Material 6",
    title: "Money 6"
  },
  {
    id: 7,
    src: "/upsell-2/c7.png",
    alt: "Studio Pro Material 7",
    title: "Money 7"
  },
  {
    id: 8,
    src: "/upsell-2/c8.png",
    alt: "Studio Pro Material 8",
    title: "Money 8"
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide functionality
  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds interval
  }, []);

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isPlaying && !showFullscreen) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }

    return () => stopAutoSlide();
  }, [isPlaying, showFullscreen, startAutoSlide]);

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  // Fullscreen handlers
  const openFullscreen = (index: number) => {
    setFullscreenIndex(index);
    setShowFullscreen(true);
    setIsPlaying(false);
  };

  const closeFullscreen = () => {
    setShowFullscreen(false);
    setIsPlaying(true);
  };

  const nextFullscreen = () => {
    setFullscreenIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevFullscreen = () => {
    setFullscreenIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {/* Main Carousel */}
      <div className="relative w-full  rounded-lg overflow-hidden">
        {/* Carousel Header */}
        <div className="bg-slate-900/50 px-6 py-4 ">
          <div className="flex items-center justify-between">
            {/* <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              {isPlaying ? "Pause" : "Play"}
            </button> */}
          </div>
        </div>

        {/* Main Image Display */}
        <div 
          className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden cursor-pointer group"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onClick={() => openFullscreen(currentIndex)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center bg-slate-900/20"
            >
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <Image
                  src={carouselImages[currentIndex].src}
                  alt={carouselImages[currentIndex].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  className="object-contain"
                  priority
                />
                
                {/* Expand Icon Overlay */}
                <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Image Title */}
        <div className="bg-slate-900/50 px-6 py-3 ">
          <p className="text-gray-400 text-center text-sm mt-1">
            {currentIndex + 1} of {carouselImages.length}
          </p>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center space-x-2 py-4 bg-slate-900/30">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Strip (Mobile Hidden, Desktop Visible) */}
        {/* <div className="hidden md:block bg-slate-900/30 p-4 border-t border-slate-700">
          <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
            {carouselImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex
                    ? "border-blue-500 scale-105"
                    : "border-slate-600 hover:border-slate-400 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div> */}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {showFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeFullscreen}
          >
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevFullscreen();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-colors duration-200 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextFullscreen();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-colors duration-200 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Fullscreen Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-[90vw] h-[80vh] max-w-6xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={carouselImages[fullscreenIndex].src}
                alt={carouselImages[fullscreenIndex].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Fullscreen Title */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p className="text-gray-300">
                {fullscreenIndex + 1} of {carouselImages.length}
              </p>
            </div>

            {/* Fullscreen Dots */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullscreenIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === fullscreenIndex
                      ? "bg-white scale-125"
                      : "bg-gray-500 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageCarousel;