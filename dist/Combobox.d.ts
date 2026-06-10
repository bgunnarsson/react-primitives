import * as RadixPopover from '@radix-ui/react-popover';
import * as react_jsx_runtime from 'react/jsx-runtime';
import React__default from 'react';
import { Command } from 'cmdk';
export { Command as ComboboxCommand } from 'cmdk';
import { PopoverContent } from './Popover.js';

interface ComboboxProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children?: React__default.ReactNode;
}
declare const Combobox: ({ open, onOpenChange, children }: ComboboxProps) => react_jsx_runtime.JSX.Element;
declare const ComboboxTrigger: React__default.ForwardRefExoticComponent<RadixPopover.PopoverTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
interface ComboboxContentProps extends React__default.ComponentPropsWithoutRef<typeof PopoverContent> {
}
declare const ComboboxContent: React__default.ForwardRefExoticComponent<ComboboxContentProps & React__default.RefAttributes<HTMLDivElement>>;
interface ComboboxInputProps extends React__default.ComponentPropsWithoutRef<typeof Command.Input> {
}
declare const ComboboxInput: React__default.ForwardRefExoticComponent<ComboboxInputProps & React__default.RefAttributes<HTMLInputElement>>;
interface ComboboxListProps extends React__default.ComponentPropsWithoutRef<typeof Command.List> {
}
declare const ComboboxList: React__default.ForwardRefExoticComponent<ComboboxListProps & React__default.RefAttributes<HTMLDivElement>>;
interface ComboboxItemProps extends React__default.ComponentPropsWithoutRef<typeof Command.Item> {
}
declare const ComboboxItem: React__default.ForwardRefExoticComponent<ComboboxItemProps & React__default.RefAttributes<HTMLDivElement>>;
interface ComboboxEmptyProps extends React__default.ComponentPropsWithoutRef<typeof Command.Empty> {
}
declare const ComboboxEmpty: (props: ComboboxEmptyProps) => react_jsx_runtime.JSX.Element;

export { Combobox, ComboboxContent, type ComboboxContentProps, ComboboxEmpty, type ComboboxEmptyProps, ComboboxInput, type ComboboxInputProps, ComboboxItem, type ComboboxItemProps, ComboboxList, type ComboboxListProps, type ComboboxProps, ComboboxTrigger };
