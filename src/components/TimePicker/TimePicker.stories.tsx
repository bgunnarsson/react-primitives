import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TimePicker, type TimeValue } from './TimePicker'

const meta = {
  title: 'Primitives/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
} satisfies Meta<typeof TimePicker>

export default meta
type Story = StoryObj<typeof meta>

const inputStyle: React.CSSProperties = {
  padding: '8px 10px',
  border: '1px solid #d1d5db',
  borderRadius: 6,
  fontFamily: 'ui-monospace, Menlo, monospace',
  fontSize: 14,
  width: 120,
}

export const TwentyFourHour: Story = {
  render: () => {
    const [time, setTime] = useState<TimeValue>({ hours: 9, minutes: 30 })
    return (
      <div>
        <TimePicker value={time} onValueChange={setTime} inputStyle={inputStyle} />
        <p style={{ marginTop: 8, fontSize: 12, color: '#6b7280' }}>{time.hours}:{String(time.minutes).padStart(2, '0')}</p>
      </div>
    )
  },
}

export const TwelveHourWithFiveMinuteStep: Story = {
  render: () => {
    const [time, setTime] = useState<TimeValue>({ hours: 14, minutes: 45 })
    return (
      <TimePicker value={time} onValueChange={setTime} hour12 step={5} inputStyle={inputStyle} />
    )
  },
}
