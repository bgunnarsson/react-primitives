import type React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const Badge = (props: BadgeProps) => <span {...props} />
