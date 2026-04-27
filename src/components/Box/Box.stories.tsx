import type { Meta, StoryObj } from '@storybook/react'
import { Box } from './Box'

const meta = {
  title: 'Primitives/Box',
  component: Box,
  tags: ['autodocs'],
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Box style={{ padding: 16, background: '#f3f4f6', border: '1px dashed #d1d5db' }}>A generic Box element.</Box>
  ),
}

export const AsSection: Story = {
  render: () => (
    <Box as="section" aria-label="Demo section" style={{ padding: 16, background: '#eff6ff' }}>
      Rendered as &lt;section&gt;.
    </Box>
  ),
}
