import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Rating } from './Rating'

const meta = {
  title: 'Primitives/Rating',
  component: Rating,
  tags: ['autodocs'],
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

const rowStyle: React.CSSProperties = { display: 'inline-flex', gap: 4, fontSize: 28, lineHeight: 1 }

export const FiveStar: Story = {
  render: () => {
    const [value, setValue] = useState(3)
    return (
      <div>
        <Rating className="rating" value={value} onValueChange={setValue} aria-label="Product rating" />
        <style>{`
          .rating { display: inline-flex; gap: 4px; font-size: 28px; line-height: 1; }
          .rating [data-filled] { color: #f59e0b; }
          .rating label:not([data-filled]) { color: #d1d5db; }
        `}</style>
        <p style={{ marginTop: 8, fontSize: 13, color: '#6b7280' }}>Selected: {value} / 5</p>
      </div>
    )
  },
}

export const ReadOnly: Story = {
  render: () => <Rating value={4} readOnly style={rowStyle} aria-label="Average rating" />,
}

export const TenStar: Story = {
  render: () => {
    const [value, setValue] = useState(7)
    return <Rating max={10} value={value} onValueChange={setValue} style={rowStyle} />
  },
}
