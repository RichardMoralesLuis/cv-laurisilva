import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Laurisilva - Clínica Veterinaria en La Laguna | Exóticos, Ganadería y Pequeños Animales",
  description: "Clínica Veterinaria Laurisilva en La Laguna, Tenerife. Especialistas en animales exóticos, ganadería y pequeños animales. Medicina preventiva, cirugía y consultas especializadas.",
  keywords: [
    "clínica veterinaria La Laguna",
    "veterinario animales exóticos Tenerife",
    "veterinario ganadería La Laguna",
    "veterinaria Finca España",
    "cirugía perros gatos La Laguna",
    "medicina preventiva veterinaria",
  ],
  authors: [{ name: "Laurisilva Clínica Veterinaria" }],
  openGraph: {
    title: "Laurisilva - Clínica Veterinaria en La Laguna",
    description: "Especialistas en animales exóticos, ganadería y pequeños animales. Tu clínica de confianza en La Laguna, Tenerife.",
    url: "https://laurisilva.com",
    siteName: "Laurisilva Clínica Veterinaria",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: "Laurisilva - Clínica Veterinaria",
    image: "/images/logo.jpeg",
    "@id": "https://laurisilva.com",
    url: "https://laurisilva.com",
    telephone: "Disponible próximamente",
    email: "cvlaurisilva@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Sevilla 24",
      addressLocality: "La Laguna",
      postalCode: "38250",
      addressRegion: "Tenerife",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.4833,
      longitude: -16.3167,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "La Laguna",
    },
    description: "Clínica veterinaria especializada en animales exóticos, ganadería y pequeños animales con servicios de medicina preventiva, cirugía y consultas especializadas.",
  }

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
