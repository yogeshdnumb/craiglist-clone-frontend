import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CategoryAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          <ul className=" gap-2 list-decimal list-inside max-h-72 flex flex-col flex-wrap">
            <li>lorem</li>
            <li>ipsum</li>
            <li>dollar</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          <ul className="list-decimal list-inside">
            <li></li>
            <li></li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
