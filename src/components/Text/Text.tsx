import React from 'react'

type TextElement = 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextElement
}

export const Text = ({ as: Tag = 'p', className, ...props }: TextProps) => (
  <Tag className={className} {...props} />
)
