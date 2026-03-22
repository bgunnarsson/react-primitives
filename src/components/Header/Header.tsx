import React from 'react'

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const Header = (props: HeaderProps) => (
  <header {...props} />
)
