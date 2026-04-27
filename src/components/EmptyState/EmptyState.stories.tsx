import type { Meta, StoryObj } from '@storybook/react'
import { EmptyState, EmptyStateIcon, EmptyStateTitle, EmptyStateDescription, EmptyStateAction } from './EmptyState'

const meta = {
  title: 'Primitives/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <EmptyState style={{ textAlign: 'center', padding: 32 }}>
      <EmptyStateIcon style={{ fontSize: 48, marginBottom: 16 }}>📭</EmptyStateIcon>
      <EmptyStateTitle>No results found</EmptyStateTitle>
      <EmptyStateDescription>Try adjusting your search or filters.</EmptyStateDescription>
      <EmptyStateAction style={{ marginTop: 16 }}>
        <button type="button">Clear filters</button>
      </EmptyStateAction>
    </EmptyState>
  ),
}
