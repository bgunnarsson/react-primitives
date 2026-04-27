// src/components/Progress/Progress.tsx
import React from 'react'
import * as RadixProgress from '@radix-ui/react-progress'
import { jsx } from 'react/jsx-runtime'
var Progress = React.forwardRef(({ className, value, ...props }, ref) =>
  /* @__PURE__ */ jsx(RadixProgress.Root, {
    ref,
    value,
    className,
    ...props,
    children: /* @__PURE__ */ jsx(RadixProgress.Indicator, {
      style: { transform: `translateX(-${100 - (value ?? 0)}%)` },
    }),
  })
)
Progress.displayName = 'Progress'

export { Progress }
