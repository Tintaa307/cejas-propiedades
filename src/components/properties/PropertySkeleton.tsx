"use client"

import { Skeleton } from "@/components/ui/skeleton"

const PropertySkeleton = () => {
  return (
    <div className="overflow-hidden flex flex-col h-[420px]">
      {/* Property Image Skeleton */}
      <Skeleton className="h-[240px] w-full rounded-md" />

      {/* Property Details Skeleton */}
      <div className="py-4 flex flex-col space-y-4">
        {/* Location Skeleton */}
        <div className="flex items-center">
          <Skeleton className="h-4 w-4 mr-1" />
          <Skeleton className="h-4 w-24" />
        </div>

        {/* Property Specs Skeleton */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Skeleton className="h-4 w-4 mr-1" />
            <Skeleton className="h-4 w-16" />
          </div>

          <div className="flex items-center">
            <Skeleton className="h-4 w-4 mr-1" />
            <Skeleton className="h-4 w-20" />
          </div>

          <div className="flex items-center">
            <Skeleton className="h-4 w-4 mr-1" />
            <Skeleton className="h-4 w-18" />
          </div>
        </div>

        {/* Price and Button Skeleton */}
        <div className="flex items-center justify-between mt-auto">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-8 w-24 rounded-sm" />
        </div>
      </div>
    </div>
  )
}

export default PropertySkeleton
