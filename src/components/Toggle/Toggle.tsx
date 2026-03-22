import React from 'react'
import * as RadixToggle from '@radix-ui/react-toggle'

export interface ToggleProps extends React.ComponentPropsWithoutRef<typeof RadixToggle.Root> {}
export const Toggle = React.forwardRef<React.ElementRef<typeof RadixToggle.Root>, ToggleProps>(
  ({ className, ...props }, ref) => <RadixToggle.Root ref={ref} className={className} {...props} />
)
Toggle.displayName = 'Toggle'
