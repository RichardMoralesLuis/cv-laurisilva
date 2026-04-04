"use client"

import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { facilities } from "@/lib/data/facilities"
import { useLightbox } from "@/hooks/useLightbox"
import { Facility } from "@/types"

function GalleryItem({ facility, onClick }: { facility: Facility; onClick: () => void }) {
  return (
    <figure
      className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group m-0"
      onClick={onClick}
    >
      <Image
        src={facility.src}
        alt={facility.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <figcaption className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-center pb-4">
        <span className="text-white font-semibold text-lg drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {facility.title}
        </span>
      </figcaption>
    </figure>
  )
}

function Lightbox({
  facility,
  onClose,
  onPrev,
  onNext,
}: {
  facility: Facility
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        onClick={onClose}
        aria-label="Cerrar galería"
      >
        <X className="w-8 h-8" />
      </button>

      <button
        className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      <button
        className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Imagen siguiente"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      <div className="relative max-w-6xl w-full h-[80vh]" onClick={(e) => e.stopPropagation()}>
        <Image
          src={facility.src}
          alt={facility.alt}
          fill
          sizes="100vw"
          className="object-contain"
        />
        <p className="absolute bottom-4 left-0 right-0 text-center text-white text-lg font-semibold drop-shadow-lg">
          {facility.title}
        </p>
      </div>
    </div>
  )
}

export function FacilitiesSection() {
  const { selectedIndex, isOpen, open, close, prev, next } = useLightbox(facilities.length)

  return (
    <section id="instalaciones" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            Nuestras Instalaciones
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contamos con instalaciones modernas y equipamiento de última generación para brindar el mejor cuidado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <GalleryItem
              key={facility.id}
              facility={facility}
              onClick={() => open(index)}
            />
          ))}
        </div>

        {isOpen && selectedIndex !== null && (
          <Lightbox
            facility={facilities[selectedIndex]}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </div>
    </section>
  )
}
