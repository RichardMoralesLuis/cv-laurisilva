export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image?: string
}

export interface ContactInfo {
  email: string
  phone?: string
  whatsapp?: string
  address: {
    street: string
    city: string
    postalCode: string
    full: string
  }
  socialMedia: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
}
