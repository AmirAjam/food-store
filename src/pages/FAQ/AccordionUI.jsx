import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/Ui/accordion"

export function AccordionUI({ items }) {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full border-2 border-gray-300 rounded-lg"
            defaultValue="item-1"
        >
            {items.map(item => {
                return (
                    <AccordionItem value={item.id} className="px-3 border-b-2 border-gray-300">
                        <AccordionTrigger className="py-4 font-Estedad-Bold 
                data-[state=open]:text-primary-color md:text-base text-right">
                            {item.title}
                        </AccordionTrigger>
                        <AccordionContent
                            className="text-justify! px-1 text-xs leading-5 
                            text-gray-500 -mt-0.5 md:text-start md:text-sm"
                        >
                            <p className="w-full md:px-3 text-sm">{item.description}</p>
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion>
    )
}
