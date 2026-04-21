import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import type { DateRange } from 'react-day-picker'
import 'react-day-picker/style.css'
import { Calendar } from './Calendar'

const meta: Meta<typeof Calendar> = {
  title: 'Primitives/Calendar',
  component: Calendar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Calendar>

const styles = `
  .sb-calendar-wrap {
    display: inline-block;
    padding: 12px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    font: 400 14px ui-sans-serif, system-ui, sans-serif;
    color: #111827;
    --rdp-accent-color: #2563eb;
    --rdp-accent-background-color: #eff6ff;
    --rdp-today-color: #2563eb;
  }
`

const Frame = ({ children }: { children: React.ReactNode }) => (
  <>
    <style>{styles}</style>
    <div className="sb-calendar-wrap">{children}</div>
  </>
)

export const SingleDate: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <Frame>
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </Frame>
    )
  },
}

export const DateRangePicker: Story = {
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>()
    return (
      <Frame>
        <Calendar mode="range" selected={range} onSelect={setRange} numberOfMonths={2} />
      </Frame>
    )
  },
}

export const MultipleDates: Story = {
  render: () => {
    const [days, setDays] = useState<Date[] | undefined>([])
    return (
      <Frame>
        <Calendar mode="multiple" selected={days} onSelect={setDays} />
      </Frame>
    )
  },
}
