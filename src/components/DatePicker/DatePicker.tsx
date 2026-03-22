import React from 'react'
import { DayPicker } from 'react-day-picker'
import { Popover, PopoverTrigger, PopoverContent } from '../Popover'

export interface DatePickerProps {
  value?: Date
  onValueChange?: (date: Date | undefined) => void
  disabled?: boolean
  placeholder?: string
  triggerClassName?: string
  contentClassName?: string
  calendarClassName?: string
}

export const DatePicker = ({
  value,
  onValueChange,
  disabled,
  placeholder = 'Pick a date',
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
          className={calendarClassName}
        />
      </PopoverContent>
    </Popover>
  )
}
