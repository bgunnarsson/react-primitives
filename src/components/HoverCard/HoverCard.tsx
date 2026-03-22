import React from 'react'
import * as RadixHoverCard from '@radix-ui/react-hover-card'

export const HoverCard = RadixHoverCard.Root
export const HoverCardTrigger = RadixHoverCard.Trigger

export interface HoverCardContentProps extends React.ComponentPropsWithoutRef<typeof RadixHoverCard.Content> {}

export const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof RadixHoverCard.Content>,
  HoverCardContentProps
>(({ className, ...props }, ref) => (
  <RadixHoverCard.Portal>
    <RadixHoverCard.Content ref={ref} className={className} {...props} />
  </RadixHoverCard.Portal>
))
HoverCardContent.displayName = 'HoverCardContent'
