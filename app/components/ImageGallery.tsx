"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ImageGalleryProps {
  images: {
    url: string
    alt: string
  }[]
  onImageClick?: (imageUrl: string) => void
}

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full h-full overflow-hidden group">
      <div
        className="absolute inset-0 transition-transform duration-500 ease-in-out transform scale-105 group-hover:scale-100 cursor-pointer"
        onClick={() => onImageClick && onImageClick(images[currentIndex].url)}
      >
        <Image
          src={images[currentIndex].url || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
        <Button
          variant="outline"
          size="icon"
          onClick={(e) => {
            e.stopPropagation()
            previousImage()
          }}
          className="bg-white/80 hover:bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                setCurrentIndex(index)
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80",
              )}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={(e) => {
            e.stopPropagation()
            nextImage()
          }}
          className="bg-white/80 hover:bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default ImageGallery

