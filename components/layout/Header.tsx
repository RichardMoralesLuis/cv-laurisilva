"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#instalaciones", label: "Instalaciones" },
  { href: "#equipo", label: "Equipo" },
  { href: "#tienda", label: "Tienda" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      suppressHydrationWarning
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-3">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image
                src="/images/logo.jpeg"
                alt="Laurisilva Logo"
                fill
                className="object-contain"
              />
            </div>
            <span
              suppressHydrationWarning
              className={cn(
                "font-heading font-bold text-lg md:text-xl transition-colors",
                isScrolled ? "text-dark" : "text-white"
              )}
            >
              Laurisilva
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav suppressHydrationWarning className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isScrolled ? "text-dark" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="default" size="sm" asChild>
              <Link href="#contacto">Contactar</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            suppressHydrationWarning
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-dark" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-dark" : "text-white")} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3 bg-white rounded-lg p-4 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-dark font-medium py-2 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="default" className="mt-2" asChild>
              <Link href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                Contactar
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
