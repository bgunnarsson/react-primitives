// src/components/ContextMenu/ContextMenu.tsx
import React from "react";
import * as RadixContextMenu from "@radix-ui/react-context-menu";
import { jsx, jsxs } from "react/jsx-runtime";
var ContextMenu = RadixContextMenu.Root;
var ContextMenuTrigger = RadixContextMenu.Trigger;
var ContextMenuGroup = RadixContextMenu.Group;
var ContextMenuSub = RadixContextMenu.Sub;
var ContextMenuRadioGroup = RadixContextMenu.RadioGroup;
var ContextMenuContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadixContextMenu.Portal, { children: /* @__PURE__ */ jsx(RadixContextMenu.Content, { ref, className, ...props }) }));
ContextMenuContent.displayName = "ContextMenuContent";
var ContextMenuItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadixContextMenu.Item, { ref, className, ...props }));
ContextMenuItem.displayName = "ContextMenuItem";
var ContextMenuCheckboxItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(RadixContextMenu.CheckboxItem, { ref, className, ...props, children: [
  /* @__PURE__ */ jsx(RadixContextMenu.ItemIndicator, {}),
  children
] }));
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem";
var ContextMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(RadixContextMenu.RadioItem, { ref, className, ...props, children: [
  /* @__PURE__ */ jsx(RadixContextMenu.ItemIndicator, {}),
  children
] }));
ContextMenuRadioItem.displayName = "ContextMenuRadioItem";
var ContextMenuLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadixContextMenu.Label, { ref, className, ...props }));
ContextMenuLabel.displayName = "ContextMenuLabel";
var ContextMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadixContextMenu.Separator, { ref, className, ...props }));
ContextMenuSeparator.displayName = "ContextMenuSeparator";
var ContextMenuSubTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(RadixContextMenu.SubTrigger, { ref, className, ...props, children }));
ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger";
var ContextMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadixContextMenu.Portal, { children: /* @__PURE__ */ jsx(RadixContextMenu.SubContent, { ref, className, ...props }) }));
ContextMenuSubContent.displayName = "ContextMenuSubContent";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuRadioGroup,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuSubTrigger,
  ContextMenuSubContent
};
//# sourceMappingURL=chunk-HU2LUEC2.js.map