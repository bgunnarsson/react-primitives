import React__default from 'react'

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
interface BoxProps extends React__default.HTMLAttributes<HTMLElement> {
  as?: BoxElement
}
declare const Box: React__default.ForwardRefExoticComponent<BoxProps & React__default.RefAttributes<HTMLElement>>

export { Box, type BoxProps }
