# Laurisilva - Clínica Veterinaria

Landing page profesional para la Clínica Veterinaria Laurisilva, especializada en animales exóticos, ganadería y pequeños animales.

## 🚀 Características

- **Diseño Moderno y Responsive**: Adaptado a todos los dispositivos
- **SEO Optimizado**: Metadata completa y Schema Markup para mejor posicionamiento en Google
- **Performance**: Built con Next.js 15 y Tailwind CSS 4 para máxima velocidad
- **6 Secciones Principales**:
  - Hero con imagen de sala de espera
  - Servicios veterinarios
  - Instalaciones (galería con lightbox)
  - Equipo (placeholders actualizables)
  - Tienda online (placeholder con formulario de notificación)
  - Contacto (con mapa de Google Maps)

## 📋 Requisitos Previos

- Node.js 18+ instalado
- pnpm (gestor de paquetes)

## 🛠️ Instalación

Las dependencias ya están instaladas. Si necesitas reinstalarlas:

```bash
pnpm install
```

## 📸 Configurar Imágenes

**IMPORTANTE**: Antes de ejecutar el proyecto, necesitas copiar las imágenes:

1. Copia los archivos `logo.jpeg` y `sala.jpeg` desde la carpeta `assets/` a `public/images/`

```bash
# En Windows (PowerShell)
Copy-Item assets\logo.jpeg public\images\
Copy-Item assets\sala.jpeg public\images\

# En Mac/Linux
cp assets/logo.jpeg public/images/
cp assets/sala.jpeg public/images/
```

2. Verifica que los archivos estén en `public/images/`:
   - `public/images/logo.jpeg`
   - `public/images/sala.jpeg`

## 🏃 Ejecutar el Proyecto

### Modo Desarrollo

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de Producción

```bash
pnpm build
pnpm start
```

## 📝 Personalización

### Actualizar Información de Contacto

Edita `lib/data/contact.ts`:

```typescript
export const contactInfo: ContactInfo = {
  email: "cvlaurisilva@gmail.com",
  phone: "TU_TELEFONO_AQUI", // Cuando esté disponible
  whatsapp: "34XXXXXXXXX", // Formato internacional sin +
  // ...
}
```

### Añadir Fotos del Equipo

1. Añade las fotos a `public/images/` (ej: `vet1.jpg`, `vet2.jpg`)
2. Edita `lib/data/team.ts`:

```typescript
export const team: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Juan Pérez",
    role: "Especialista en Pequeños Animales",
    bio: "10 años de experiencia en cirugía veterinaria...",
    image: "/images/vet1.jpg", // Añade esta línea
  },
  // ...
]
```

### Añadir Más Fotos de Instalaciones

Edita `components/sections/FacilitiesSection.tsx` y añade más objetos al array `facilities`:

```typescript
const facilities = [
  {
    id: 1,
    src: "/images/sala.jpeg",
    alt: "Sala de espera moderna y luminosa",
    title: "Sala de Espera",
  },
  {
    id: 2,
    src: "/images/quirofano.jpg", // Nueva imagen
    alt: "Quirófano equipado",
    title: "Quirófano",
  },
  // Añade más...
]
```

### Modificar Servicios

Edita `lib/data/services.ts` para cambiar los servicios ofrecidos.

### Configurar Redes Sociales

Cuando tengas las URLs de redes sociales, actualiza `lib/data/contact.ts`:

```typescript
socialMedia: {
  facebook: "https://facebook.com/laurisilva",
  instagram: "https://instagram.com/laurisilva",
  twitter: "https://twitter.com/laurisilva",
}
```

## 🎨 Personalización de Diseño

### Colores

Los colores están definidos en `app/globals.css`:

- **Primary** (#4A9B8E): Verde azulado del logo
- **Secondary** (#E17C4A): Naranja del loro
- **Accent** (#D8A5A5): Rosa suave

### Fuentes

- **Headings**: Poppins (títulos)
- **Body**: Inter (texto normal)

## 📱 Secciones de la Página

1. **Header**: Navegación sticky con logo y menú
2. **Hero**: Imagen de fondo con logo y CTAs
3. **Servicios**: Grid con 5 servicios principales
4. **Instalaciones**: Galería de fotos con lightbox
5. **Equipo**: Cards del equipo veterinario
6. **Tienda**: Placeholder con formulario de notificación
7. **Contacto**: Información + Mapa de Google
8. **Footer**: Links rápidos y copyright

## 🚢 Deploy en Vercel (Recomendado)

1. Sube tu proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Vercel detectará Next.js automáticamente
5. Click en "Deploy"

¡Listo! Tu sitio estará en una URL como: `laurisilva.vercel.app`

## 📦 Estructura del Proyecto

```
cv-laurisilva/
├── app/                    # Páginas y layout de Next.js
│   ├── layout.tsx         # Layout con SEO y Schema Markup
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales y variables
├── components/
│   ├── layout/            # Header y Footer
│   ├── sections/          # Secciones de la landing
│   └── ui/                # Componentes UI (Button, Card)
├── lib/
│   ├── data/              # Datos (servicios, equipo, contacto)
│   └── utils.ts           # Utilidades
├── public/images/         # Imágenes (COLOCA LAS FOTOS AQUÍ)
└── types/                 # TypeScript types
```

## 🔧 Tecnologías Utilizadas

- **Next.js 15**: Framework React
- **TypeScript**: Type safety
- **Tailwind CSS 4**: Estilos utility-first
- **Framer Motion**: Animaciones
- **Lucide React**: Iconos
- **Shadcn/ui**: Componentes UI

## 📞 Soporte

Si necesitas ayuda con la personalización o deployment, contacta al desarrollador.

## 📄 Licencia

© 2026 Laurisilva - Clínica Veterinaria. Todos los derechos reservados.
