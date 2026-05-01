import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data/services';
import Image from 'next/image';
import {
  Shield,
  Stethoscope,
  Fish,
  Building,
  Wind,
  Feather,
  Home,
  PawPrint,
  Zap,
  Leaf,
  Bird,
  TreePine,
  Truck,
  Microscope,
  ScanLine,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Shield,
  Stethoscope,
  Fish,
  Bird,
  Building,
  Wind,
  Feather,
  Home,
  Zap,
  PawPrint,
  Leaf,
  TreePine,
  Truck,
  Microscope,
  ScanLine,
};

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos atención veterinaria integral con equipamiento moderno y personal especializado
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/50"
              >
                {service.image && (
                  <>
                    <Image
                      src={service.image}
                      alt=""
                      aria-hidden
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover scale-110 blur-xl opacity-50"
                    />
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain opacity-50"
                    />
                    <div className="absolute inset-0 bg-white/50" />
                  </>
                )}
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary"/>
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
