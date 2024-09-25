import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Property } from "@/types/types";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import React from "react";

const Col = ({ fraccion }: { fraccion: Property | undefined }) => {
  return (
    <div className="w-1/3 h-max border-[2px] border-black rounded-[15px] lg:w-full">
      <header className="w-full h-max bg-black flex items-center justify-center rounded-t-[10px]">
        <h6 className="text-white font-semibold text-lg p-5">
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
              className={cn("w-full border-b-[1px] border-black px-10 py-3", {
                "border-none": index === fraccion.list.length - 1,
              })}
            >
              <AccordionItem value={`item-${index}`} className="border-b-0">
                <p className="text-black text-base font-medium flex flex-row gap-3">
                  <AccordionTrigger className="text-black text-base font-medium flex flex-row gap-3">
                    {property}
                  </AccordionTrigger>
                </p>
                <AccordionContent>
                  {/* Muestra el precio que corresponde al índice del lote */}
                  <div>
                    <p className="text-black text-base font-medium flex flex-row gap-3">
                      <IconArrowNarrowRight size={20} className="text-black" />
                      {fraccion.prices[index] || "Precio no disponible"}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
      </ul>
    </div>
  );
};

export default Col;
