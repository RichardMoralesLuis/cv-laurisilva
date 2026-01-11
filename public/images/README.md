# Directorio de Imágenes

Este directorio debe contener las imágenes de la clínica.

## Archivos Requeridos

### Obligatorios
- `logo.jpeg` - Logo de la clínica Laurisilva
- `sala.jpeg` - Foto de la sala de espera

### Opcional
- Más fotos de las instalaciones (quirófanos, consultas, equipamiento)
- Fotos del equipo veterinario
- Fotos de productos para la tienda

## Instrucciones

1. Copia los archivos `logo.jpeg` y `sala.jpeg` desde el directorio `assets/` a este directorio `public/images/`
2. Asegúrate de que los nombres de los archivos coincidan exactamente (incluyendo la extensión .jpeg)
3. Para añadir más fotos de instalaciones, actualiza el archivo `components/sections/FacilitiesSection.tsx`
4. Para añadir fotos del equipo, actualiza `lib/data/team.ts` con las rutas de las imágenes

## Formato Recomendado

- Formato: JPEG o WebP
- Resolución recomendada:
  - Logo: mínimo 500x500px (cuadrado)
  - Sala de espera: mínimo 1920x1080px (16:9)
  - Instalaciones: 1200x800px
  - Equipo: 400x400px (cuadrado, para avatares)
