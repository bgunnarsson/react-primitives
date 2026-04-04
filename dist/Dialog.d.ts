import React__default from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';

declare const Dialog: React__default.FC<RadixDialog.DialogProps>;
declare const DialogTrigger: React__default.ForwardRefExoticComponent<RadixDialog.DialogTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React__default.FC<RadixDialog.DialogPortalProps>;
declare const DialogClose: React__default.ForwardRefExoticComponent<RadixDialog.DialogCloseProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const DialogTitle: React__default.ForwardRefExoticComponent<RadixDialog.DialogTitleProps & React__default.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React__default.ForwardRefExoticComponent<RadixDialog.DialogDescriptionProps & React__default.RefAttributes<HTMLParagraphElement>>;
interface DialogOverlayProps extends React__default.ComponentPropsWithoutRef<typeof RadixDialog.Overlay> {
}
declare const DialogOverlay: React__default.ForwardRefExoticComponent<DialogOverlayProps & React__default.RefAttributes<HTMLDivElement>>;
interface DialogContentProps extends React__default.ComponentPropsWithoutRef<typeof RadixDialog.Content> {
    overlayClassName?: string;
    overlayStyle?: React__default.CSSProperties;
}
declare const DialogContent: React__default.ForwardRefExoticComponent<DialogContentProps & React__default.RefAttributes<HTMLDivElement>>;

export { Dialog, DialogClose, DialogContent, type DialogContentProps, DialogDescription, DialogOverlay, type DialogOverlayProps, DialogPortal, DialogTitle, DialogTrigger };
