import React from 'react'
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

export const DropdownMenu = RadixDropdownMenu.Root
export const DropdownMenuTrigger = RadixDropdownMenu.Trigger
export const DropdownMenuGroup = RadixDropdownMenu.Group
export const DropdownMenuSub = RadixDropdownMenu.Sub
export const DropdownMenuRadioGroup = RadixDropdownMenu.RadioGroup

export interface DropdownMenuContentProps extends React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Content> {}
export const DropdownMenuContent = React.forwardRef<React.ElementRef<typeof RadixDropdownMenu.Content>, DropdownMenuContentProps>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content ref={ref} sideOffset={sideOffset} className={className} {...props} />
    </RadixDropdownMenu.Portal>
  )
)
DropdownMenuContent.displayName = 'DropdownMenuContent'

export interface DropdownMenuItemProps extends React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Item> {}
export const DropdownMenuItem = React.forwardRef<React.ElementRef<typeof RadixDropdownMenu.Item>, DropdownMenuItemProps>(
  ({ className, ...props }, ref) => <RadixDropdownMenu.Item ref={ref} className={className} {...props} />
)
DropdownMenuItem.displayName = 'DropdownMenuItem'

export interface DropdownMenuCheckboxItemProps extends React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.CheckboxItem> {}
export const DropdownMenuCheckboxItem = React.forwardRef<React.ElementRef<typeof RadixDropdownMenu.CheckboxItem>, DropdownMenuCheckboxItemProps>(
  ({ className, children, ...props }, ref) => (
    <RadixDropdownMenu.CheckboxItem ref={ref} className={className} {...props}>
      <RadixDropdownMenu.ItemIndicator />
      {children}
    </RadixDropdownMenu.CheckboxItem>
  )
)
DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem'

export interface DropdownMenuRadioItemProps extends React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.RadioItem> {}
export const DropdownMenuRadioItem = React.forwardRef<React.ElementRef<typeof RadixDropdownMenu.RadioItem>, DropdownMenuRadioItemProps>(
  ({ className, children, ...props }, ref) => (
    <RadixDropdownMenu.RadioItem ref={ref} className={className} {...props}>
      <RadixDropdownMenu.ItemIndicator />
      {children}
    </RadixDropdownMenu.RadioItem>
  )
)
DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem'

export interface DropdownMenuLabelProps extends React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Label> {}
export const DropdownMenuLabel = React.forwardRef<React.ElementRef<typeof RadixDropdownMenu.Label>, DropdownMenuLabelProps>(
  ({ className, ...props }, ref) => <RadixDropdownMenu.Label ref={ref} className={className} {...props} />
)
DropdownMenuLabel.displayName = 'DropdownMenuLabel'

export interface DropdownMenuSeparatorProps extends React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Separator> {}
export const DropdownMenuSeparator = React.forwardRef<React.ElementRef<typeof RadixDropdownMenu.Separator>, DropdownMenuSeparatorProps>(
  ({ className, ...props }, ref) => <RadixDropdownMenu.Separator ref={ref} className={className} {...props} />
)
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator'

export interface DropdownMenuSubTriggerProps extends React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.SubTrigger> {}
export const DropdownMenuSubTrigger = React.forwardRef<React.ElementRef<typeof RadixDropdownMenu.SubTrigger>, DropdownMenuSubTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <RadixDropdownMenu.SubTrigger ref={ref} className={className} {...props}>
      {children}
    </RadixDropdownMenu.SubTrigger>
  )
)
DropdownMenuSubTrigger.displayName = 'DropdownMenuSubTrigger'

export interface DropdownMenuSubContentProps extends React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.SubContent> {}
export const DropdownMenuSubContent = React.forwardRef<React.ElementRef<typeof RadixDropdownMenu.SubContent>, DropdownMenuSubContentProps>(
  ({ className, ...props }, ref) => <RadixDropdownMenu.SubContent ref={ref} className={className} {...props} />
)
DropdownMenuSubContent.displayName = 'DropdownMenuSubContent'
