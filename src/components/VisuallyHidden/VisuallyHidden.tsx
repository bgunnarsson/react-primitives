import React from 'react'
import * as RadixVisuallyHidden from '@radix-ui/react-visually-hidden'

export interface VisuallyHiddenProps extends React.ComponentPropsWithoutRef<typeof RadixVisuallyHidden.Root> {}

export const VisuallyHidden = React.forwardRef<
  React.ElementRef<typeof RadixVisuallyHidden.Root>,
  VisuallyHiddenProps
>(({ className, ...props }, ref) => (
  <RadixVisuallyHidden.Root ref={ref} className={className} {...props} />
))
VisuallyHidden.displayName = 'VisuallyHidden'
