import * as React from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'
import * as vaul from 'vaul'

declare const Drawer: typeof vaul.Root
declare const DrawerTrigger: React.ForwardRefExoticComponent<
  RadixDialog.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>
>
declare const DrawerPortal: typeof vaul.Portal
declare const DrawerOverlay: React.ForwardRefExoticComponent<
  Omit<RadixDialog.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, 'ref'> &
    React.RefAttributes<HTMLDivElement>
>
declare const DrawerContent: React.ForwardRefExoticComponent<
  Omit<RadixDialog.DialogContentProps & React.RefAttributes<HTMLDivElement>, 'ref'> &
    React.RefAttributes<HTMLDivElement>
>
declare const DrawerHandle: React.ForwardRefExoticComponent<
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> & {
    preventCycle?: boolean | undefined
  } & React.RefAttributes<HTMLDivElement>
>
declare const DrawerClose: React.ForwardRefExoticComponent<
  RadixDialog.DialogCloseProps & React.RefAttributes<HTMLButtonElement>
>
declare const DrawerTitle: React.ForwardRefExoticComponent<
  RadixDialog.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>
>
declare const DrawerDescription: React.ForwardRefExoticComponent<
  RadixDialog.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>
>

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHandle,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
}
