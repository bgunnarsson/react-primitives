import React from 'react'
import { DayPicker, type DateRange, type DayPickerProps } from 'react-day-picker'
import { Popover, PopoverTrigger, PopoverContent } from '../Popover'

export type { DateRange }
export type DateRangePickerCaptionLayout = DayPickerProps['captionLayout']

export interface DateRangePickerProps {
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

const now = new Date()
const DEFAULT_START_MONTH = new Date(now.getFullYear() - 100, 0)
const DEFAULT_END_MONTH = new Date(now.getFullYear() + 10, 11)

const defaultFormat = (range: DateRange | undefined, placeholder: string) => {
  if (!range?.from) return placeholder
  const fmt = (d: Date) =>
    d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
  if (!range.to) return fmt(range.from)
  return `${fmt(range.from)} – ${fmt(range.to)}`
}

export const DateRangePicker = ({
  value,
  onValueChange,
  disabled,
  placeholder = 'Pick a date range',
  numberOfMonths = 2,
  closeOnSelect = true,
  captionLayout = 'dropdown',
  startMonth = DEFAULT_START_MONTH,
  endMonth = DEFAULT_END_MONTH,
  formatRange,
  triggerClassName,
  contentClassName,
  calendarClassName,
}: DateRangePickerProps) => {
  const [open, setOpen] = React.useState(false)
  const clickCount = React.useRef(0)

  const handleOpenChange = (next: boolean) => {
    if (next) clickCount.current = 0
    setOpen(next)
  }

  const label = formatRange
    ? formatRange(value)
    : defaultFormat(value, placeholder)

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger disabled={disabled} className={triggerClassName}>
        {label}
      </PopoverTrigger>
      <PopoverContent className={contentClassName}>
        <DayPicker
          mode="range"
          selected={value}
          onSelect={(range) => {
            onValueChange?.(range)
            clickCount.current += 1
            if (closeOnSelect && clickCount.current >= 2 && range?.from && range?.to) {
              setOpen(false)
            }
          }}
          numberOfMonths={numberOfMonths}
          captionLayout={captionLayout}
          startMonth={startMonth}
          endMonth={endMonth}
          defaultMonth={value?.from}
          className={calendarClassName}
        />
      </PopoverContent>
    </Popover>
  )
}
