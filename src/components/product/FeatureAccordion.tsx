import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FeatureAccordion() {
    return (
        <Accordion type="single" collapsible className="w-full -mb-28" defaultValue="item-1">

            <AccordionItem value="item-1">
                <AccordionTrigger>DESCRIPTION</AccordionTrigger>
                <AccordionContent className="pl-5">
                    <ul className="list-disc">
                        <li className="">Suitable for 35 &ndash; 47mm thick doors</li>
                        <li>70mm backset as standard</li>
                        <li>75mm diameter rose</li>
                        <li>C4, 6 pin keyway</li>
                        <li>10 year mechanical warranty</li>
                        <li>Stainless Steel latchbolt</li>
                        <li>Fire tested to AS1530.4</li>
                        <li>Disabled compliant with AS.1428</li>
                        <li>Satin Chrome Finish</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>ADDITIONAL INFORMATION</AccordionTrigger>
                <AccordionContent className="">
                    <p className="font-bold mb-2 text-xs">PRODUCT</p>
                    <div className="mb-5">
                        <ul className="list-disc list-outside pl-5">
                            <li>11019.SC &ndash; (CL8082D-SC)Phoenix Fire Rated Lever Passage Set</li>
                            <li>11021.SC &ndash; (CL8030D-SC) Phoenix Fire Rated Lever Privacy Set</li>
                            <li>11020.SC &ndash; (CL8000D-SC) Phoenix Fire Rated Lever Entrance Set</li>
                            <li>11022.SC &ndash; (CL8052D-SC) Phoenix Fire Rated Lever Escape / Half Set</li>
                            <li>11023.SC &ndash; (CL8012D-SC) Phoenix Fire Rated Lever Classroom Set</li>
                            <li>11024.SC &ndash; (CL8062D-SC) Phoenix Fire Rated Lever Storeroom Set</li>
                            <li>11025.SC &ndash; (CL8095D-SC) Phoenix Fire Rated Lever Double Vestibule Set</li>
                            <li>11026.SC &ndash; (CL8011D-SC) Phoenix Fire Rated Lever Double Communicating Set</li>
                        </ul>
                    </div>
                    <p className="font-bold text-xs mb-2">FINISH</p>
                    Satin Chrome Finish,
                    Also available in Matt Black finish.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
