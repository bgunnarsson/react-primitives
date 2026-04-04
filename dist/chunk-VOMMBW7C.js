// src/components/ScrollArea/ScrollArea.tsx
import React from "react";
import * as RadixScrollArea from "@radix-ui/react-scroll-area";
import { jsx, jsxs } from "react/jsx-runtime";
var ScrollArea = React.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(RadixScrollArea.Root, { ref, className, ...props, children: [
    /* @__PURE__ */ jsx(RadixScrollArea.Viewport, { children }),
    /* @__PURE__ */ jsx(RadixScrollArea.Scrollbar, { orientation: "vertical", children: /* @__PURE__ */ jsx(RadixScrollArea.Thumb, {}) }),
    /* @__PURE__ */ jsx(RadixScrollArea.Scrollbar, { orientation: "horizontal", children: /* @__PURE__ */ jsx(RadixScrollArea.Thumb, {}) }),
    /* @__PURE__ */ jsx(RadixScrollArea.Corner, {})
  ] })
);
ScrollArea.displayName = "ScrollArea";

export {
  ScrollArea
};
//# sourceMappingURL=chunk-VOMMBW7C.js.map