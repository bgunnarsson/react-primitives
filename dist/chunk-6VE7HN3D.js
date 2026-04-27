// src/components/AlertDialog/AlertDialog.tsx
import React from 'react'
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog'
import { jsx, jsxs } from 'react/jsx-runtime'
var AlertDialog = RadixAlertDialog.Root
var AlertDialogTrigger = RadixAlertDialog.Trigger
var AlertDialogPortal = RadixAlertDialog.Portal
var AlertDialogTitle = RadixAlertDialog.Title
var AlertDialogDescription = RadixAlertDialog.Description
var AlertDialogAction = RadixAlertDialog.Action
var AlertDialogCancel = RadixAlertDialog.Cancel
var AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(RadixAlertDialog.Overlay, { ref, className, ...props })
)
AlertDialogOverlay.displayName = 'AlertDialogOverlay'
var AlertDialogContent = React.forwardRef(({ className, overlayClassName, overlayStyle, children, ...props }, ref) =>
  /* @__PURE__ */ jsxs(AlertDialogPortal, {
    children: [
      /* @__PURE__ */ jsx(AlertDialogOverlay, { className: overlayClassName, style: overlayStyle }),
      /* @__PURE__ */ jsx(RadixAlertDialog.Content, { ref, className, ...props, children }),
    ],
  })
)
AlertDialogContent.displayName = 'AlertDialogContent'

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogOverlay,
  AlertDialogContent,
}
