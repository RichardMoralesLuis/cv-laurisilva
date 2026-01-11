# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Laurisilva** is a landing page for a veterinary clinic in La Laguna, Tenerife, specializing in exotic animals, livestock, and small animals. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Development Commands

```bash
# Install dependencies (using pnpm)
pnpm install

# Development server (http://localhost:3000)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16.1.1 (App Router)
- **React**: 19.2.3
- **TypeScript**: 5.x with strict mode
- **Styling**: Tailwind CSS 4 with custom CSS variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: class-variance-authority, clsx, tailwind-merge

### Directory Structure

```
app/
├── layout.tsx          # Root layout with SEO metadata and Schema.org JSON-LD
├── page.tsx           # Home page (single-page structure)
└── globals.css        # Global styles, CSS variables, theme configuration

components/
├── layout/            # Header, Footer
├── sections/          # Page sections (Hero, Services, Facilities, Team, Store, Contact)
└── ui/               # Reusable UI components (Button, Card) - Shadcn-style

lib/
├── data/             # Static data exports (services, team, contact info)
└── utils.ts          # cn() utility for className merging

types/
└── index.ts          # TypeScript interfaces (Service, TeamMember, ContactInfo)

public/images/        # Static images (logo.jpeg, sala.jpeg, etc.)
```

### Key Patterns

1. **Path Aliases**: Use `@/*` for all imports (configured in tsconfig.json)
   ```typescript
   import { ContactInfo } from "@/types"
   import { services } from "@/lib/data/services"
   ```

2. **Component Structure**: Sections are standalone components imported into `app/page.tsx`
   - Each section has semantic HTML with `id` attributes for navigation
   - Consistent spacing: `py-20` for sections, `container mx-auto px-4` for content

3. **Styling System**:
   - Custom CSS variables defined in `app/globals.css` (`:root` and `@theme inline`)
   - Primary color: `#4A9B8E` (teal from logo)
   - Secondary color: `#E17C4A` (orange from parrot)
   - Accent color: `#D8A5A5` (soft pink)
   - Fonts: Poppins for headings (`font-heading`), Inter for body text
   - Use `cn()` utility from `lib/utils.ts` for conditional/merged classNames

4. **Data Management**: All content is centralized in `lib/data/`
   - Services, team members, and contact info are exported as typed arrays/objects
   - Icons are mapped using Lucide React components (see `ServicesSection.tsx` for pattern)

5. **TypeScript**: Strict mode enabled
   - All interfaces in `types/index.ts`
   - Optional fields marked with `?`
   - Use `Readonly<{ children: React.ReactNode }>` for layout props

6. **SEO**: Comprehensive metadata in `app/layout.tsx`
   - Next.js Metadata API for meta tags
   - Schema.org JSON-LD structured data for VeterinaryCare
   - OpenGraph tags configured

## Common Tasks

### Adding New Services
1. Add service object to `lib/data/services.ts`
2. Import corresponding Lucide icon in `components/sections/ServicesSection.tsx`
3. Add icon to `iconMap` mapping

### Updating Team Information
1. Edit `lib/data/team.ts`
2. Add team member photos to `public/images/`
3. Reference with `/images/filename.jpg` in the `image` field

### Modifying Contact Details
Update `lib/data/contact.ts` - changes automatically propagate to:
- Contact section
- Footer
- Schema.org JSON-LD in layout
- Email/WhatsApp links

### Adding Gallery Images
1. Place images in `public/images/`
2. Edit `components/sections/FacilitiesSection.tsx`
3. Add objects to the `facilities` array with `id`, `src`, `alt`, `title`

### Customizing Colors
Edit CSS variables in `app/globals.css` (`:root` section):
- `--primary`: Main brand color (teal)
- `--secondary`: Accent color (orange)
- `--accent`: Tertiary color (pink)

## Important Notes

- **Image Requirements**: Logo and hero images must exist in `public/images/` before running dev server
- **No Router Required**: Single-page architecture - all sections on home page with anchor navigation
- **Responsive Design**: Mobile-first approach, test all breakpoints (sm, md, lg)
- **Package Manager**: This project uses **pnpm**, not npm or yarn
- **Spanish Language**: All content is in Spanish (es_ES locale)
- **Deployment Target**: Optimized for Vercel (referenced in README)
