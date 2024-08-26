"use client"

import React, { useEffect, useState } from "react"
import Information from "@/components/information/Information"
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

const Work = ({ params }: { params: { slug: string } }) => {
  const [loading, setLoading] = useState(true)
  const [work, setWork] = useState({} as WorkType)

  const verifyData = () => {
    try {
      if (!params.slug) notFound()

      const work = data.works.find((work) => work.title === params.slug)
      if (!work) notFound()

      return work as WorkType
    } catch (error) {
      notFound()
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const work = verifyData()
    setWork(work)
  }, [params])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full h-full flex flex-col gap-12">
          <Presentation
            title={work.value}
            video={work.video}
            isSold={work.isSold}
          />
          <Details
            details={work.details}
            location={work.location}
            properties={work.properties}
          />
          <Gallery imgs={work.imgs} />
          <Blueprints blueprints={work.blueprints} />
          {work.title === "canada" || work.title === "pueblo" ? (
            <Information />
          ) : null}
          <Map map={work.map} />
          <Contact title="Recibí Asesoramiento" />
        </div>
      )}
    </>
  )
}

export default Work
