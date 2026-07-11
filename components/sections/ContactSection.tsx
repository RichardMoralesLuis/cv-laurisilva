import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { contactInfo } from "@/lib/data/contact"
import { MapPin, Mail, MessageCircle, Instagram, Clock } from "lucide-react"

export function ContactSection() {
  // Google Maps embed for Calle Sevilla 24, Finca España, La Laguna
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.0!2d-16.2980!3d28.4690!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI4JzA4LjQiTiAxNsKwMTcnNTIuOCJX!5e0!3m2!1ses!2ses!4v1700000000000`

  return (
    <section id="contacto" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            Contacto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para consultas, citas o cualquier información
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <Card>
            <CardContent className="p-6 space-y-6">
              <h3 className="font-heading font-semibold text-2xl mb-6">Información de Contacto</h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Dirección</h4>
                  <p className="text-gray-600">{contactInfo.address.full}</p>
                  <Button variant="link" size="sm" className="px-0 mt-1" asChild>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Abrir en Google Maps →
                    </a>
                  </Button>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-primary hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Teléfono / WhatsApp</h4>
                  <div className="flex flex-col gap-1">
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-primary hover:underline"
                    >
                      {contactInfo.phone}
                    </a>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp}`}
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      628 61 14 58 (WhatsApp)
                    </a>
                  </div>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Horario</h4>
                  <div className="text-gray-600 space-y-0.5">
                    <p>Lunes a Jueves: 9:30 - 13:30 y 17:00 - 20:00</p>
                    <p>Viernes: 10:00 - 16:00</p>
                    <p className="text-sm text-gray-500">Sábados, domingos y festivos: cerrado</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Síguenos</h4>
                  <a
                    href={contactInfo.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @cvlaurisilva
                  </a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button variant="default" size="lg" className="flex-1" asChild>
                  <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="flex-1" asChild>
                  <a href={`mailto:${contactInfo.email}`}>
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card>
            <CardContent className="p-0 h-full min-h-[500px]">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px", borderRadius: "0.5rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Clínica Veterinaria Laurisilva"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
