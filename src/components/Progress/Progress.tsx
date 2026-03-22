import React from 'react'
import * as RadixProgress from '@radix-ui/react-progress'

export interface ProgressProps extends React.ComponentPropsWithoutRef<typeof RadixProgress.Root> {}
export const Progress = React.forwardRef<React.ElementRef<typeof RadixProgress.Root>, ProgressProps>(
  ({ className, value, ...props }, ref) => (
    <RadixProgress.Root ref={ref} value={value} className={className} {...props}>
      <RadixProgress.Indicator style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }} />
    </RadixProgress.Root>
  )
)
Progress.displayName = 'Progress'
