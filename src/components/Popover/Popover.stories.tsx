import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Popover, PopoverTrigger, PopoverContent } from './Popover'

const meta = {
  title: 'Primitives/Popover',
  component: Popover,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

const contentStyle: React.CSSProperties = {
  background: 'white', border: '1px solid #e5e7eb', borderRadius: 8,
  padding: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.1)', fontSize: 14, minWidth: 200,
}

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <button style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #e5e7eb', cursor: 'pointer' }}>
          Open popover
        </button>
      </PopoverTrigger>
      <PopoverContent style={contentStyle}>
        <p style={{ margin: 0 }}>Popover content goes here.</p>
      </PopoverContent>
    </Popover>
  ),
}
