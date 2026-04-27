import React__default from 'react'
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog'

declare const AlertDialog: React__default.FC<RadixAlertDialog.AlertDialogProps>
declare const AlertDialogTrigger: React__default.ForwardRefExoticComponent<
  RadixAlertDialog.AlertDialogTriggerProps & React__default.RefAttributes<HTMLButtonElement>
>
declare const AlertDialogPortal: React__default.FC<RadixAlertDialog.AlertDialogPortalProps>
declare const AlertDialogTitle: React__default.ForwardRefExoticComponent<
  RadixAlertDialog.AlertDialogTitleProps & React__default.RefAttributes<HTMLHeadingElement>
>
declare const AlertDialogDescription: React__default.ForwardRefExoticComponent<
  RadixAlertDialog.AlertDialogDescriptionProps & React__default.RefAttributes<HTMLParagraphElement>
>
declare const AlertDialogAction: React__default.ForwardRefExoticComponent<
  RadixAlertDialog.AlertDialogActionProps & React__default.RefAttributes<HTMLButtonElement>
>
declare const AlertDialogCancel: React__default.ForwardRefExoticComponent<
  RadixAlertDialog.AlertDialogCancelProps & React__default.RefAttributes<HTMLButtonElement>
>
interface AlertDialogOverlayProps extends React__default.ComponentPropsWithoutRef<typeof RadixAlertDialog.Overlay> {}
declare const AlertDialogOverlay: React__default.ForwardRefExoticComponent<
  AlertDialogOverlayProps & React__default.RefAttributes<HTMLDivElement>
>
interface AlertDialogContentProps extends React__default.ComponentPropsWithoutRef<typeof RadixAlertDialog.Content> {
  overlayClassName?: string
  overlayStyle?: React__default.CSSProperties
}
declare const AlertDialogContent: React__default.ForwardRefExoticComponent<
  AlertDialogContentProps & React__default.RefAttributes<HTMLDivElement>
>

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  type AlertDialogContentProps,
  AlertDialogDescription,
  AlertDialogOverlay,
  type AlertDialogOverlayProps,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}
