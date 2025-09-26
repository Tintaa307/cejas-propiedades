import React, { Suspense } from "react"
import { PropertiesPage } from "./client-page"
import Loader from "@/components/loader/Loader"
import { BatchProps } from "@/types/types"
import { actionErrorHandler } from "@/lib/handlers/actionErrorHandler"
import { getProperties } from "@/controllers/properties-controller"
import { AppActionException } from "@/types/exceptions"

const ServerPropertiesPage = async () => {
  let properties: BatchProps[] = []

  try {
    const data = await actionErrorHandler(async () => {
      const properties = await getProperties()
      return properties as BatchProps[]
    })

    properties = data
  } catch (error) {
    if (error instanceof AppActionException) {
      properties = []
    }
  }

  return (
    <Suspense fallback={<Loader />}>
      <PropertiesPage properties={properties} />
    </Suspense>
  )
}

export default ServerPropertiesPage
