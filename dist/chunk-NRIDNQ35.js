// src/components/Slider/Slider.tsx
import React from "react";
import * as RadixSlider from "@radix-ui/react-slider";
import { jsx, jsxs } from "react/jsx-runtime";
var Slider = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxs(RadixSlider.Root, { ref, className, ...props, children: [
    /* @__PURE__ */ jsx(RadixSlider.Track, { children: /* @__PURE__ */ jsx(RadixSlider.Range, {}) }),
    (props.defaultValue ?? props.value ?? [0]).map((_, i) => /* @__PURE__ */ jsx(RadixSlider.Thumb, {}, i))
  ] })
);
Slider.displayName = "Slider";

export {
  Slider
};
//# sourceMappingURL=chunk-NRIDNQ35.js.map