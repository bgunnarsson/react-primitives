import React from 'react'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof RadixCheckbox.Root> {}

export const Checkbox = React.forwardRef<React.ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <RadixCheckbox.Root ref={ref} className={className} {...props}>
      <RadixCheckbox.Indicator>
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
          <path
            d="M1 4L3.5 6.5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
)
Checkbox.displayName = 'Checkbox'
