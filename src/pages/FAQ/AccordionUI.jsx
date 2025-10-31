import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/Ui/accordion"

export function AccordionUI() {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full border-2 border-gray-300 rounded-lg"
            defaultValue="item-1"
        >
            <AccordionItem value="item-1" className="px-3 border-b-2 border-gray-300">
                <AccordionTrigger className="py-4 font-Estedad-Bold 
                data-[state=open]:text-primary-color">
                    امکانات ترخینه
                </AccordionTrigger>
                <AccordionContent className="text-balance px-1 text-justify text-xs leading-5 
                text-gray-500 -mt-0.5 md:text-start md:text-sm line-clamp-">
                    <p className="w-full line-clamp-1">
                        وبسایت سفارش غذای رستوران‌های زنجیره‌ای ترخینه با اتصال مستقیم به نرم افزار اتوماسیون شعبات رستوران امکان اشتباهات هنگام ثبت سفارش آنلاین غذا و همچنین زمان مورد نیاز برای آماده سازی و تحویل آن را به حداقل ممکن می .
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Shipping Details</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        We offer worldwide shipping through trusted courier partners.
                        Standard delivery takes 3-5 business days, while express shipping
                        ensures delivery within 1-2 business days.
                    </p>
                    <p>
                        All orders are carefully packaged and fully insured. Track your
                        shipment in real-time through our dedicated tracking portal.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Return Policy</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        We stand behind our products with a comprehensive 30-day return
                        policy. If you&apos;re not completely satisfied, simply return the
                        item in its original condition.
                    </p>
                    <p>
                        Our hassle-free return process includes free return shipping and
                        full refunds processed within 48 hours of receiving the returned
                        item.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
