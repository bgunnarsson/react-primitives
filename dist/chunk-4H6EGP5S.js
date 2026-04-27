// src/components/Switch/Switch.tsx
import React from 'react'
import * as RadixSwitch from '@radix-ui/react-switch'
import { jsx } from 'react/jsx-runtime'
var Switch = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(RadixSwitch.Root, {
    ref,
    className,
    ...props,
    children: /* @__PURE__ */ jsx(RadixSwitch.Thumb, {}),
  })
)
Switch.displayName = 'Switch'

export { Switch }
