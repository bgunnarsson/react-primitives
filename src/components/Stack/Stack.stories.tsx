import type React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from './Stack'

const meta = {
  title: 'Primitives/Stack',
  component: Stack,
  tags: ['autodocs'],
} satisfies Meta<typeof Stack>

export default meta
type Story = StoryObj<typeof meta>

const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: '#e5e7eb', padding: '12px 16px', borderRadius: 4, fontSize: 14 }}>{children}</div>
)

export const Row: Story = {
  render: () => (
    <Stack direction="row" gap={12} align="center">
      <Box>One</Box>
      <Box>Two</Box>
      <Box>Three</Box>
    </Stack>
  ),
}

export const Column: Story = {
  render: () => (
    <Stack direction="column" gap={8}>
      <Box>One</Box>
      <Box>Two</Box>
      <Box>Three</Box>
    </Stack>
  ),
}

export const SpaceBetween: Story = {
  render: () => (
    <Stack direction="row" justify="between" style={{ width: 320, padding: 12, background: '#f9fafb' }}>
      <Box>Left</Box>
      <Box>Right</Box>
    </Stack>
  ),
}

export const Wrap: Story = {
  render: () => (
    <Stack direction="row" wrap="wrap" gap={8} style={{ maxWidth: 240 }}>
      {Array.from({ length: 8 }).map((_, i) => (
        <Box key={i}>Item {i + 1}</Box>
      ))}
    </Stack>
  ),
}
