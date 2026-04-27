import React__default from 'react'

type StackElement =
  | 'div'
  | 'section'
  | 'article'
  | 'aside'
  | 'main'
  | 'header'
  | 'footer'
  | 'nav'
  | 'ul'
  | 'ol'
  | 'li'
  | 'span'
type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'
type Align = 'start' | 'center' | 'end' | 'stretch' | 'baseline'
type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
type Wrap = 'wrap' | 'nowrap' | 'wrap-reverse'
interface StackProps extends React__default.HTMLAttributes<HTMLElement> {
  as?: StackElement
  direction?: Direction
  align?: Align
  justify?: Justify
  wrap?: Wrap
  gap?: number | string
  inline?: boolean
}
declare const Stack: React__default.ForwardRefExoticComponent<StackProps & React__default.RefAttributes<HTMLElement>>
type FlexProps = StackProps
declare const Flex: React__default.ForwardRefExoticComponent<StackProps & React__default.RefAttributes<HTMLElement>>

export { Flex, type FlexProps, Stack, type StackProps }
