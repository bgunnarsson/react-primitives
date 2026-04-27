import React from 'react'
import * as RadixSeparator from '@radix-ui/react-separator'

export interface SeparatorProps extends React.ComponentPropsWithoutRef<typeof RadixSeparator.Root> {}

export const Separator = React.forwardRef<React.ElementRef<typeof RadixSeparator.Root>, SeparatorProps>(
  ({ className, ...props }, ref) => <RadixSeparator.Root ref={ref} className={className} {...props} />
)
Separator.displayName = 'Separator'
