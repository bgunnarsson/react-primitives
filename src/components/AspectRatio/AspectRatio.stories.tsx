import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from './AspectRatio'

const meta = {
  title: 'Primitives/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: { control: { type: 'number', step: 0.05 } },
  },
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

const boxStyle: React.CSSProperties = {
  width: 320,
  borderRadius: 8,
  overflow: 'hidden',
  background: '#f3f4f6',
}

const imgStyle: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover' }

export const SixteenByNine: Story = {
  args: { ratio: 16 / 9 },
  render: (args) => (
    <div style={boxStyle}>
      <AspectRatio {...args}>
        <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=640" alt="" style={imgStyle} />
      </AspectRatio>
    </div>
  ),
}

export const Square: Story = {
  args: { ratio: 1 },
  render: (args) => (
    <div style={boxStyle}>
      <AspectRatio {...args}>
        <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=640" alt="" style={imgStyle} />
      </AspectRatio>
    </div>
  ),
}
