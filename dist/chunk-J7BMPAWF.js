// src/components/Checkbox/Checkbox.tsx
import React from 'react'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { jsx } from 'react/jsx-runtime'
var Checkbox = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(RadixCheckbox.Root, {
    ref,
    className,
    ...props,
    children: /* @__PURE__ */ jsx(RadixCheckbox.Indicator, {
      children: /* @__PURE__ */ jsx('svg', {
        width: '10',
        height: '8',
        viewBox: '0 0 10 8',
        fill: 'none',
        children: /* @__PURE__ */ jsx('path', {
          d: 'M1 4L3.5 6.5L9 1',
          stroke: 'currentColor',
          strokeWidth: '1.5',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
      }),
    }),
  })
)
Checkbox.displayName = 'Checkbox'

export { Checkbox }
