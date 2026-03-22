import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'

const meta = {
  title: 'Primitives/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    name: 'star',
    size: 24,
  },
  argTypes: {
    mode: { control: 'radio', options: ['sprite', 'external'] },
    size: { control: { type: 'number', min: 12, max: 96, step: 4 } },
    name: { control: 'text' },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Sprite mode uses `<svg><use href="/icons.svg#name" /></svg>`.
 * The sprite file must be served by the consuming app. This story injects
 * a temporary inline sprite so it renders visibly in Storybook.
 */
export const Sprite: Story = {
  render: () => (
    <>
      {/* Inline sprite for demo purposes — in production this would be a separate /icons.svg file */}
      <svg style={{ display: 'none' }}>
        <symbol id="star" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </symbol>
      </svg>
      <Icon name="star" mode="sprite" spriteHref="" size={24} />
    </>
  ),
}

export const External: Story = {
  args: { mode: 'external' },
}
