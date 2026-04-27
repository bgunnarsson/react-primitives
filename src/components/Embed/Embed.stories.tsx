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

const fillIframe = `.sb-embed > iframe { width: 100%; height: 100%; border: 0; display: block; }`

export const YouTube: Story = {
  args: {
    src: getYouTubeEmbedUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ'),
    title: 'YouTube video player',
  },
  render: args => (
    <>
      <style>{fillIframe}</style>
      <div className="sb-embed" style={{ width: 480, aspectRatio: '16 / 9' }}>
        <Embed {...args} />
      </div>
    </>
  ),
}

export const Vimeo: Story = {
  args: {
    src: getVimeoEmbedUrl('https://vimeo.com/76979871'),
    title: 'Vimeo video player',
  },
  render: args => (
    <>
      <style>{fillIframe}</style>
      <div className="sb-embed" style={{ width: 480, aspectRatio: '16 / 9' }}>
        <Embed {...args} />
      </div>
    </>
  ),
}

export const Square: Story = {
  args: {
    src: getYouTubeEmbedUrl('dQw4w9WgXcQ'),
    title: 'Square embed',
  },
  render: args => (
    <>
      <style>{fillIframe}</style>
      <div className="sb-embed" style={{ width: 360, aspectRatio: '1 / 1' }}>
        <Embed {...args} />
      </div>
    </>
  ),
}
