import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.jpeg"
                  alt="Laurisilva Logo"
                  fill
                  className="object-contain"
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
            <h3 className="font-heading font-semibold mb-4">Enlaces Rápidos</h3>
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
            <h3 className="font-heading font-semibold mb-4">Contacto</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-300 text-center md:text-right">
              <a href="mailto:cvlaurisilva@gmail.com" className="hover:text-primary transition-colors">
                cvlaurisilva@gmail.com
              </a>
              <p>Calle Sevilla 24</p>
              <p>38250, Finca España, La Laguna</p>
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
