// src/components/Tooltip/Tooltip.tsx
import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { jsx } from "react/jsx-runtime";
var Tooltip = ({ delayDuration = 200, children, ...props }) => /* @__PURE__ */ jsx(RadixTooltip.Provider, { delayDuration, children: /* @__PURE__ */ jsx(RadixTooltip.Root, { ...props, children }) });
var TooltipTrigger = RadixTooltip.Trigger;
var TooltipContent = React.forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(RadixTooltip.Portal, { children: /* @__PURE__ */ jsx(RadixTooltip.Content, { ref, sideOffset, className, ...props }) })
);
TooltipContent.displayName = "TooltipContent";

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent
};
//# sourceMappingURL=chunk-6BKFFGSP.js.map