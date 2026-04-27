import type React from 'react'
import { DayPicker } from 'react-day-picker'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

export const Calendar = (props: CalendarProps) => <DayPicker {...props} />
