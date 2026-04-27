import React__default from 'react'
import * as RadixSelect from '@radix-ui/react-select'

declare const Select: React__default.FC<RadixSelect.SelectProps>
declare const SelectGroup: React__default.ForwardRefExoticComponent<
  RadixSelect.SelectGroupProps & React__default.RefAttributes<HTMLDivElement>
>
declare const SelectValue: React__default.ForwardRefExoticComponent<
  RadixSelect.SelectValueProps & React__default.RefAttributes<HTMLSpanElement>
>
interface SelectTriggerProps extends React__default.ComponentPropsWithoutRef<typeof RadixSelect.Trigger> {}
declare const SelectTrigger: React__default.ForwardRefExoticComponent<
  SelectTriggerProps & React__default.RefAttributes<HTMLButtonElement>
>
interface SelectContentProps extends React__default.ComponentPropsWithoutRef<typeof RadixSelect.Content> {}
declare const SelectContent: React__default.ForwardRefExoticComponent<
  SelectContentProps & React__default.RefAttributes<HTMLDivElement>
>
interface SelectItemProps extends React__default.ComponentPropsWithoutRef<typeof RadixSelect.Item> {}
declare const SelectItem: React__default.ForwardRefExoticComponent<
  SelectItemProps & React__default.RefAttributes<HTMLDivElement>
>
interface SelectLabelProps extends React__default.ComponentPropsWithoutRef<typeof RadixSelect.Label> {}
declare const SelectLabel: React__default.ForwardRefExoticComponent<
  SelectLabelProps & React__default.RefAttributes<HTMLDivElement>
>
interface SelectSeparatorProps extends React__default.ComponentPropsWithoutRef<typeof RadixSelect.Separator> {}
declare const SelectSeparator: React__default.ForwardRefExoticComponent<
  SelectSeparatorProps & React__default.RefAttributes<HTMLDivElement>
>

export {
  Select,
  SelectContent,
  type SelectContentProps,
  SelectGroup,
  SelectItem,
  type SelectItemProps,
  SelectLabel,
  type SelectLabelProps,
  SelectSeparator,
  type SelectSeparatorProps,
  SelectTrigger,
  type SelectTriggerProps,
  SelectValue,
}
