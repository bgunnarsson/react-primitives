import React__default from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';

declare const Sheet: React__default.FC<RadixDialog.DialogProps>;
declare const SheetTrigger: React__default.ForwardRefExoticComponent<RadixDialog.DialogTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: React__default.FC<RadixDialog.DialogPortalProps>;
declare const SheetClose: React__default.ForwardRefExoticComponent<RadixDialog.DialogCloseProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const SheetTitle: React__default.ForwardRefExoticComponent<RadixDialog.DialogTitleProps & React__default.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: React__default.ForwardRefExoticComponent<RadixDialog.DialogDescriptionProps & React__default.RefAttributes<HTMLParagraphElement>>;
interface SheetOverlayProps extends React__default.ComponentPropsWithoutRef<typeof RadixDialog.Overlay> {
}
declare const SheetOverlay: React__default.ForwardRefExoticComponent<SheetOverlayProps & React__default.RefAttributes<HTMLDivElement>>;
type SheetSide = 'top' | 'bottom' | 'left' | 'right';
interface SheetContentProps extends React__default.ComponentPropsWithoutRef<typeof RadixDialog.Content> {
    side?: SheetSide;
    overlayClassName?: string;
    overlayStyle?: React__default.CSSProperties;
}
declare const SheetContent: React__default.ForwardRefExoticComponent<SheetContentProps & React__default.RefAttributes<HTMLDivElement>>;

export { Sheet, SheetClose, SheetContent, type SheetContentProps, SheetDescription, SheetOverlay, type SheetOverlayProps, SheetPortal, type SheetSide, SheetTitle, SheetTrigger };
