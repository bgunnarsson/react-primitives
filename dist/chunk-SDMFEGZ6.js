// src/components/ToggleGroup/ToggleGroup.tsx
import React from 'react'
import * as RadixToggleGroup from '@radix-ui/react-toggle-group'
import { jsx } from 'react/jsx-runtime'
var ToggleGroup = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(RadixToggleGroup.Root, { ref, className, ...props })
)
ToggleGroup.displayName = 'ToggleGroup'
var ToggleGroupItem = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(RadixToggleGroup.Item, { ref, className, ...props })
)
ToggleGroupItem.displayName = 'ToggleGroupItem'

export { ToggleGroup, ToggleGroupItem }
