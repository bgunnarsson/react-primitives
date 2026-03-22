import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { VideoPlayer } from './VideoPlayer'

const meta = {
  title: 'Primitives/VideoPlayer',
  component: VideoPlayer,
  tags: ['autodocs'],
  argTypes: {
    controls: { control: 'boolean' },
    autoPlay: { control: 'boolean' },
    muted: { control: 'boolean' },
    loop: { control: 'boolean' },
    poster: { control: 'text' },
  },
} satisfies Meta<typeof VideoPlayer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    controls: true,
    style: { maxWidth: 480 },
  },
}

export const WithPoster: Story = {
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: 'https://placehold.co/480x270',
    controls: true,
    style: { maxWidth: 480 },
  },
}
