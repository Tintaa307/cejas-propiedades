import type { Metadata } from "next"
import { Mona_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import { TagManagerProvider } from "@/context/TagManager"

const monaSans = Mona_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cejas propiedades",
  description:
    "En cejas propiedades ofrecemos los mejores inmuebles de la zona. Tenemos una variedad de propiedades en venta y en alquiler.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/logo-ventana-cejas.png",
    },
  ],
  keywords: [
    "propiedades",
    "venta",
    "alquiler",
    "inmuebles",
    "cejas propiedades",
    "cejas",
    "propiedades en cejas",
    "chacras",
    "real state",
    "inmobiliaria",
    "inmobiliaria en cejas",
    "inmobiliaria en la zona",
    "inmobiliaria en la zona sur",
    "inmobiliaria en la zona norte",
    "inmobiliaria en la zona oeste",
    "inmobiliaria en la zona sur",
    "lotes",
    "cañada",
    "navarro",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={monaSans.className}>
        <TagManagerProvider>
          <Navbar />
          {children}
          <Footer />
        </TagManagerProvider>
      </body>
    </html>
  )
}
