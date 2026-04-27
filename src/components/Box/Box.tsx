import React from 'react'

type BoxElement =
  | 'div'
  | 'span'
  | 'section'
  | 'article'
  | 'aside'
  | 'main'
  | 'header'
  | 'footer'
  | 'nav'
  | 'figure'
  | 'figcaption'
  | 'address'
  | 'pre'

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: BoxElement
}

export const Box = React.forwardRef<HTMLElement, BoxProps>(({ as: Tag = 'div', ...props }, ref) => {
  const Component = Tag as React.ElementType
  return <Component ref={ref} {...props} />
})
Box.displayName = 'Box'
