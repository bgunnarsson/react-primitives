import React from 'react'

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export const Footer = (props: FooterProps) => (
  <footer {...props} />
)
