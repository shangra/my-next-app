import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import ImageGallery from "./ImageGallery"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string,
  images: {
    url: string
    alt: string
  }[]
  details: any,
  fullSizeImage?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, images, details, fullSizeImage }) => {
  const [isFullSize, setIsFullSize] = useState(false)

  const handleImageClick = (imageUrl: string) => {
    setIsFullSize(true)
  }

  const closeFullSize = () => {
    setIsFullSize(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={`max-w-4xl max-h-[90vh] p-0 overflow-auto bg-white rounded-lg shadow-2xl ${isFullSize ? "max-w-full max-h-full h-screen w-screen m-0" : ""}`}
      >
        {isFullSize ? (
          <div className="relative w-full h-full">
            <img
              src={fullSizeImage || "/placeholder.svg"}
              alt="Full size plan"
              className="w-full h-full object-contain"
            />
            <button
              onClick={closeFullSize}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
            >
              <X size={24} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <DialogHeader className="p-6 bg-gray-50">
              <DialogTitle className="text-3xl font-bold text-gray-900">{title}</DialogTitle>
              <DialogDescription className="text-lg text-gray-600 mt-2">{description}</DialogDescription>
            </DialogHeader>
            <div className="flex-grow">
              <div className="h-[300px]">
                <ImageGallery images={images} onImageClick={handleImageClick} />
              </div>
              <div className="px-6 py-4">
                <div className="space-y-6">
                  {Object.entries(details).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{key}</h3>
                      {Array.isArray(value) ? (
                        <ul className="space-y-2">
                          {value.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Badge className="mt-1 mr-2" variant="secondary">
                                •
                              </Badge>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-700">{value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default Modal

