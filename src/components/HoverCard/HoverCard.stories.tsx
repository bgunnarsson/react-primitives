import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { HoverCard, HoverCardTrigger, HoverCardContent } from './HoverCard'

const meta = {
  title: 'Primitives/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  argTypes: {
    openDelay: { control: { type: 'number', min: 0, max: 2000, step: 100 } },
    closeDelay: { control: { type: 'number', min: 0, max: 2000, step: 100 } },
  },
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger style={{ textDecoration: 'underline', cursor: 'pointer', fontSize: 14 }}>
        Hover over me
      </HoverCardTrigger>
      <HoverCardContent style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 8, padding: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.1)', fontSize: 14, minWidth: 220 }}>
        <p style={{ margin: 0 }}>Preview content appears here on hover.</p>
      </HoverCardContent>
    </HoverCard>
  ),
}
