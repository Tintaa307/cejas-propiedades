import { BatchProps } from "@/types/types"
import Property from "@/components/properties/Properties"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import PropertiesFilter from "./PropertiesFilter"

export default async function Properties() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = (await supabase.from("properties").select()) as {
    data: BatchProps[]
  }

  return (
    <section className="relative w-full mt-8 h-full flex items-start justify-center flex-row gap-12">
      <PropertiesFilter />
      <div className="w-[75%] h-max flex items-center justify-center">
        <Property data={todos} />
      </div>
    </section>
  )
}
