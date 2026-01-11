import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sala.jpeg"
          alt="Sala de espera Clínica Laurisilva"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        {/* Logo */}
        <div className="relative w-48 h-48 md:w-60 md:h-60 mx-auto mb-8">
          <Image
            src="/images/logo.jpeg"
            alt="Laurisilva Logo"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-4 drop-shadow-lg">
          Laurisilva
        </h1>
        <p className="font-heading text-xl md:text-2xl lg:text-3xl mb-6 text-gray-100">
          Clínica Veterinaria
        </p>

        {/* Tagline */}
        <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto font-medium drop-shadow-md">
          Especialistas en Animales Exóticos, Ganadería y Pequeños Animales
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="default" size="lg" asChild>
            <Link href="#contacto" className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-dark">
            <Link href="#servicios">Ver Servicios</Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/80" />
        </div>
      </div>
    </section>
  )
}
