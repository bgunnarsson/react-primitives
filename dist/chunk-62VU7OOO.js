// src/components/DropdownMenu/DropdownMenu.tsx
import React from "react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { jsx, jsxs } from "react/jsx-runtime";
var DropdownMenu = RadixDropdownMenu.Root;
var DropdownMenuTrigger = RadixDropdownMenu.Trigger;
var DropdownMenuGroup = RadixDropdownMenu.Group;
var DropdownMenuSub = RadixDropdownMenu.Sub;
var DropdownMenuRadioGroup = RadixDropdownMenu.RadioGroup;
var DropdownMenuContent = React.forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(RadixDropdownMenu.Portal, { children: /* @__PURE__ */ jsx(RadixDropdownMenu.Content, { ref, sideOffset, className, ...props }) })
);
DropdownMenuContent.displayName = "DropdownMenuContent";
var DropdownMenuItem = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadixDropdownMenu.Item, { ref, className, ...props })
);
DropdownMenuItem.displayName = "DropdownMenuItem";
var DropdownMenuCheckboxItem = React.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(RadixDropdownMenu.CheckboxItem, { ref, className, ...props, children: [
    /* @__PURE__ */ jsx(RadixDropdownMenu.ItemIndicator, {}),
    children
  ] })
);
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";
var DropdownMenuRadioItem = React.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(RadixDropdownMenu.RadioItem, { ref, className, ...props, children: [
    /* @__PURE__ */ jsx(RadixDropdownMenu.ItemIndicator, {}),
    children
  ] })
);
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";
var DropdownMenuLabel = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadixDropdownMenu.Label, { ref, className, ...props })
);
DropdownMenuLabel.displayName = "DropdownMenuLabel";
var DropdownMenuSeparator = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadixDropdownMenu.Separator, { ref, className, ...props })
);
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
var DropdownMenuSubTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(RadixDropdownMenu.SubTrigger, { ref, className, ...props, children })
);
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";
var DropdownMenuSubContent = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadixDropdownMenu.SubContent, { ref, className, ...props })
);
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent
};
