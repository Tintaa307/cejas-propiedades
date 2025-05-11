import Image from "next/image"
import Link from "next/link"

interface PropertyCardProps {
  title: string
  path: string
  description: string
  filter: string
  count?: string
}

const PropertyCard = ({
  title,
  path,
  description,
  filter,
  count = "+15 propiedades",
}: PropertyCardProps) => {
  return (
    <Link
      href={`/properties/?filter=${filter}`}
      className="block w-full h-full transition-all duration-300 hover:opacity-95 hover:shadow-lg"
    >
      <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
        {/* Image */}
        <Image
          src={path || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />

        {/* Dark overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 bg-primary_green/80 backdrop-blur-sm p-6">
          <h3 className="text-xl md:text-2xl font-medium text-cream mb-2">
            {title}
          </h3>
          <p className="text-cream/80 text-sm mb-3 line-clamp-2">
            {description}
          </p>
          <p className="text-cream/90 text-sm font-medium">{count}</p>
        </div>
      </div>
    </Link>
  )
}

export default PropertyCard
