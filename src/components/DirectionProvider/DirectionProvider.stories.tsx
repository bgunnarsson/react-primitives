import type { Meta, StoryObj } from '@storybook/react'
import { DirectionProvider } from './DirectionProvider'

const meta = {
  title: 'Primitives/DirectionProvider',
  component: DirectionProvider,
  tags: ['autodocs'],
} satisfies Meta<typeof DirectionProvider>

export default meta
type Story = StoryObj<typeof meta>

export const RightToLeft: Story = {
  args: { dir: 'rtl' },
  render: ({ dir }) => (
    <DirectionProvider dir={dir}>
      <div style={{ padding: 16, border: '1px solid #e5e7eb', borderRadius: 8 }} dir={dir}>
        <p style={{ margin: 0 }}>The content inside a DirectionProvider inherits the direction.</p>
      </div>
    </DirectionProvider>
  ),
}
