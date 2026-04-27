import { figma } from '@figma/code-connect'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion'

figma.connect(Accordion, 'FIGMA_COMPONENT_URL', {
  props: {},
  example: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section title</AccordionTrigger>
        <AccordionContent>Section content.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
})
