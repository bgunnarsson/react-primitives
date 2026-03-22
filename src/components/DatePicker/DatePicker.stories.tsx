import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './DatePicker'

const meta = {
  title: 'Primitives/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  args: {
    disabled: false,
    placeholder: 'Pick a date',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>(undefined)
    return (
      <div>
        <DatePicker
          {...args}
          value={date}
          onValueChange={setDate}
          triggerClassName={undefined}
          contentClassName={undefined}
        />
        {date && <p style={{ marginTop: 8, fontSize: 14 }}>Selected: {date.toDateString()}</p>}
      </div>
    )
  },
}
