import React from 'react'
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog'

export const AlertDialog = RadixAlertDialog.Root
export const AlertDialogTrigger = RadixAlertDialog.Trigger
export const AlertDialogPortal = RadixAlertDialog.Portal
export const AlertDialogTitle = RadixAlertDialog.Title
export const AlertDialogDescription = RadixAlertDialog.Description
export const AlertDialogAction = RadixAlertDialog.Action
export const AlertDialogCancel = RadixAlertDialog.Cancel

export interface AlertDialogOverlayProps extends React.ComponentPropsWithoutRef<typeof RadixAlertDialog.Overlay> {}

export const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Overlay>,
  AlertDialogOverlayProps
>(({ className, ...props }, ref) => <RadixAlertDialog.Overlay ref={ref} className={className} {...props} />)
AlertDialogOverlay.displayName = 'AlertDialogOverlay'

export interface AlertDialogContentProps extends React.ComponentPropsWithoutRef<typeof RadixAlertDialog.Content> {
  overlayClassName?: string
  overlayStyle?: React.CSSProperties
}

export const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Content>,
  AlertDialogContentProps
>(({ className, overlayClassName, overlayStyle, children, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay className={overlayClassName} style={overlayStyle} />
    <RadixAlertDialog.Content ref={ref} className={className} {...props}>
      {children}
    </RadixAlertDialog.Content>
  </AlertDialogPortal>
))
AlertDialogContent.displayName = 'AlertDialogContent'
