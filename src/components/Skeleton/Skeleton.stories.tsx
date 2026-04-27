import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta = {
  title: 'Primitives/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

const skeletonStyles = `
  @keyframes shimmer {
    0% { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  .story-skeleton {
    background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
    background-size: 800px 100%;
    animation: shimmer 1.4s ease-in-out infinite;
    border-radius: 6px;
  }
`

export const Default: Story = {
  render: () => (
    <>
      <style>{skeletonStyles}</style>
      <Skeleton className="story-skeleton" style={{ width: 200, height: 20 }} />
    </>
  ),
}

export const Circle: Story = {
  render: () => (
    <>
      <style>{skeletonStyles}</style>
      <Skeleton className="story-skeleton" style={{ width: 40, height: 40, borderRadius: '50%' }} />
    </>
  ),
}

export const Card: Story = {
  render: () => (
    <>
      <style>{skeletonStyles}</style>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 280 }}>
        <Skeleton className="story-skeleton" style={{ width: '100%', height: 160, borderRadius: 8 }} />
        <Skeleton className="story-skeleton" style={{ width: '70%', height: 16 }} />
        <Skeleton className="story-skeleton" style={{ width: '50%', height: 16 }} />
      </div>
    </>
  ),
}
