import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://laurisilva.com"),
  title: "Veterinario Exóticos y Ganadería en La Laguna | Laurisilva",
  description: "Clínica veterinaria en La Laguna, Tenerife. Especialistas en animales exóticos, ganadería, perros y gatos. Medicina preventiva, cirugía y laboratorio. Pídenos cita.",
  keywords: [
    "clínica veterinaria La Laguna",
    "veterinario La Laguna",
    "veterinario Tenerife",
    "veterinario animales exóticos Tenerife",
    "veterinario exóticos Canarias",
    "veterinario ganadería La Laguna",
    "veterinario reptiles Tenerife",
    "veterinario aves Tenerife",
    "clínica veterinaria Tenerife",
    "cirugía perros gatos La Laguna",
    "medicina preventiva veterinaria",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Laurisilva Clínica Veterinaria" }],
  openGraph: {
    title: "Veterinario Exóticos y Ganadería en La Laguna | Laurisilva",
    description: "Clínica veterinaria en La Laguna, Tenerife. Especialistas en animales exóticos, ganadería, perros y gatos. Medicina preventiva, cirugía y laboratorio.",
    url: "https://laurisilva.com",
    siteName: "Laurisilva Clínica Veterinaria",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/Portada.jpeg",
        width: 1200,
        height: 630,
        alt: "Clínica Veterinaria Laurisilva en La Laguna, Tenerife",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veterinario Exóticos y Ganadería en La Laguna | Laurisilva",
    description: "Clínica veterinaria en La Laguna, Tenerife. Especialistas en animales exóticos, ganadería, perros y gatos.",
    images: ["/images/Portada.jpeg"],
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
    image: "https://laurisilva.com/images/logo.jpeg",
    "@id": "https://laurisilva.com",
    url: "https://laurisilva.com",
    telephone: "+34922670243",
    email: "cvlaurisilva@gmail.com",
    sameAs: [
      "https://www.instagram.com/cvlaurisilva/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+34628611458",
      contactType: "customer service",
      availableLanguage: ["Spanish"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Sevilla 24, Finca España",
      addressLocality: "La Laguna",
      postalCode: "38250",
      addressRegion: "Tenerife",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.477129029589637,
      longitude: -16.300995933643126,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:30",
        closes: "13:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "17:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "10:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    areaServed: [
      { "@type": "City", "name": "La Laguna" },
      { "@type": "City", "name": "Santa Cruz de Tenerife" },
      { "@type": "AdministrativeArea", "name": "Tenerife" },
      { "@type": "AdministrativeArea", "name": "Islas Canarias" },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Medicina y Cirugía de Animales Exóticos",
          description: "Diagnóstico, tratamiento médico y quirúrgico para reptiles, aves, anfibios, peces y otros animales exóticos.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Medicina de Grandes Animales y Ganadería",
          description: "Servicios veterinarios para bovinos, caprinos, ovinos, suidos y aves de corral.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Medicina Preventiva",
          description: "Asesoramiento y programas de prevención para mascotas, centros de cría y recintos zoológicos.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cirugía Veterinaria",
          description: "Cirugía general y especializada para perros, gatos y animales exóticos.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pruebas de Laboratorio e Imagen",
          description: "Análisis clínicos, radiografías y ecografía para diagnóstico preciso.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Servicio Veterinario a Domicilio",
          description: "Visitas veterinarias a domicilio en La Laguna y alrededores.",
        },
      },
    ],
    description: "Clínica veterinaria especializada en animales exóticos, ganadería y pequeños animales con servicios de medicina preventiva, cirugía y consultas especializadas.",
  }

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué animales exóticos atienden en Laurisilva?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En Laurisilva atendemos todo tipo de animales exóticos: reptiles (iguanas, tortugas, camaleones, serpientes), aves (loros, rapaces, palomas, canarios), anfibios, peces ornamentales y de estanque, así como fauna silvestre y animales de zoológico.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es el horario de la clínica veterinaria Laurisilva?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nuestro horario es: lunes a jueves de 9:30 a 13:30 y de 17:00 a 20:00, y los viernes de 10:00 a 18:00. Sábados y domingos cerrado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Ofrecen servicio veterinario a domicilio en Tenerife?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, ofrecemos servicio veterinario a domicilio. Consulta las condiciones y disponibilidad llamándonos al 922 67 02 43 o por WhatsApp al 628 61 14 58.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde está ubicada la clínica veterinaria Laurisilva?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Estamos en Calle Sevilla 24, Finca España, 38250 La Laguna, Tenerife. Atendemos clientes de toda Tenerife y las Islas Canarias, especialmente para especialidades en animales exóticos y ganadería.",
        },
      },
      {
        "@type": "Question",
        name: "¿Realizan gestión de núcleos zoológicos y centros de cría?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, ofrecemos asesoramiento, redacción, legalización y creación de núcleos zoológicos, así como medicina especializada y consultoría técnica para centros de cría.",
        },
      },
    ],
  }

  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
