import type React from 'react'
import { forwardRef } from 'react'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

// biome-ignore lint/a11y/noLabelWithoutControl: consumers wire htmlFor or wrap the input themselves; this primitive is a styling shell
export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => (
  <label ref={ref} className={className} {...props} />
))
Label.displayName = 'Label'
