// src/components/VisuallyHidden/VisuallyHidden.tsx
import React from 'react'
import * as RadixVisuallyHidden from '@radix-ui/react-visually-hidden'
import { jsx } from 'react/jsx-runtime'
var VisuallyHidden = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(RadixVisuallyHidden.Root, { ref, className, ...props })
)
VisuallyHidden.displayName = 'VisuallyHidden'

export { VisuallyHidden }
