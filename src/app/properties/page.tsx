"use client"

import { BatchProps } from "@/types/types"
import Property from "@/components/properties/Properties"
import { createClient } from "@/lib/supabase/client"
import PropertiesFilter from "./PropertiesFilter"
import { Suspense, useEffect, useState } from "react"
import Loader from "@/components/loader/Loader"

export default function Properties({}: {}) {
  const supabase = createClient()
  const [open, setOpen] = useState(false)
  const [limit, setLimit] = useState(9)

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
  }, [limit])

  return (
    <section className="relative w-full mt-8 h-full flex items-start justify-center flex-row gap-12 ms:flex-col ms:gap-0">
      <Suspense fallback={<Loader />}>
        <PropertiesFilter setOpen={setOpen} open={open} />
        <div className="w-[75%] h-max flex items-center justify-center ms:w-full">
          <Property
            open={open}
            setOpen={setOpen}
            setLimit={setLimit}
            limit={limit}
            data={todos}
          />
        </div>
      </Suspense>
    </section>
  )
}
