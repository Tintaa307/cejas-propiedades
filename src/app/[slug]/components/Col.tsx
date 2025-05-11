import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import type { Property } from "@/types/types"
import { IconArrowNarrowRight } from "@tabler/icons-react"

const Col = ({ fraccion }: { fraccion: Property | undefined }) => {
  return (
    <div className="w-1/3 h-max border-2 border-primary_green rounded-xl lg:w-full">
      <header className="w-full h-max bg-primary_green flex items-center justify-center rounded-t-lg">
        <h6 className="text-cream font-semibold text-lg p-4 text-center">
          {fraccion?.title}
        </h6>
      </header>
      <ul className="w-full flex flex-col">
        {fraccion &&
          fraccion?.list.map((property, index) => (
            <Accordion
              type="single"
              collapsible
              key={index}
              className={cn(
                "w-full border-b border-primary_green/50 px-4 py-2",
                {
                  "border-none": index === fraccion.list.length - 1,
                }
              )}
            >
              <AccordionItem value={`item-${index}`} className="border-b-0">
                <AccordionTrigger className="text-primary_green text-sm font-medium hover:no-underline hover:text-primary_green/80 py-1">
                  {property}
                </AccordionTrigger>
                <AccordionContent>
                  {/* Muestra el precio que corresponde al índice del lote */}
                  <div>
                    <p className="text-primary_green text-sm font-medium flex flex-row gap-2 items-center">
                      <IconArrowNarrowRight
                        size={16}
                        className="text-primary_green"
                      />
                      {fraccion.prices[index] || "Precio no disponible"}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
      </ul>
    </div>
  )
}

export default Col
