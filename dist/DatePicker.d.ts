import * as react_jsx_runtime from 'react/jsx-runtime';

interface DatePickerProps {
    value?: Date;
    onValueChange?: (date: Date | undefined) => void;
    disabled?: boolean;
    placeholder?: string;
    triggerClassName?: string;
    contentClassName?: string;
    calendarClassName?: string;
}
declare const DatePicker: ({ value, onValueChange, disabled, placeholder, triggerClassName, contentClassName, calendarClassName, }: DatePickerProps) => react_jsx_runtime.JSX.Element;

export { DatePicker, type DatePickerProps };
