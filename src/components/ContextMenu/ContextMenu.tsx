import React from 'react'
import * as RadixContextMenu from '@radix-ui/react-context-menu'

export const ContextMenu = RadixContextMenu.Root
export const ContextMenuTrigger = RadixContextMenu.Trigger
export const ContextMenuGroup = RadixContextMenu.Group
export const ContextMenuSub = RadixContextMenu.Sub
export const ContextMenuRadioGroup = RadixContextMenu.RadioGroup

export interface ContextMenuContentProps extends React.ComponentPropsWithoutRef<typeof RadixContextMenu.Content> {}

export const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.Content>,
  ContextMenuContentProps
>(({ className, ...props }, ref) => (
  <RadixContextMenu.Portal>
    <RadixContextMenu.Content ref={ref} className={className} {...props} />
  </RadixContextMenu.Portal>
))
ContextMenuContent.displayName = 'ContextMenuContent'

export interface ContextMenuItemProps extends React.ComponentPropsWithoutRef<typeof RadixContextMenu.Item> {}

export const ContextMenuItem = React.forwardRef<React.ElementRef<typeof RadixContextMenu.Item>, ContextMenuItemProps>(
  ({ className, ...props }, ref) => <RadixContextMenu.Item ref={ref} className={className} {...props} />
)
ContextMenuItem.displayName = 'ContextMenuItem'

export interface ContextMenuCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof RadixContextMenu.CheckboxItem> {}

export const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.CheckboxItem>,
  ContextMenuCheckboxItemProps
>(({ className, children, ...props }, ref) => (
  <RadixContextMenu.CheckboxItem ref={ref} className={className} {...props}>
    <RadixContextMenu.ItemIndicator />
    {children}
  </RadixContextMenu.CheckboxItem>
))
ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem'

export interface ContextMenuRadioItemProps extends React.ComponentPropsWithoutRef<typeof RadixContextMenu.RadioItem> {}

export const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.RadioItem>,
  ContextMenuRadioItemProps
>(({ className, children, ...props }, ref) => (
  <RadixContextMenu.RadioItem ref={ref} className={className} {...props}>
    <RadixContextMenu.ItemIndicator />
    {children}
  </RadixContextMenu.RadioItem>
))
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem'

export interface ContextMenuLabelProps extends React.ComponentPropsWithoutRef<typeof RadixContextMenu.Label> {}

export const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.Label>,
  ContextMenuLabelProps
>(({ className, ...props }, ref) => <RadixContextMenu.Label ref={ref} className={className} {...props} />)
ContextMenuLabel.displayName = 'ContextMenuLabel'

export interface ContextMenuSeparatorProps extends React.ComponentPropsWithoutRef<typeof RadixContextMenu.Separator> {}

export const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.Separator>,
  ContextMenuSeparatorProps
>(({ className, ...props }, ref) => <RadixContextMenu.Separator ref={ref} className={className} {...props} />)
ContextMenuSeparator.displayName = 'ContextMenuSeparator'

export interface ContextMenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof RadixContextMenu.SubTrigger> {}

export const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.SubTrigger>,
  ContextMenuSubTriggerProps
>(({ className, children, ...props }, ref) => (
  <RadixContextMenu.SubTrigger ref={ref} className={className} {...props}>
    {children}
  </RadixContextMenu.SubTrigger>
))
ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger'

export interface ContextMenuSubContentProps
  extends React.ComponentPropsWithoutRef<typeof RadixContextMenu.SubContent> {}

export const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof RadixContextMenu.SubContent>,
  ContextMenuSubContentProps
>(({ className, ...props }, ref) => (
  <RadixContextMenu.Portal>
    <RadixContextMenu.SubContent ref={ref} className={className} {...props} />
  </RadixContextMenu.Portal>
))
ContextMenuSubContent.displayName = 'ContextMenuSubContent'
