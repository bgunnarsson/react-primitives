import React from 'react'

export interface MarkProps extends React.HTMLAttributes<HTMLElement> {
  text?: string
  query?: string | string[]
  caseSensitive?: boolean
  highlight?: (match: string, index: number) => React.ReactNode
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export const Mark = React.forwardRef<HTMLElement, MarkProps>(
  ({ text, query, caseSensitive = false, highlight, children, ...rest }, ref) => {
    if (text !== undefined && query) {
      const queries = Array.isArray(query) ? query : [query]
      const cleaned = queries.map((q) => q.trim()).filter(Boolean)
      if (cleaned.length === 0) {
        return (
          <span ref={ref as React.Ref<HTMLSpanElement>} {...rest}>
            {text}
          </span>
        )
      }
      const pattern = new RegExp(`(${cleaned.map(escapeRegExp).join('|')})`, caseSensitive ? 'g' : 'gi')
      const parts = text.split(pattern)
      return (
        <span ref={ref as React.Ref<HTMLSpanElement>} {...rest}>
          {parts.map((part, i) => {
            const isMatch = pattern.test(part)
            pattern.lastIndex = 0
            if (isMatch) {
              if (highlight) return <React.Fragment key={i}>{highlight(part, i)}</React.Fragment>
              return <mark key={i}>{part}</mark>
            }
            return <React.Fragment key={i}>{part}</React.Fragment>
          })}
        </span>
      )
    }
    return <mark ref={ref as React.Ref<HTMLElement>} {...rest}>{children}</mark>
  },
)
Mark.displayName = 'Mark'
