import React from 'react'
import { DayPicker, type DayPickerProps } from 'react-day-picker'
import { Popover, PopoverTrigger, PopoverContent } from '../Popover'

export type DatePickerCaptionLayout = DayPickerProps['captionLayout']

export interface DatePickerProps {
  value?: Date
  onValueChange?: (date: Date | undefined) => void
  disabled?: boolean
  placeholder?: string
  /**
   * How the calendar header is rendered. `'dropdown'` shows month + year selects,
   * `'dropdown-months'` / `'dropdown-years'` show only one. `'label'` is plain text.
   */
  captionLayout?: DatePickerCaptionLayout
  /** Earliest selectable / navigable month (also bounds the year dropdown). */
  startMonth?: Date
  /** Latest selectable / navigable month (also bounds the year dropdown). */
  endMonth?: Date
  triggerClassName?: string
  contentClassName?: string
  calendarClassName?: string
}

const now = new Date()
const DEFAULT_START_MONTH = new Date(now.getFullYear() - 100, 0)
const DEFAULT_END_MONTH = new Date(now.getFullYear() + 10, 11)

export const DatePicker = ({
  value,
  onValueChange,
  disabled,
  placeholder = 'Pick a date',
  captionLayout = 'dropdown',
  startMonth = DEFAULT_START_MONTH,
  endMonth = DEFAULT_END_MONTH,
  triggerClassName,
  contentClassName,
  calendarClassName,
}: DatePickerProps) => {
  const [open, setOpen] = React.useState(false)

  const formatted = value
    ? value.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
    : placeholder

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger disabled={disabled} className={triggerClassName}>
        {formatted}
      </PopoverTrigger>
      <PopoverContent className={contentClassName}>
        <DayPicker
          mode="single"
          selected={value}
          onSelect={(day) => {
            onValueChange?.(day)
            setOpen(false)
          }}
          captionLayout={captionLayout}
          startMonth={startMonth}
          endMonth={endMonth}
          defaultMonth={value}
          className={calendarClassName}
        />
      </PopoverContent>
    </Popover>
  )
}
