import type React from 'react'
import { forwardRef } from 'react'

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => <header ref={ref} {...props} />)
Header.displayName = 'Header'
