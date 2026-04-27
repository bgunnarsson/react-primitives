import type React from 'react'

export interface NavProps extends React.HTMLAttributes<HTMLElement> {}
export const Nav = ({ className, ...props }: NavProps) => <nav className={className} {...props} />

export interface NavListProps extends React.HTMLAttributes<HTMLUListElement> {}
export const NavList = ({ className, ...props }: NavListProps) => <ul className={className} {...props} />

export interface NavItemProps extends React.HTMLAttributes<HTMLLIElement> {}
export const NavItem = ({ className, ...props }: NavItemProps) => <li className={className} {...props} />
