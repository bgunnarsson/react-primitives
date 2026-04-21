import type { Meta, StoryObj } from '@storybook/react'
import { VisuallyHidden } from './VisuallyHidden'

const meta = {
  title: 'Primitives/VisuallyHidden',
  component: VisuallyHidden,
  tags: ['autodocs'],
} satisfies Meta<typeof VisuallyHidden>

export default meta
type Story = StoryObj<typeof meta>

export const IconOnlyButton: Story = {
  render: () => (
    <button style={{ padding: 8, borderRadius: 6, border: '1px solid #e5e7eb', background: 'white', cursor: 'pointer' }}>
      <span aria-hidden>X</span>
      <VisuallyHidden>Close dialog</VisuallyHidden>
    </button>
  ),
}
