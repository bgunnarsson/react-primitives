// src/components/HoverCard/HoverCard.tsx
import React from 'react'
import * as RadixHoverCard from '@radix-ui/react-hover-card'
import { jsx } from 'react/jsx-runtime'
var HoverCard = RadixHoverCard.Root
var HoverCardTrigger = RadixHoverCard.Trigger
var HoverCardContent = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(RadixHoverCard.Portal, {
    children: /* @__PURE__ */ jsx(RadixHoverCard.Content, { ref, className, ...props }),
  })
)
HoverCardContent.displayName = 'HoverCardContent'

export { HoverCard, HoverCardTrigger, HoverCardContent }
