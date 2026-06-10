import type React from 'react'
import { forwardRef } from 'react'

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ className, ...props }, ref) => (
  <a ref={ref} className={className} {...props} />
))
Link.displayName = 'Link'
