import type React from 'react'
import { forwardRef } from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => <span ref={ref} {...props} />)
Badge.displayName = 'Badge'
