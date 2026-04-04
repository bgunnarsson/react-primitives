// src/components/Select/Select.tsx
import React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { jsx, jsxs } from "react/jsx-runtime";
var Select = RadixSelect.Root;
var SelectGroup = RadixSelect.Group;
var SelectValue = RadixSelect.Value;
var SelectTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(RadixSelect.Trigger, { ref, className, ...props, children: [
    children,
    /* @__PURE__ */ jsx(RadixSelect.Icon, {})
  ] })
);
SelectTrigger.displayName = "SelectTrigger";
var SelectContent = React.forwardRef(
  ({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(RadixSelect.Portal, { children: /* @__PURE__ */ jsx(RadixSelect.Content, { ref, position, className, ...props, children: /* @__PURE__ */ jsx(RadixSelect.Viewport, { children }) }) })
);
SelectContent.displayName = "SelectContent";
var SelectItem = React.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(RadixSelect.Item, { ref, className, ...props, children: [
    /* @__PURE__ */ jsx(RadixSelect.ItemText, { children }),
    /* @__PURE__ */ jsx(RadixSelect.ItemIndicator, {})
  ] })
);
SelectItem.displayName = "SelectItem";
var SelectLabel = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadixSelect.Label, { ref, className, ...props })
);
SelectLabel.displayName = "SelectLabel";
var SelectSeparator = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadixSelect.Separator, { ref, className, ...props })
);
SelectSeparator.displayName = "SelectSeparator";

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator
};
//# sourceMappingURL=chunk-7K7H2VA5.js.map