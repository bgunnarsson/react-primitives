// src/components/Toggle/Toggle.tsx
import React from "react";
import * as RadixToggle from "@radix-ui/react-toggle";
import { jsx } from "react/jsx-runtime";
var Toggle = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadixToggle.Root, { ref, className, ...props })
);
Toggle.displayName = "Toggle";

export {
  Toggle
};
//# sourceMappingURL=chunk-ZMWJOGOP.js.map