"use client"

import React, { useEffect, useState } from "react"
import Blueprints from "./components/Blueprints"
import Presentation from "./components/Presentation"
import Details from "./components/Details"
import Gallery from "./components/Gallery"
import Map from "./components/Map"
import Contact from "@/components/contact/Contact"
import data from "../../works.json"
import { notFound } from "next/navigation"
import Loader from "@/components/loader/Loader"
import { Work as WorkType } from "@/types/types"

const Work = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [loading, setLoading] = useState(true)
  const [work, setWork] = useState({} as WorkType)

  useEffect(() => {
    let isActive = true

    const loadWork = async () => {
      const { slug } = await params

      if (!slug) {
        notFound()
      }

      const nextWork = data.works.find((entry) => entry.title === slug)

      if (!nextWork) {
        notFound()
      }

      if (!isActive) {
        return
      }

      setWork(nextWork as WorkType)
      setLoading(false)
    }

    loadWork().catch(() => {
      notFound()
    })

    return () => {
      isActive = false
    }
  }, [params])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full h-full flex flex-col gap-12">
          <Presentation
            video={work.video}
            isSold={work.isSold}
            isComingSoon={work.isComingSoon}
          />
          <Details
            title={work.value}
            details={work.details}
            location={work.location}
            properties={work.properties}
          />
          <Gallery imgs={work.imgs} />
          <Blueprints blueprints={work.blueprints} />
          {/* {work.title === "canada" || work.title === "pueblo" ? (
            <Information />
          ) : null} */}
          <Map map={work.value} />
          <Contact title="Recibí Asesoramiento" />
        </div>
      )}
    </>
  )
}

export default Work
