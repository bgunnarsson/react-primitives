import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Picture } from './Picture'

const meta = {
  title: 'Primitives/Picture',
  component: Picture,
  tags: ['autodocs'],
  argTypes: {
    loading: { control: 'radio', options: ['lazy', 'eager'] },
    alt: { control: 'text' },
    src: { control: 'text' },
  },
} satisfies Meta<typeof Picture>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://placehold.co/800x400',
    alt: 'Placeholder image',
    width: 800,
    height: 400,
  },
}

export const WithSources: Story = {
  args: {
    src: 'https://placehold.co/800x400',
    alt: 'Responsive image',
    width: 800,
    height: 400,
    sources: [
      { srcSet: 'https://placehold.co/400x200', media: '(max-width: 600px)' },
      { srcSet: 'https://placehold.co/800x400', media: '(min-width: 601px)' },
    ],
  },
}
