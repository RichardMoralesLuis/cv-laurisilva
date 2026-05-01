import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { team } from "@/lib/data/team"
import { User } from "lucide-react"
import Image from "next/image"

export function TeamSection() {
  return (
    <section id="equipo" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profesionales dedicados con años de experiencia en el cuidado de tus mascotas
          </p>
        </div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {team.map((member) => (
            <Card key={member.id} className="text-center hover:shadow-lg transition-shadow duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
              <CardHeader>
                {/* Avatar */}
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: member.imagePosition ?? "center" }}
                    />
                  ) : (
                    <User className="w-12 h-12 text-primary" />
                  )}
                </div>
                <CardTitle className="font-heading text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 italic">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
