// src/components/Popover/Popover.tsx
import React from 'react'
import * as RadixPopover from '@radix-ui/react-popover'
import { jsx } from 'react/jsx-runtime'
var Popover = RadixPopover.Root
var PopoverTrigger = RadixPopover.Trigger
var PopoverClose = RadixPopover.Close
var PopoverContent = React.forwardRef(({ className, align = 'center', sideOffset = 4, ...props }, ref) =>
  /* @__PURE__ */ jsx(RadixPopover.Portal, {
    children: /* @__PURE__ */ jsx(RadixPopover.Content, { ref, align, sideOffset, className, ...props }),
  })
)
PopoverContent.displayName = 'PopoverContent'

export { Popover, PopoverTrigger, PopoverClose, PopoverContent }
