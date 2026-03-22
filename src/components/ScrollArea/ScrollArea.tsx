import React from 'react'
import * as RadixScrollArea from '@radix-ui/react-scroll-area'

export interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof RadixScrollArea.Root> {}
export const ScrollArea = React.forwardRef<React.ElementRef<typeof RadixScrollArea.Root>, ScrollAreaProps>(
  ({ className, children, ...props }, ref) => (
    <RadixScrollArea.Root ref={ref} className={className} {...props}>
      <RadixScrollArea.Viewport>{children}</RadixScrollArea.Viewport>
      <RadixScrollArea.Scrollbar orientation="vertical">
        <RadixScrollArea.Thumb />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Scrollbar orientation="horizontal">
        <RadixScrollArea.Thumb />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Corner />
    </RadixScrollArea.Root>
  )
)
ScrollArea.displayName = 'ScrollArea'
