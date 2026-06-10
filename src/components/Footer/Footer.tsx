import type React from 'react'
import { forwardRef } from 'react'

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export const Footer = forwardRef<HTMLElement, FooterProps>((props, ref) => <footer ref={ref} {...props} />)
Footer.displayName = 'Footer'
