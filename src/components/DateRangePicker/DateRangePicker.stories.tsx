import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DateRangePicker, type DateRange } from './DateRangePicker'

const STORY_POPOVER_CLASS = 'sb-daterangepicker-content'

const meta = {
  title: 'Primitives/DateRangePicker',
  component: DateRangePicker,
  tags: ['autodocs'],
  args: {
    disabled: false,
    placeholder: 'Pick a date range',
    numberOfMonths: 2,
    closeOnSelect: true,
  },
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    numberOfMonths: { control: { type: 'number', min: 1, max: 3 } },
    closeOnSelect: { control: 'boolean' },
  },
} satisfies Meta<typeof DateRangePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [range, setRange] = useState<DateRange | undefined>(undefined)
    return (
      <div>
        <style>{`
          .${STORY_POPOVER_CLASS} {
            background: #fff;
            border-radius: 12px;
            padding: 12px;
            box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.06);
          }
        `}</style>
        <DateRangePicker {...args} value={range} onValueChange={setRange} contentClassName={STORY_POPOVER_CLASS} />
        {range?.from && (
          <p style={{ marginTop: 8, fontSize: 14 }}>
            {range.from.toDateString()}
            {range.to ? ` → ${range.to.toDateString()}` : ''}
          </p>
        )}
      </div>
    )
  },
}
