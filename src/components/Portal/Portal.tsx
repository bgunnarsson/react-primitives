import React from 'react'
import * as RadixPortal from '@radix-ui/react-portal'

export interface PortalProps extends React.ComponentPropsWithoutRef<typeof RadixPortal.Root> {}

export const Portal = React.forwardRef<React.ElementRef<typeof RadixPortal.Root>, PortalProps>(
  ({ className, ...props }, ref) => <RadixPortal.Root ref={ref} className={className} {...props} />
)
Portal.displayName = 'Portal'
