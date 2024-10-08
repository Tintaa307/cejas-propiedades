import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cejas propiedades",
  description:
    "En cejas propiedades ofrecemos los mejores inmuebles de la zona.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/images/logo-cejas-2.png",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
