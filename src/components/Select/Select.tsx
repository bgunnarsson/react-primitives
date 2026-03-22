import React from 'react'
import * as RadixSelect from '@radix-ui/react-select'

export const Select = RadixSelect.Root
export const SelectGroup = RadixSelect.Group
export const SelectValue = RadixSelect.Value

export interface SelectTriggerProps extends React.ComponentPropsWithoutRef<typeof RadixSelect.Trigger> {}
export const SelectTrigger = React.forwardRef<React.ElementRef<typeof RadixSelect.Trigger>, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <RadixSelect.Trigger ref={ref} className={className} {...props}>
      {children}
      <RadixSelect.Icon />
    </RadixSelect.Trigger>
  )
)
SelectTrigger.displayName = 'SelectTrigger'

export interface SelectContentProps extends React.ComponentPropsWithoutRef<typeof RadixSelect.Content> {}
export const SelectContent = React.forwardRef<React.ElementRef<typeof RadixSelect.Content>, SelectContentProps>(
  ({ className, children, position = 'popper', ...props }, ref) => (
    <RadixSelect.Portal>
      <RadixSelect.Content ref={ref} position={position} className={className} {...props}>
        <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  )
)
SelectContent.displayName = 'SelectContent'

export interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof RadixSelect.Item> {}
export const SelectItem = React.forwardRef<React.ElementRef<typeof RadixSelect.Item>, SelectItemProps>(
  ({ className, children, ...props }, ref) => (
    <RadixSelect.Item ref={ref} className={className} {...props}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator />
    </RadixSelect.Item>
  )
)
SelectItem.displayName = 'SelectItem'

export interface SelectLabelProps extends React.ComponentPropsWithoutRef<typeof RadixSelect.Label> {}
export const SelectLabel = React.forwardRef<React.ElementRef<typeof RadixSelect.Label>, SelectLabelProps>(
  ({ className, ...props }, ref) => <RadixSelect.Label ref={ref} className={className} {...props} />
)
SelectLabel.displayName = 'SelectLabel'

export interface SelectSeparatorProps extends React.ComponentPropsWithoutRef<typeof RadixSelect.Separator> {}
export const SelectSeparator = React.forwardRef<React.ElementRef<typeof RadixSelect.Separator>, SelectSeparatorProps>(
  ({ className, ...props }, ref) => <RadixSelect.Separator ref={ref} className={className} {...props} />
)
SelectSeparator.displayName = 'SelectSeparator'
