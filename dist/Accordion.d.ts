import React__default from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';

declare const Accordion: React__default.ForwardRefExoticComponent<(RadixAccordion.AccordionSingleProps | RadixAccordion.AccordionMultipleProps) & React__default.RefAttributes<HTMLDivElement>>;
interface AccordionItemProps extends React__default.ComponentPropsWithoutRef<typeof RadixAccordion.Item> {
}
declare const AccordionItem: React__default.ForwardRefExoticComponent<AccordionItemProps & React__default.RefAttributes<HTMLDivElement>>;
interface AccordionTriggerProps extends React__default.ComponentPropsWithoutRef<typeof RadixAccordion.Trigger> {
}
declare const AccordionTrigger: React__default.ForwardRefExoticComponent<AccordionTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
interface AccordionContentProps extends React__default.ComponentPropsWithoutRef<typeof RadixAccordion.Content> {
}
declare const AccordionContent: React__default.ForwardRefExoticComponent<AccordionContentProps & React__default.RefAttributes<HTMLDivElement>>;

export { Accordion, AccordionContent, type AccordionContentProps, AccordionItem, type AccordionItemProps, AccordionTrigger, type AccordionTriggerProps };
