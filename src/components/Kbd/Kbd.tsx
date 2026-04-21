import React from 'react'

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {}

export const Kbd = React.forwardRef<HTMLElement, KbdProps>(({ className, children, ...props }, ref) => (
  <kbd ref={ref} className={className} {...props}>
    {children}
  </kbd>
))
Kbd.displayName = 'Kbd'
