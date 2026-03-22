import React from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'

export const Dialog = RadixDialog.Root
export const DialogTrigger = RadixDialog.Trigger
export const DialogPortal = RadixDialog.Portal
export const DialogClose = RadixDialog.Close
export const DialogTitle = RadixDialog.Title
export const DialogDescription = RadixDialog.Description

export interface DialogOverlayProps extends React.ComponentPropsWithoutRef<typeof RadixDialog.Overlay> {}

export const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Overlay>,
  DialogOverlayProps
>(({ className, ...props }, ref) => (
  <RadixDialog.Overlay ref={ref} className={className} {...props} />
))
DialogOverlay.displayName = 'DialogOverlay'

export interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof RadixDialog.Content> {
  overlayClassName?: string
  overlayStyle?: React.CSSProperties
}

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Content>,
  DialogContentProps
>(({ className, overlayClassName, overlayStyle, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay className={overlayClassName} style={overlayStyle} />
    <RadixDialog.Content ref={ref} className={className} {...props}>
      {children}
    </RadixDialog.Content>
  </DialogPortal>
))
DialogContent.displayName = 'DialogContent'
