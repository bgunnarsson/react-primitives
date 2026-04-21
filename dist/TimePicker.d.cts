import React__default from 'react';

interface TimeValue {
    hours: number;
    minutes: number;
}
interface TimePickerProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
    value?: TimeValue;
    defaultValue?: TimeValue;
    onValueChange?: (value: TimeValue) => void;
    step?: number;
    hour12?: boolean;
    disabled?: boolean;
    name?: string;
    inputClassName?: string;
    inputStyle?: React__default.CSSProperties;
    'aria-label'?: string;
}
declare const TimePicker: React__default.ForwardRefExoticComponent<TimePickerProps & React__default.RefAttributes<HTMLDivElement>>;

export { TimePicker, type TimePickerProps, type TimeValue };
