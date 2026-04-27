import * as react_jsx_runtime from 'react/jsx-runtime';
import { DayPickerProps } from 'react-day-picker';

type DatePickerCaptionLayout = DayPickerProps['captionLayout'];
interface DatePickerProps {
    value?: Date;
    onValueChange?: (date: Date | undefined) => void;
    disabled?: boolean;
    placeholder?: string;
    /**
     * How the calendar header is rendered. `'dropdown'` shows month + year selects,
     * `'dropdown-months'` / `'dropdown-years'` show only one. `'label'` is plain text.
     */
    captionLayout?: DatePickerCaptionLayout;
    /** Earliest selectable / navigable month (also bounds the year dropdown). */
    startMonth?: Date;
    /** Latest selectable / navigable month (also bounds the year dropdown). */
    endMonth?: Date;
    triggerClassName?: string;
    contentClassName?: string;
    calendarClassName?: string;
}
declare const DatePicker: ({ value, onValueChange, disabled, placeholder, captionLayout, startMonth, endMonth, triggerClassName, contentClassName, calendarClassName, }: DatePickerProps) => react_jsx_runtime.JSX.Element;

export { DatePicker, type DatePickerProps };
