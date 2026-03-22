import React from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'

export const Sheet = RadixDialog.Root
export const SheetTrigger = RadixDialog.Trigger
export const SheetPortal = RadixDialog.Portal
export const SheetClose = RadixDialog.Close
export const SheetTitle = RadixDialog.Title
export const SheetDescription = RadixDialog.Description

export interface SheetOverlayProps extends React.ComponentPropsWithoutRef<typeof RadixDialog.Overlay> {}

export const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Overlay>,
  SheetOverlayProps
>(({ className, ...props }, ref) => (
  <RadixDialog.Overlay ref={ref} className={className} {...props} />
))
SheetOverlay.displayName = 'SheetOverlay'

export type SheetSide = 'top' | 'bottom' | 'left' | 'right'

export interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof RadixDialog.Content> {
  side?: SheetSide
  overlayClassName?: string
  overlayStyle?: React.CSSProperties
}

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Content>,
  SheetContentProps
>(({ side = 'right', className, overlayClassName, overlayStyle, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay className={overlayClassName} style={overlayStyle} />
    <RadixDialog.Content ref={ref} data-side={side} className={className} {...props}>
      {children}
    </RadixDialog.Content>
  </SheetPortal>
))
SheetContent.displayName = 'SheetContent'
