import React__default from 'react'
import * as RadixCollapsible from '@radix-ui/react-collapsible'

declare const Collapsible: React__default.ForwardRefExoticComponent<
  RadixCollapsible.CollapsibleProps & React__default.RefAttributes<HTMLDivElement>
>
declare const CollapsibleTrigger: React__default.ForwardRefExoticComponent<
  RadixCollapsible.CollapsibleTriggerProps & React__default.RefAttributes<HTMLButtonElement>
>
interface CollapsibleContentProps extends React__default.ComponentPropsWithoutRef<typeof RadixCollapsible.Content> {}
declare const CollapsibleContent: React__default.ForwardRefExoticComponent<
  CollapsibleContentProps & React__default.RefAttributes<HTMLDivElement>
>

export { Collapsible, CollapsibleContent, type CollapsibleContentProps, CollapsibleTrigger }
