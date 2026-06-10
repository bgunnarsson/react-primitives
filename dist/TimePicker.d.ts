import * as react_jsx_runtime from 'react/jsx-runtime';

interface TimeValue {
    hours: number;
    minutes: number;
}
interface TimePickerProps {
    value?: TimeValue;
    defaultValue?: TimeValue;
    onValueChange?: (value: TimeValue) => void;
    step?: number;
    hour12?: boolean;
    disabled?: boolean;
    name?: string;
    placeholder?: string;
    'aria-label'?: string;
    triggerClassName?: string;
    contentClassName?: string;
    columnClassName?: string;
    itemClassName?: string;
    itemSelectedClassName?: string;
}
declare const TimePicker: ({ value: valueProp, defaultValue, onValueChange, step, hour12, disabled, name, placeholder, "aria-label": ariaLabel, triggerClassName, contentClassName, columnClassName, itemClassName, itemSelectedClassName, }: TimePickerProps) => react_jsx_runtime.JSX.Element;

export { TimePicker, type TimePickerProps, type TimeValue };
