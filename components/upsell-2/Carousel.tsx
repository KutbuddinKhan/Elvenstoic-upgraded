"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import Image from "next/image";

// Sample image data - replace with your actual images
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

interface ImageCarouselProps {
  images?: typeof carouselImages;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images = carouselImages 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3);
  const [isMounted, setIsMounted] = useState(false);

  // Handle mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleImages(1);
      } else if (width < 1024) {
        setVisibleImages(2);
      } else if (width < 1280) {
        setVisibleImages(3);
      } else {
        setVisibleImages(4);
      }
    };

    if (isMounted) {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isMounted]);

  // Auto-slide functionality
  useEffect(() => {
    if (!isFullscreen && images.length > visibleImages && isMounted) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          const maxIndex = images.length - visibleImages;
          return prev >= maxIndex ? 0 : prev + 1;
        });
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images.length, visibleImages, isFullscreen, isMounted]);

  const maxIndex = Math.max(0, images.length - visibleImages);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev >= maxIndex ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev <= 0 ? maxIndex : prev - 1);
  };

  const openFullscreen = (index: number) => {
    setFullscreenIndex(index);
    setIsFullscreen(true);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
  };

  const nextFullscreenImage = () => {
    setFullscreenIndex((prev) => (prev + 1) % images.length);
  };

  const prevFullscreenImage = () => {
    setFullscreenIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isFullscreen) {
        if (e.key === 'ArrowLeft') prevFullscreenImage();
        if (e.key === 'ArrowRight') nextFullscreenImage();
        if (e.key === 'Escape') closeFullscreen();
      }
    };

    if (isMounted) {
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [isFullscreen, isMounted]);

  if (images.length === 0 || !isMounted) return null;

  return (
    <>
      {/* Main Carousel */}
      <div className="relative w-full mt-8 px-2 sm:px-4">
        {/* Carousel Title */}
        <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center px-2">
          📸 Studio Pro Materials Preview
        </h4>
        
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-slate-800/30 p-2 sm:p-4">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-2 sm:gap-4"
              animate={{
                x: `-${currentIndex * (100 / visibleImages)}%`
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              style={{
                width: `${(images.length / visibleImages) * 100}%`
              }}
            >
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className="relative group cursor-pointer flex-shrink-0"
                  style={{ 
                    width: `${100 / images.length}%`
                  }}
                  onClick={() => openFullscreen(index)}
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] rounded-lg sm:rounded-xl bg-slate-700 shadow-lg overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-all duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center text-white transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 mb-2 mx-auto w-fit">
                          <Maximize2 className="w-4 h-4 sm:w-6 sm:h-6" />
                        </div>
                        <p className="text-xs sm:text-sm font-medium bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                          Click to expand
                        </p>
                      </div>
                    </div>

                    {/* Image Title at Bottom */}
                    <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-black/80 to-transparent p-2 rounded-b-lg sm:rounded-b-xl">
                      <h5 className="text-white font-semibold text-xs sm:text-sm truncate">
                        {image.title}
                      </h5>
                      <p className="text-gray-300 text-xs truncate">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > visibleImages && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-slate-800 text-white p-2 sm:p-3 rounded-full transition-all duration-200 z-10 shadow-lg border border-slate-600 backdrop-blur-sm"
              aria-label="Previous images"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-slate-800 text-white p-2 sm:p-3 rounded-full transition-all duration-200 z-10 shadow-lg border border-slate-600 backdrop-blur-sm"
              aria-label="Next images"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {images.length > visibleImages && (
          <div className="flex justify-center space-x-2 sm:space-x-3 mt-4 sm:mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? 'w-6 sm:w-8 h-2 sm:h-3 bg-white'
                    : 'w-2 sm:w-3 h-2 sm:h-3 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Image Counter */}
        <div className="text-center mt-3 sm:mt-4">
          <p className="text-gray-400 text-xs sm:text-sm">
            Showing {Math.min(currentIndex + visibleImages, images.length)} of {images.length} materials
          </p>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={closeFullscreen}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeFullscreen}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-3 rounded-full transition-all duration-200 z-20 shadow-lg"
                aria-label="Close fullscreen"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevFullscreenImage();
                    }}
                    className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 sm:p-4 rounded-full transition-all duration-200 z-20 shadow-lg"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextFullscreenImage();
                    }}
                    className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 sm:p-4 rounded-full transition-all duration-200 z-20 shadow-lg"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                </>
              )}

              {/* Fullscreen Image */}
              <motion.div
                key={fullscreenIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full max-w-7xl max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[fullscreenIndex].src}
                  alt={images[fullscreenIndex].alt}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="100vw"
                  priority
                />
              </motion.div>

              {/* Image Info */}
              <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 text-center text-white px-4">
                <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
                  {images[fullscreenIndex].title}
                </h3>
                <p className="text-gray-300 mb-1 text-sm sm:text-base">
                  {images[fullscreenIndex].alt}
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  {fullscreenIndex + 1} of {images.length}
                </p>
              </div>

              {/* Thumbnail Navigation */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2 max-w-full overflow-x-auto pb-2 px-4 scrollbar-hide">
                <div className="flex space-x-1 sm:space-x-2">
                  {images.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setFullscreenIndex(index);
                      }}
                      className={`relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === fullscreenIndex
                          ? 'border-white shadow-lg scale-110'
                          : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 48px, 64px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default ImageCarousel;