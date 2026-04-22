// src/components/Dialog/Dialog.tsx
import React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { jsx, jsxs } from "react/jsx-runtime";
var Dialog = RadixDialog.Root;
var DialogTrigger = RadixDialog.Trigger;
var DialogPortal = RadixDialog.Portal;
var DialogClose = RadixDialog.Close;
var DialogTitle = RadixDialog.Title;
var DialogDescription = RadixDialog.Description;
var DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(RadixDialog.Overlay, { ref, className, ...props }));
DialogOverlay.displayName = "DialogOverlay";
var DialogContent = React.forwardRef(({ className, overlayClassName, overlayStyle, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, { className: overlayClassName, style: overlayStyle }),
  /* @__PURE__ */ jsx(RadixDialog.Content, { ref, className, ...props, children })
] }));
DialogContent.displayName = "DialogContent";

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogClose,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
  DialogContent
};
