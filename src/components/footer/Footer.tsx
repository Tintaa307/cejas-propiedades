"use client"

import { Instagram, Facebook, Phone } from "lucide-react"
import Link from "next/link"
import WhatsappButton from "./WhatsappButton"

const Footer = () => {
  const socialMedia = [
    {
      title: "Instagram",
      icon: <Instagram size={24} className="text-primary_green" />,
      link: "https://www.instagram.com/estudio.integral1/",
    },
    {
      title: "Facebook",
      icon: <Facebook size={24} className="text-primary_green" />,
      link: "https://www.facebook.com/estudio.integral11",
    },
    {
      title: "Phone",
      icon: <Phone size={24} className="text-primary_green" />,
      link: "tel:+5491133683251",
    },
  ]

  return (
    <footer className="w-full bg-cream">
      <div className="container mx-auto px-4 md:px-6 py-6">
        {/* Social media and WhatsApp button */}
        <div className="flex justify-between items-center mb-6">
          <ul className="flex space-x-6">
            {socialMedia.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.link}
                  target="_blank"
                  className="hover:opacity-80 transition-opacity"
                  aria-label={item.title}
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>

          {/* WhatsApp button is now a fixed element for all screen sizes */}
        </div>

        {/* Divider */}
        <div className="border-t border-primary_green/30"></div>

        {/* Copyright and credits */}
        <div className="pt-4 text-center">
          <p className="text-primary_green text-sm mb-1">
            ©2024 Cejas Propiedades. Todos los derechos reservados
          </p>
          <p className="text-primary_green/80 text-sm">
            Diseñado y desarrollado por{" "}
            <Link
              href="https://synera.com.ar"
              className="text-primary_green hover:underline"
              target="_blank"
            >
              Synera
            </Link>
          </p>
        </div>
      </div>

      {/* Floating WhatsApp button for mobile */}
      <WhatsappButton />
    </footer>
  )
}

export default Footer
