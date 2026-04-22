// src/components/Sheet/Sheet.tsx
import React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { jsx, jsxs } from "react/jsx-runtime";
var Sheet = RadixDialog.Root;
var SheetTrigger = RadixDialog.Trigger;
var SheetPortal = RadixDialog.Portal;
var SheetClose = RadixDialog.Close;
var SheetTitle = RadixDialog.Title;
var SheetDescription = RadixDialog.Description;
var SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadixDialog.Overlay, { ref, className, ...props }));
SheetOverlay.displayName = "SheetOverlay";
var SheetContent = React.forwardRef(({ side = "right", className, overlayClassName, overlayStyle, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, { className: overlayClassName, style: overlayStyle }),
  /* @__PURE__ */ jsx(RadixDialog.Content, { ref, "data-side": side, className, ...props, children })
] }));
SheetContent.displayName = "SheetContent";

export {
  Sheet,
  SheetTrigger,
  SheetPortal,
  SheetClose,
  SheetTitle,
  SheetDescription,
  SheetOverlay,
  SheetContent
};
