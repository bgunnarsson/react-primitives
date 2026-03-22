import React from 'react'
import * as RadixPopover from '@radix-ui/react-popover'

export const Popover = RadixPopover.Root
export const PopoverTrigger = RadixPopover.Trigger
export const PopoverClose = RadixPopover.Close

export interface PopoverContentProps extends React.ComponentPropsWithoutRef<typeof RadixPopover.Content> {}
export const PopoverContent = React.forwardRef<React.ElementRef<typeof RadixPopover.Content>, PopoverContentProps>(
  ({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
    <RadixPopover.Portal>
      <RadixPopover.Content ref={ref} align={align} sideOffset={sideOffset} className={className} {...props} />
    </RadixPopover.Portal>
  )
)
PopoverContent.displayName = 'PopoverContent'
