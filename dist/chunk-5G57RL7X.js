// src/components/Timeline/Timeline.tsx
import React from 'react'
import { jsx } from 'react/jsx-runtime'
var TimelineContext = React.createContext({ orientation: 'vertical' })
var TimelineItemContext = React.createContext({ state: 'default' })
var Timeline = React.forwardRef(({ orientation = 'vertical', ...props }, ref) =>
  /* @__PURE__ */ jsx(TimelineContext.Provider, {
    value: { orientation },
    children: /* @__PURE__ */ jsx('ol', { ref, 'data-orientation': orientation, ...props }),
  })
)
Timeline.displayName = 'Timeline'
var TimelineItem = React.forwardRef(({ state = 'default', ...props }, ref) => {
  const { orientation } = React.useContext(TimelineContext)
  return /* @__PURE__ */ jsx(TimelineItemContext.Provider, {
    value: { state },
    children: /* @__PURE__ */ jsx('li', { ref, 'data-state': state, 'data-orientation': orientation, ...props }),
  })
})
TimelineItem.displayName = 'TimelineItem'
var TimelineIndicator = React.forwardRef((props, ref) => {
  const { state } = React.useContext(TimelineItemContext)
  return /* @__PURE__ */ jsx('span', { ref, 'data-state': state, 'aria-hidden': 'true', ...props })
})
TimelineIndicator.displayName = 'TimelineIndicator'
var TimelineConnector = React.forwardRef((props, ref) => {
  const { orientation } = React.useContext(TimelineContext)
  const { state } = React.useContext(TimelineItemContext)
  return /* @__PURE__ */ jsx('span', {
    ref,
    'data-state': state,
    'data-orientation': orientation,
    'aria-hidden': 'true',
    ...props,
  })
})
TimelineConnector.displayName = 'TimelineConnector'
var TimelineContent = React.forwardRef((props, ref) => /* @__PURE__ */ jsx('div', { ref, ...props }))
TimelineContent.displayName = 'TimelineContent'
var TimelineTitle = React.forwardRef(({ as: Tag = 'p', ...props }, ref) => {
  const Component = Tag
  return /* @__PURE__ */ jsx(Component, { ref, ...props })
})
TimelineTitle.displayName = 'TimelineTitle'
var TimelineDescription = React.forwardRef((props, ref) => /* @__PURE__ */ jsx('p', { ref, ...props }))
TimelineDescription.displayName = 'TimelineDescription'
var TimelineTime = React.forwardRef((props, ref) => /* @__PURE__ */ jsx('time', { ref, ...props }))
TimelineTime.displayName = 'TimelineTime'

export {
  Timeline,
  TimelineItem,
  TimelineIndicator,
  TimelineConnector,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
}
