import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './Separator'

const meta = {
  title: 'Primitives/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <p style={{ marginBottom: 12, fontSize: 14 }}>Above the line</p>
      <Separator orientation="horizontal" style={{ height: 1, background: '#e5e7eb', border: 'none', margin: 0 }} />
      <p style={{ marginTop: 12, fontSize: 14 }}>Below the line</p>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 32 }}>
      <span style={{ fontSize: 14 }}>Left</span>
      <Separator
        orientation="vertical"
        style={{ width: 1, height: '100%', background: '#e5e7eb', border: 'none', margin: 0 }}
      />
      <span style={{ fontSize: 14 }}>Right</span>
    </div>
  ),
}
