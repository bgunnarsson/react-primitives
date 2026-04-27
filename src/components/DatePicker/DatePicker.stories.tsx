import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './DatePicker'

const STORY_POPOVER_CLASS = 'sb-datepicker-content'

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
        <style>{`
          .${STORY_POPOVER_CLASS} {
            background: #fff;
            border-radius: 12px;
            padding: 12px;
            box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.06);
          }
        `}</style>
        <DatePicker {...args} value={date} onValueChange={setDate} contentClassName={STORY_POPOVER_CLASS} />
        {date && <p style={{ marginTop: 8, fontSize: 14 }}>Selected: {date.toDateString()}</p>}
      </div>
    )
  },
}
