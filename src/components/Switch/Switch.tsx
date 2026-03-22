import React from 'react'
import * as RadixSwitch from '@radix-ui/react-switch'

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof RadixSwitch.Root> {}

export const Switch = React.forwardRef<React.ElementRef<typeof RadixSwitch.Root>, SwitchProps>(
  ({ className, ...props }, ref) => (
    <RadixSwitch.Root ref={ref} className={className} {...props}>
      <RadixSwitch.Thumb />
    </RadixSwitch.Root>
  )
)
Switch.displayName = 'Switch'
