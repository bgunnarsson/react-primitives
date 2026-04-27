import React from 'react'
import * as RadixAccordion from '@radix-ui/react-accordion'

export const Accordion = RadixAccordion.Root

export interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof RadixAccordion.Item> {}
export const AccordionItem = React.forwardRef<React.ElementRef<typeof RadixAccordion.Item>, AccordionItemProps>(
  (props, ref) => <RadixAccordion.Item ref={ref} {...props} />
)
AccordionItem.displayName = 'AccordionItem'

export interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof RadixAccordion.Trigger> {}
export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Trigger>,
  AccordionTriggerProps
>(({ children, ...props }, ref) => (
  <RadixAccordion.Header>
    <RadixAccordion.Trigger ref={ref} {...props}>
      {children}
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
))
AccordionTrigger.displayName = 'AccordionTrigger'

export interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof RadixAccordion.Content> {}
export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Content>,
  AccordionContentProps
>((props, ref) => <RadixAccordion.Content ref={ref} {...props} />)
AccordionContent.displayName = 'AccordionContent'
