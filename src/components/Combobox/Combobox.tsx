import React from 'react'
import { Command as Cmdk } from 'cmdk'
import { Popover, PopoverTrigger, PopoverContent } from '../Popover'

export interface ComboboxProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}
export const Combobox = ({ open, onOpenChange, children }: ComboboxProps) => (
  <Popover open={open} onOpenChange={onOpenChange}>
    {children}
  </Popover>
)

export interface ComboboxTriggerProps extends React.ComponentPropsWithoutRef<typeof PopoverTrigger> {}
export const ComboboxTrigger = PopoverTrigger

export interface ComboboxContentProps extends React.ComponentPropsWithoutRef<typeof PopoverContent> {}
export const ComboboxContent = React.forwardRef<React.ElementRef<typeof PopoverContent>, ComboboxContentProps>(
  ({ align = 'start', ...props }, ref) => <PopoverContent ref={ref} align={align} {...props} />
)
ComboboxContent.displayName = 'ComboboxContent'

export interface ComboboxInputProps extends React.ComponentPropsWithoutRef<typeof Cmdk.Input> {}
export const ComboboxInput = React.forwardRef<React.ElementRef<typeof Cmdk.Input>, ComboboxInputProps>((props, ref) => (
  <Cmdk.Input ref={ref} {...props} />
))
ComboboxInput.displayName = 'ComboboxInput'

export interface ComboboxListProps extends React.ComponentPropsWithoutRef<typeof Cmdk.List> {}
export const ComboboxList = React.forwardRef<React.ElementRef<typeof Cmdk.List>, ComboboxListProps>((props, ref) => (
  <Cmdk.List ref={ref} {...props} />
))
ComboboxList.displayName = 'ComboboxList'

export interface ComboboxItemProps extends React.ComponentPropsWithoutRef<typeof Cmdk.Item> {}
export const ComboboxItem = React.forwardRef<React.ElementRef<typeof Cmdk.Item>, ComboboxItemProps>((props, ref) => (
  <Cmdk.Item ref={ref} {...props} />
))
ComboboxItem.displayName = 'ComboboxItem'

export interface ComboboxEmptyProps extends React.ComponentPropsWithoutRef<typeof Cmdk.Empty> {}
export const ComboboxEmpty = (props: ComboboxEmptyProps) => <Cmdk.Empty {...props} />

export { Cmdk as ComboboxCommand }
