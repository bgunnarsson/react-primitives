// src/components/RadioGroup/RadioGroup.tsx
import React from "react";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { jsx } from "react/jsx-runtime";
var RadioGroup = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadixRadioGroup.Root, { ref, className, ...props })
);
RadioGroup.displayName = "RadioGroup";
var RadioGroupItem = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadixRadioGroup.Item, { ref, className, ...props, children: /* @__PURE__ */ jsx(RadixRadioGroup.Indicator, {}) })
);
RadioGroupItem.displayName = "RadioGroupItem";

export {
  RadioGroup,
  RadioGroupItem
};
//# sourceMappingURL=chunk-3XLJYAXD.js.map