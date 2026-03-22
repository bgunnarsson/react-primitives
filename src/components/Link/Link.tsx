import React from 'react'

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link = ({ className, ...props }: LinkProps) => (
  <a className={className} {...props} />
)
