import React from 'react'
import * as RadixAspectRatio from '@radix-ui/react-aspect-ratio'

export interface AspectRatioProps extends React.ComponentPropsWithoutRef<typeof RadixAspectRatio.Root> {}

export const AspectRatio = React.forwardRef<
  React.ElementRef<typeof RadixAspectRatio.Root>,
  AspectRatioProps
>(({ className, ...props }, ref) => (
  <RadixAspectRatio.Root ref={ref} className={className} {...props} />
))
AspectRatio.displayName = 'AspectRatio'
