'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Type definitions
interface ImageData {
    id: string
    src: string
    alt: string
    width: number
    height: number
}

interface ImageCarouselProps {
    images: ImageData[]
}

interface ImageModalProps {
    images: ImageData[]
    currentIndex: number
    isOpen: boolean
    onClose: () => void
    onNavigate: (index: number) => void
}

// Modal Component
const ImageModal: React.FC<ImageModalProps> = ({
    images,
    currentIndex,
    isOpen,
    onClose,
    onNavigate,
}) => {
    const currentImage = images[currentIndex]

    // Keyboard navigation
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isOpen) return

        switch (e.key) {
            case 'Escape':
                onClose()
                break
            case 'ArrowLeft':
                e.preventDefault()
                onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1)
                break
            case 'ArrowRight':
                e.preventDefault()
                onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0)
                break
        }
    }, [isOpen, currentIndex, images.length, onClose, onNavigate])

    // Prevent page scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            document.addEventListener('keydown', handleKeyDown)
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, handleKeyDown])

    const goToPrevious = () => {
        onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1)
    }

    const goToNext = () => {
        onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0)
    }

    if (!isOpen || !currentImage) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
                onClick={onClose}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-60 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all duration-200"
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                {/* Navigation buttons */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                goToPrevious()
                            }}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all duration-200"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                goToNext()
                            }}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all duration-200"
                            aria-label="Next image"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </>
                )}

                {/* Image container */}
                <motion.div
                    key={currentIndex}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Image
                        src={currentImage.src}
                        alt={currentImage.alt}
                        width={currentImage.width}
                        height={currentImage.height}
                        className="max-w-full max-h-full object-contain"
                        priority
                    />
                </motion.div>

                {/* Image counter */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
                        {currentIndex + 1} / {images.length}
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    )
}

// Main ImageCarousel Component
const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const openModal = (index: number) => {
        setCurrentImageIndex(index)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const navigateToImage = (index: number) => {
        setCurrentImageIndex(index)
    }

    return (
        <>
            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
                {images.map((image, index) => (
                    <motion.div
                        key={image.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group shadow-md hover:shadow-lg transition-shadow duration-300"
                        onClick={() => openModal(index)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <ImageModal
                images={images}
                currentIndex={currentImageIndex}
                isOpen={isModalOpen}
                onClose={closeModal}
                onNavigate={navigateToImage}
            />
        </>
    )
}

export default ImageCarousel;
