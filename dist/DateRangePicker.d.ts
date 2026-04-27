import * as react_jsx_runtime from 'react/jsx-runtime'
import { DateRange, DayPickerProps } from 'react-day-picker'
export { DateRange } from 'react-day-picker'

type DateRangePickerCaptionLayout = DayPickerProps['captionLayout']
interface DateRangePickerProps {
  value?: DateRange
  onValueChange?: (range: DateRange | undefined) => void
  disabled?: boolean
  placeholder?: string
  numberOfMonths?: number
  closeOnSelect?: boolean
  /**
   * How the calendar header is rendered. `'dropdown'` shows month + year selects,
   * `'dropdown-months'` / `'dropdown-years'` show only one. `'label'` is plain text.
   */
  captionLayout?: DateRangePickerCaptionLayout
  /** Earliest selectable / navigable month (also bounds the year dropdown). */
  startMonth?: Date
  /** Latest selectable / navigable month (also bounds the year dropdown). */
  endMonth?: Date
  formatRange?: (range: DateRange | undefined) => string
  triggerClassName?: string
  contentClassName?: string
  calendarClassName?: string
}
declare const DateRangePicker: ({
  value,
  onValueChange,
  disabled,
  placeholder,
  numberOfMonths,
  closeOnSelect,
  captionLayout,
  startMonth,
  endMonth,
  formatRange,
  triggerClassName,
  contentClassName,
  calendarClassName,
}: DateRangePickerProps) => react_jsx_runtime.JSX.Element

export { DateRangePicker, type DateRangePickerProps }
