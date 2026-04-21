import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TimePicker, type TimeValue } from './TimePicker'

const meta = {
  title: 'Primitives/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
} satisfies Meta<typeof TimePicker>

export default meta
type Story = StoryObj<typeof meta>

const triggerClassName =
  'inline-flex min-w-[140px] items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50'

const contentClassName =
  'flex gap-1 rounded-md border border-gray-200 bg-white p-1 shadow-lg'

const columnClassName =
  'flex h-56 w-16 flex-col gap-1 overflow-y-auto scroll-smooth px-1 py-1 [scrollbar-width:thin]'

const itemClassName =
  'flex h-8 shrink-0 items-center justify-center rounded-sm px-2 text-sm text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'

const itemSelectedClassName = 'bg-blue-600 text-white hover:bg-blue-700'

export const TwentyFourHour: Story = {
  render: () => {
    const [time, setTime] = useState<TimeValue>({ hours: 9, minutes: 30 })
    return (
      <div>
        <TimePicker
          value={time}
          onValueChange={setTime}
          triggerClassName={triggerClassName}
          contentClassName={contentClassName}
          columnClassName={columnClassName}
          itemClassName={itemClassName}
          itemSelectedClassName={itemSelectedClassName}
        />
        <p style={{ marginTop: 8, fontSize: 12, color: '#6b7280' }}>
          {time.hours}:{String(time.minutes).padStart(2, '0')}
        </p>
      </div>
    )
  },
}

export const TwelveHourWithFiveMinuteStep: Story = {
  render: () => {
    const [time, setTime] = useState<TimeValue>({ hours: 14, minutes: 45 })
    return (
      <TimePicker
        value={time}
        onValueChange={setTime}
        hour12
        step={5}
        triggerClassName={triggerClassName}
        contentClassName={contentClassName}
        columnClassName={columnClassName}
        itemClassName={itemClassName}
        itemSelectedClassName={itemSelectedClassName}
      />
    )
  },
}

export const Uncontrolled: Story = {
  render: () => (
    <TimePicker
      defaultValue={{ hours: 8, minutes: 0 }}
      step={15}
      placeholder="Pick a time"
      triggerClassName={triggerClassName}
      contentClassName={contentClassName}
      columnClassName={columnClassName}
      itemClassName={itemClassName}
      itemSelectedClassName={itemSelectedClassName}
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <TimePicker
      defaultValue={{ hours: 12, minutes: 0 }}
      disabled
      triggerClassName={triggerClassName}
      contentClassName={contentClassName}
      columnClassName={columnClassName}
      itemClassName={itemClassName}
      itemSelectedClassName={itemSelectedClassName}
    />
  ),
}
