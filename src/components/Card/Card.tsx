import type React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Card = (props: CardProps) => <div {...props} />

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CardContent = (props: CardContentProps) => <div {...props} />
