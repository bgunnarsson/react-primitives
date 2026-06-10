import type React from 'react'
import { forwardRef } from 'react'

export interface NavProps extends React.HTMLAttributes<HTMLElement> {}
export const Nav = forwardRef<HTMLElement, NavProps>(({ className, ...props }, ref) => <nav ref={ref} className={className} {...props} />)
Nav.displayName = 'Nav'

export interface NavListProps extends React.HTMLAttributes<HTMLUListElement> {}
export const NavList = forwardRef<HTMLUListElement, NavListProps>(({ className, ...props }, ref) => <ul ref={ref} className={className} {...props} />)
NavList.displayName = 'NavList'

export interface NavItemProps extends React.HTMLAttributes<HTMLLIElement> {}
export const NavItem = forwardRef<HTMLLIElement, NavItemProps>(({ className, ...props }, ref) => <li ref={ref} className={className} {...props} />)
NavItem.displayName = 'NavItem'
