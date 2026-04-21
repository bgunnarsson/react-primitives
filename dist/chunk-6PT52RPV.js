// src/components/Portal/Portal.tsx
import React from "react";
import * as RadixPortal from "@radix-ui/react-portal";
import { jsx } from "react/jsx-runtime";
var Portal = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadixPortal.Root, { ref, className, ...props }));
Portal.displayName = "Portal";

export {
  Portal
};
//# sourceMappingURL=chunk-6PT52RPV.js.map