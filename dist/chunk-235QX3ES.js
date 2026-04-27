// src/components/Accordion/Accordion.tsx
import React from 'react'
import * as RadixAccordion from '@radix-ui/react-accordion'
import { jsx } from 'react/jsx-runtime'
var Accordion = RadixAccordion.Root
var AccordionItem = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(RadixAccordion.Item, { ref, ...props }))
AccordionItem.displayName = 'AccordionItem'
var AccordionTrigger = React.forwardRef(({ children, ...props }, ref) =>
  /* @__PURE__ */ jsx(RadixAccordion.Header, {
    children: /* @__PURE__ */ jsx(RadixAccordion.Trigger, { ref, ...props, children }),
  })
)
AccordionTrigger.displayName = 'AccordionTrigger'
var AccordionContent = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(RadixAccordion.Content, { ref, ...props }))
AccordionContent.displayName = 'AccordionContent'

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
