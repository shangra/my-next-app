"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link as ScrollLink } from "react-scroll"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Maximize2, Home, Ruler, ArrowRight, ChevronDown, X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { apartments } from "../constants/apartments"

const CustomSelect = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-full sm:w-[200px]">
      <button
        className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || placeholder}
        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2" />
      </button>
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const Apartments = () => {
  const [selectedComplex, setSelectedComplex] = useState<string | null>("ЖК Ю")
  const [selectedRooms, setSelectedRooms] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [fullSizeImage, setFullSizeImage] = useState<string | null>(null)

  const filteredApartments = useMemo(() => {
    return apartments.filter(
      (apt) =>
        (selectedComplex === null || apt.complex === selectedComplex) &&
        (selectedRooms === null ||
          (selectedRooms === "studio" && apt.rooms === 1 && apt.type === "studio") ||
          (selectedRooms !== "studio" && apt.rooms === Number(selectedRooms))),
    )
  }, [selectedComplex, selectedRooms])

  const complexes = useMemo(() => {
    return Array.from(new Set(apartments.map((apt) => apt.complex)))
  }, [])

  const availableRooms = useMemo(() => {
    const rooms = new Set<number>()
    apartments.forEach((apt) => {
      if (apt.type !== "studio") {
        rooms.add(apt.rooms)
      }
    })
    return Array.from(rooms).sort((a, b) => a - b)
  }, [])

  const handleImageClick = (apartment: (typeof apartments)[0]) => {
    setFullSizeImage(apartment.image)
  }

  return (
    <section id="apartments" className="py-8 sm:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Выберите квартиру</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Просторные планировки, продуманные решения и высокое качество отделки - найдите квартиру своей мечты
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <CustomSelect
            options={[
              { value: "all", label: "Все ЖК" },
              ...complexes.map((complex) => ({ value: complex, label: complex })),
            ]}
            value={selectedComplex}
            onChange={(value) => setSelectedComplex(value === "all" ? null : value)}
            placeholder="Выберите ЖК"
          />

          <CustomSelect
            options={[
              { value: "all", label: "Все квартиры" },
              { value: "studio", label: "Студии" },
              ...availableRooms.map((rooms) => ({ value: rooms.toString(), label: `${rooms}-комнатная` })),
            ]}
            value={selectedRooms}
            onChange={(value) => setSelectedRooms(value === "all" ? null : value)}
            placeholder="Количество комнат"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredApartments.map((apartment) => (
            <Card
              key={apartment.id}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredId(apartment.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-[200px] sm:h-[250px] overflow-hidden bg-white">
                <Image
                  src={apartment.image || "/placeholder.svg"}
                  alt={apartment.name}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    hoveredId === apartment.id ? "scale-110" : "scale-100"
                  }`}
                  onClick={() => handleImageClick(apartment)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-black bg-opacity-50 hover:bg-opacity-75"
                  onClick={() => handleImageClick(apartment)}
                >
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{apartment.name}</h3>
                    <p className="text-sm text-gray-600">{apartment.complex}</p>{" "}
                  </div>
                  <Badge variant="secondary" className="text-sm mt-2 sm:mt-0">
                    {`${apartment.floor} этаж`}
                  </Badge>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    <span>{`${apartment.rooms}-комн`}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ruler className="h-4 w-4" />
                    <span>{`${apartment.area} м²`}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {apartment.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-4 sm:p-6 pt-0">
                <ScrollLink className="w-full group/button" to="contact" smooth={true} duration={500} offset={-100}>
                  <Button
                    className="w-full group/button"
                  >
                    Оставить заявку
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                  </Button>
                </ScrollLink>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!fullSizeImage} onOpenChange={() => setFullSizeImage(null)}>
        <DialogContent className="max-w-full max-h-full h-screen w-screen m-0 p-0">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={fullSizeImage || "/placeholder.svg"}
                alt="Планировка квартиры"
                fill
                className="object-contain"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white bg-black bg-opacity-50 hover:bg-opacity-75 transition-all duration-200"
              onClick={() => setFullSizeImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Apartments

