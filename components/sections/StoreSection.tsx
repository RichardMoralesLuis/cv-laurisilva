import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBag, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export function StoreSection() {
  return (
    <section id="tienda" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            Tienda
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Productos para el cuidado y bienestar de tus animales
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-primary/30 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShoppingBag className="w-10 h-10 text-primary" />
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading font-semibold text-2xl md:text-3xl text-dark">
                    Visítanos en nuestra clínica
                  </h3>
                  <p className="text-gray-600 text-lg max-w-xl">
                    Disponemos de productos de alimentación, complementos y accesorios para tus mascotas. Nuestro equipo te asesorará para encontrar lo que mejor se adapte a las necesidades de tu animal.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 text-gray-600 mt-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Venta exclusiva en clínica</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Consulta nuestro horario</span>
                  </div>
                </div>

                <Button variant="default" size="lg" asChild className="mt-2">
                  <Link href="#contacto">
                    Cómo llegar
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
