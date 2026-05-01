import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/images/logo.jpeg"
                  alt="Laurisilva Logo"
                  fill
                  sizes="40px"
                  className="object-cover scale-125"
                />
              </div>
              <span className="font-heading font-bold text-xl">Laurisilva</span>
            </div>
            <p className="text-sm text-gray-300 text-center md:text-left">
              Clínica Veterinaria especializada en animales exóticos, ganadería y pequeños animales.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="flex flex-col items-center">
            <h2 className="font-heading font-semibold mb-4 text-base">Enlaces Rápidos</h2>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="#inicio" className="text-gray-300 hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link href="#servicios" className="text-gray-300 hover:text-primary transition-colors">
                Servicios
              </Link>
              <Link href="#contacto" className="text-gray-300 hover:text-primary transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Contacto */}
          <div className="flex flex-col items-center md:items-end">
            <h2 className="font-heading font-semibold mb-4 text-base">Contacto</h2>
            <div className="flex flex-col gap-2 text-sm text-gray-300 text-center md:text-right">
              <a href="mailto:cvlaurisilva@gmail.com" className="hover:text-primary transition-colors">
                cvlaurisilva@gmail.com
              </a>
              <p>
                <a href="tel:922670243" className="hover:text-primary transition-colors">922 67 02 43</a>
                {" / "}
                <a href="tel:628611458" className="hover:text-primary transition-colors">628 61 14 58</a>
              </p>
              <p>Calle Sevilla 24</p>
              <p>38250, Finca España, La Laguna</p>
              <p className="mt-2">L-J: 9:30-13:30 y 17:00-20:00</p>
              <p>V: 10:00-18:00</p>
              <div className="mt-3">
                <a
                  href="https://www.instagram.com/cvlaurisilva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  @cvlaurisilva
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Laurisilva - Clínica Veterinaria. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Aviso Legal | Política de Privacidad
          </p>
        </div>
      </div>
    </footer>
  )
}
