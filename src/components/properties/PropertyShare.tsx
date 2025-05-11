"use client"

import { Share2, Copy } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const PropertyShare = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    toast.success("Enlace copiado al portapapeles")
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        className="border-primary_green text-primary_green hover:bg-primary_green hover:text-cream bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Share2 className="h-4 w-4 mr-2" />
        Compartir
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-cream border border-primary_green/20 rounded-md shadow-md z-10">
          <button
            className="flex items-center w-full px-4 py-2 text-sm text-primary_green hover:bg-primary_green/10"
            onClick={handleCopyLink}
          >
            <Copy className="h-4 w-4 mr-2" />
            Copiar enlace
          </button>
        </div>
      )}
    </div>
  )
}

export default PropertyShare
