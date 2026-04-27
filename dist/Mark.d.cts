import React__default from 'react'

interface MarkProps extends React__default.HTMLAttributes<HTMLElement> {
  text?: string
  query?: string | string[]
  caseSensitive?: boolean
  highlight?: (match: string, index: number) => React__default.ReactNode
}
declare const Mark: React__default.ForwardRefExoticComponent<MarkProps & React__default.RefAttributes<HTMLElement>>

export { Mark, type MarkProps }
