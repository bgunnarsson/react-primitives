import type { Meta, StoryObj } from '@storybook/react'
import { Embed, getVimeoEmbedUrl, getYouTubeEmbedUrl } from './Embed'

const meta = {
  title: 'Primitives/Embed',
  component: Embed,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    title: { control: 'text' },
    loading: { control: 'select', options: ['lazy', 'eager'] },
  },
} satisfies Meta<typeof Embed>

export default meta
type Story = StoryObj<typeof meta>

export const YouTube: Story = {
  args: {
    src: getYouTubeEmbedUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ'),
    title: 'YouTube video player',
    style: { width: 480, aspectRatio: '16 / 9', border: 0 },
  },
}

export const Vimeo: Story = {
  args: {
    src: getVimeoEmbedUrl('https://vimeo.com/76979871'),
    title: 'Vimeo video player',
    style: { width: 480, aspectRatio: '16 / 9', border: 0 },
  },
}

export const Square: Story = {
  args: {
    src: getYouTubeEmbedUrl('dQw4w9WgXcQ'),
    title: 'Square embed',
    style: { width: 360, aspectRatio: '1 / 1', border: 0 },
  },
}
