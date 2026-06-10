import type React from 'react'
import { forwardRef } from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => <div ref={ref} {...props} />)
Card.displayName = 'Card'

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CardContent = forwardRef<HTMLDivElement, CardContentProps>((props, ref) => <div ref={ref} {...props} />)
CardContent.displayName = 'CardContent'
