import React from 'react'

type StackElement = 'div' | 'section' | 'article' | 'aside' | 'main' | 'header' | 'footer' | 'nav' | 'ul' | 'ol' | 'li' | 'span'

type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'
type Align = 'start' | 'center' | 'end' | 'stretch' | 'baseline'
type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
type Wrap = 'wrap' | 'nowrap' | 'wrap-reverse'

const ALIGN: Record<Align, React.CSSProperties['alignItems']> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
}

const JUSTIFY: Record<Justify, React.CSSProperties['justifyContent']> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
}

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  as?: StackElement
  direction?: Direction
  align?: Align
  justify?: Justify
  wrap?: Wrap
  gap?: number | string
  inline?: boolean
}

export const Stack = React.forwardRef<HTMLElement, StackProps>(
  ({ as: Tag = 'div', direction, align, justify, wrap, gap, inline, style, ...props }, ref) => {
    const composed: React.CSSProperties = {
      display: inline ? 'inline-flex' : 'flex',
      flexDirection: direction,
      alignItems: align ? ALIGN[align] : undefined,
      justifyContent: justify ? JUSTIFY[justify] : undefined,
      flexWrap: wrap,
      gap,
      ...style,
    }
    const Component = Tag as React.ElementType
    return <Component ref={ref} data-direction={direction} style={composed} {...props} />
  },
)
Stack.displayName = 'Stack'

export type FlexProps = StackProps
export const Flex = Stack
