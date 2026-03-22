import React from 'react'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'

export interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Root> {}
export const RadioGroup = React.forwardRef<React.ElementRef<typeof RadixRadioGroup.Root>, RadioGroupProps>(
  ({ className, ...props }, ref) => <RadixRadioGroup.Root ref={ref} className={className} {...props} />
)
RadioGroup.displayName = 'RadioGroup'

export interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Item> {}
export const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadixRadioGroup.Item>, RadioGroupItemProps>(
  ({ className, ...props }, ref) => (
    <RadixRadioGroup.Item ref={ref} className={className} {...props}>
      <RadixRadioGroup.Indicator />
    </RadixRadioGroup.Item>
  )
)
RadioGroupItem.displayName = 'RadioGroupItem'
