import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "./chunk-6M3BXBRW.js";

// src/components/Combobox/Combobox.tsx
import React from "react";
import { Command as Cmdk } from "cmdk";
import { jsx } from "react/jsx-runtime";
var Combobox = ({ open, onOpenChange, children }) => /* @__PURE__ */ jsx(Popover, { open, onOpenChange, children });
var ComboboxTrigger = PopoverTrigger;
var ComboboxContent = React.forwardRef(
  ({ align = "start", ...props }, ref) => /* @__PURE__ */ jsx(PopoverContent, { ref, align, ...props })
);
ComboboxContent.displayName = "ComboboxContent";
var ComboboxInput = React.forwardRef(
  (props, ref) => /* @__PURE__ */ jsx(Cmdk.Input, { ref, ...props })
);
ComboboxInput.displayName = "ComboboxInput";
var ComboboxList = React.forwardRef(
  (props, ref) => /* @__PURE__ */ jsx(Cmdk.List, { ref, ...props })
);
ComboboxList.displayName = "ComboboxList";
var ComboboxItem = React.forwardRef(
  (props, ref) => /* @__PURE__ */ jsx(Cmdk.Item, { ref, ...props })
);
ComboboxItem.displayName = "ComboboxItem";
var ComboboxEmpty = (props) => /* @__PURE__ */ jsx(Cmdk.Empty, { ...props });

export {
  Cmdk,
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxInput,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty
};
