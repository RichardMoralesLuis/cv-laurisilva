"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const facilities = [
  {
    id: 1,
    src: "/images/sala.jpeg",
    alt: "Sala de espera moderna y luminosa",
    title: "Sala de Espera",
  },
  // More images can be added here when available
]

export function FacilitiesSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="instalaciones" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            Nuestras Instalaciones
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contamos con instalaciones modernas y equipamiento de última generación para brindar el mejor cuidado
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(facility.id)}
            >
              <Image
                src={facility.src}
                alt={facility.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {facility.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative max-w-6xl w-full h-[80vh]">
              <Image
                src={facilities.find(f => f.id === selectedImage)?.src || ""}
                alt={facilities.find(f => f.id === selectedImage)?.alt || ""}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
