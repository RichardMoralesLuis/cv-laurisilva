"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Bell } from "lucide-react"

export function StoreSection() {
  const [showNotifyForm, setShowNotifyForm] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email)
    setSubmitted(true)
    setTimeout(() => {
      setShowNotifyForm(false)
      setSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <section id="tienda" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            Tienda Online
          </h2>
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="text-center border-2 border-primary/30">
            <CardHeader>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-secondary" />
              </div>
              <CardTitle className="font-heading text-2xl md:text-3xl mb-2">
                Próximamente
              </CardTitle>
              <CardDescription className="text-base">
                Muy pronto podrás adquirir productos para el cuidado de tus mascotas directamente desde nuestra web
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!showNotifyForm ? (
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => setShowNotifyForm(true)}
                  className="flex items-center gap-2"
                >
                  <Bell className="w-5 h-5" />
                  Notificarme cuando esté disponible
                </Button>
              ) : submitted ? (
                <div className="bg-primary/10 text-primary p-4 rounded-lg font-medium">
                  ¡Gracias! Te avisaremos cuando la tienda esté disponible
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                    required
                    className="w-full px-4 py-2 border-2 border-input rounded-md focus:border-primary focus:outline-none"
                  />
                  <div className="flex gap-2">
                    <Button type="submit" variant="default" className="flex-1">
                      Enviar
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowNotifyForm(false)}
                    >
                      Cancelar
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
