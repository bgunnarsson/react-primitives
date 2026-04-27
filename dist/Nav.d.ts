import * as react_jsx_runtime from 'react/jsx-runtime'
import React__default from 'react'

interface NavProps extends React__default.HTMLAttributes<HTMLElement> {}
declare const Nav: ({ className, ...props }: NavProps) => react_jsx_runtime.JSX.Element
interface NavListProps extends React__default.HTMLAttributes<HTMLUListElement> {}
declare const NavList: ({ className, ...props }: NavListProps) => react_jsx_runtime.JSX.Element
interface NavItemProps extends React__default.HTMLAttributes<HTMLLIElement> {}
declare const NavItem: ({ className, ...props }: NavItemProps) => react_jsx_runtime.JSX.Element

export { Nav, NavItem, type NavItemProps, NavList, type NavListProps, type NavProps }
