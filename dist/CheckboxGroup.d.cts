import * as react_jsx_runtime from 'react/jsx-runtime';
import React__default from 'react';

interface CheckboxGroupProps extends React__default.HTMLAttributes<HTMLDivElement> {
    name: string;
    value: string[];
    onValueChange: (value: string[]) => void;
    disabled?: boolean;
}
declare const CheckboxGroup: ({ name, value, onValueChange, disabled, children, ...props }: CheckboxGroupProps) => react_jsx_runtime.JSX.Element;
interface CheckboxGroupItemProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'children'> {
    value: string;
    disabled?: boolean;
    children: React__default.ReactNode;
}
declare const CheckboxGroupItem: ({ value, disabled, children, ...props }: CheckboxGroupItemProps) => react_jsx_runtime.JSX.Element;

export { CheckboxGroup, CheckboxGroupItem, type CheckboxGroupItemProps, type CheckboxGroupProps };
