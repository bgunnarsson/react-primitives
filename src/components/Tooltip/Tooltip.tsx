import React from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'

export interface TooltipProps extends React.ComponentPropsWithoutRef<typeof RadixTooltip.Root> {
  delayDuration?: number
}

export const Tooltip = ({ delayDuration = 200, children, ...props }: TooltipProps) => (
  <RadixTooltip.Provider delayDuration={delayDuration}>
    <RadixTooltip.Root {...props}>
      {children}
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
)

export const TooltipTrigger = RadixTooltip.Trigger

export interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof RadixTooltip.Content> {}
export const TooltipContent = React.forwardRef<React.ElementRef<typeof RadixTooltip.Content>, TooltipContentProps>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <RadixTooltip.Portal>
      <RadixTooltip.Content ref={ref} sideOffset={sideOffset} className={className} {...props} />
    </RadixTooltip.Portal>
  )
)
TooltipContent.displayName = 'TooltipContent'
