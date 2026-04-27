import React from 'react'
import * as RadixCollapsible from '@radix-ui/react-collapsible'

export const Collapsible = RadixCollapsible.Root
export const CollapsibleTrigger = RadixCollapsible.Trigger

export interface CollapsibleContentProps extends React.ComponentPropsWithoutRef<typeof RadixCollapsible.Content> {}
export const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof RadixCollapsible.Content>,
  CollapsibleContentProps
>(({ className, ...props }, ref) => <RadixCollapsible.Content ref={ref} className={className} {...props} />)
CollapsibleContent.displayName = 'CollapsibleContent'
