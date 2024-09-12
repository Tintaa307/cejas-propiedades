"use client"

import { BatchProps } from "@/types/types"
import Property from "@/components/properties/Properties"
import { createClient } from "@/lib/supabase/client"
import PropertiesFilter from "./PropertiesFilter"
import { ListFilter } from "lucide-react"
import { Suspense, useEffect, useState } from "react"
import Loader from "@/components/loader/Loader"

export default function Properties({}: {}) {
  const supabase = createClient()
  const [open, setOpen] = useState(false)

  const fetchData = async () => {
    const { data: todos } = (await supabase.from("properties").select()) as {
      data: BatchProps[]
    }
    return todos
  }

  const [todos, setTodos] = useState<BatchProps[]>([])

  useEffect(() => {
    try {
      fetchData().then((data) => setTodos(data))
    } catch (error) {
      console.log(error)
    } finally {
      console.log("Data fetched")
    }
  }, [])

  return (
    <section className="relative w-full mt-8 h-full flex items-start justify-center flex-row gap-12 ms:flex-col ms:gap-0">
      <Suspense fallback={<Loader />}>
        <div className="w-full h-max hidden ms:flex items-center justify-end mt-20 px-20">
          <ListFilter
            onClick={() => setOpen(!open)}
            className="text-black z-30"
            size={35}
          />
        </div>
        <PropertiesFilter open={open} />
        <div className="w-[75%] h-max flex items-center justify-center ms:w-full">
          <Property data={todos} />
        </div>
      </Suspense>
    </section>
  )
}
