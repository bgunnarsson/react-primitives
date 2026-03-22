import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta = {
  title: 'Primitives/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

const base: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', padding: '2px 8px', borderRadius: 9999, fontSize: 12, fontWeight: 500 }

export const Default: Story = {
  args: { children: 'Badge' },
  render: (args) => <Badge {...args} style={{ ...base, background: '#f3f4f6', color: '#374151' }} />,
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge style={{ ...base, background: '#dbeafe', color: '#1d4ed8' }}>Info</Badge>
      <Badge style={{ ...base, background: '#dcfce7', color: '#15803d' }}>Success</Badge>
      <Badge style={{ ...base, background: '#fef9c3', color: '#a16207' }}>Warning</Badge>
      <Badge style={{ ...base, background: '#fee2e2', color: '#b91c1c' }}>Error</Badge>
      <Badge style={{ ...base, background: '#f3f4f6', color: '#374151' }}>Neutral</Badge>
    </div>
  ),
}
