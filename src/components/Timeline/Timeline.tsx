import React from 'react'

type Orientation = 'vertical' | 'horizontal'

interface TimelineContextValue {
  orientation: Orientation
}
const TimelineContext = React.createContext<TimelineContextValue>({ orientation: 'vertical' })

interface TimelineItemContextValue {
  state: 'past' | 'current' | 'future' | 'default'
}
const TimelineItemContext = React.createContext<TimelineItemContextValue>({ state: 'default' })

export interface TimelineProps extends React.HTMLAttributes<HTMLOListElement> {
  orientation?: Orientation
}

export const Timeline = React.forwardRef<HTMLOListElement, TimelineProps>(
  ({ orientation = 'vertical', ...props }, ref) => (
    <TimelineContext.Provider value={{ orientation }}>
      <ol ref={ref} data-orientation={orientation} {...props} />
    </TimelineContext.Provider>
  )
)
Timeline.displayName = 'Timeline'

export interface TimelineItemProps extends React.HTMLAttributes<HTMLLIElement> {
  state?: 'past' | 'current' | 'future' | 'default'
}

export const TimelineItem = React.forwardRef<HTMLLIElement, TimelineItemProps>(
  ({ state = 'default', ...props }, ref) => {
    const { orientation } = React.useContext(TimelineContext)
    return (
      <TimelineItemContext.Provider value={{ state }}>
        <li ref={ref} data-state={state} data-orientation={orientation} {...props} />
      </TimelineItemContext.Provider>
    )
  }
)
TimelineItem.displayName = 'TimelineItem'

export interface TimelineIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {}
export const TimelineIndicator = React.forwardRef<HTMLSpanElement, TimelineIndicatorProps>((props, ref) => {
  const { state } = React.useContext(TimelineItemContext)
  return <span ref={ref} data-state={state} aria-hidden="true" {...props} />
})
TimelineIndicator.displayName = 'TimelineIndicator'

export interface TimelineConnectorProps extends React.HTMLAttributes<HTMLSpanElement> {}
export const TimelineConnector = React.forwardRef<HTMLSpanElement, TimelineConnectorProps>((props, ref) => {
  const { orientation } = React.useContext(TimelineContext)
  const { state } = React.useContext(TimelineItemContext)
  return <span ref={ref} data-state={state} data-orientation={orientation} aria-hidden="true" {...props} />
})
TimelineConnector.displayName = 'TimelineConnector'

export interface TimelineContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export const TimelineContent = React.forwardRef<HTMLDivElement, TimelineContentProps>((props, ref) => (
  <div ref={ref} {...props} />
))
TimelineContent.displayName = 'TimelineContent'

export interface TimelineTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
}
export const TimelineTitle = React.forwardRef<HTMLElement, TimelineTitleProps>(({ as: Tag = 'p', ...props }, ref) => {
  const Component = Tag as React.ElementType
  return <Component ref={ref} {...props} />
})
TimelineTitle.displayName = 'TimelineTitle'

export interface TimelineDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export const TimelineDescription = React.forwardRef<HTMLParagraphElement, TimelineDescriptionProps>((props, ref) => (
  <p ref={ref} {...props} />
))
TimelineDescription.displayName = 'TimelineDescription'

export interface TimelineTimeProps extends React.TimeHTMLAttributes<HTMLTimeElement> {}
export const TimelineTime = React.forwardRef<HTMLTimeElement, TimelineTimeProps>((props, ref) => (
  <time ref={ref} {...props} />
))
TimelineTime.displayName = 'TimelineTime'
