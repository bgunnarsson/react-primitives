import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import type { DateRange } from 'react-day-picker'
import { Calendar } from './Calendar'

const meta: Meta<typeof Calendar> = {
  title: 'Primitives/Calendar',
  component: Calendar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Calendar>

export const SingleDate: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return <Calendar mode="single" selected={date} onSelect={setDate} />
  },
}

export const DateRangePicker: Story = {
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>()
    return <Calendar mode="range" selected={range} onSelect={setRange} numberOfMonths={2} />
  },
}

export const MultipleDates: Story = {
  render: () => {
    const [days, setDays] = useState<Date[] | undefined>([])
    return <Calendar mode="multiple" selected={days} onSelect={setDays} />
  },
}
