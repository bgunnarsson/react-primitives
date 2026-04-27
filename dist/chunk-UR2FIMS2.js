// src/components/Input/Input.tsx
import React from 'react'
import { jsx } from 'react/jsx-runtime'
var Input = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx('input', { ref, className, ...props })
)
Input.displayName = 'Input'

export { Input }
