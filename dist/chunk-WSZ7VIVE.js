// src/components/Collapsible/Collapsible.tsx
import React from "react";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { jsx } from "react/jsx-runtime";
var Collapsible = RadixCollapsible.Root;
var CollapsibleTrigger = RadixCollapsible.Trigger;
var CollapsibleContent = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadixCollapsible.Content, { ref, className, ...props })
);
CollapsibleContent.displayName = "CollapsibleContent";

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
};
//# sourceMappingURL=chunk-WSZ7VIVE.js.map