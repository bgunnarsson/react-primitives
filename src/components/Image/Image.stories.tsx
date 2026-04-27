import type { Meta, StoryObj } from '@storybook/react'
import { Image } from './Image'

const meta = {
  title: 'Primitives/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    quality: { control: { type: 'number', min: 1, max: 100 } },
    format: { control: 'select', options: ['webp', 'avif', 'jpg', 'png'] },
    eager: { control: 'boolean' },
  },
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

const styles = `
  .sb-image {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }
`

export const Default: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <Image {...args} className="sb-image" />
    </>
  ),
  args: {
    src: 'https://placehold.co/800x400',
    alt: 'Placeholder image',
    width: 800,
    height: 400,
  },
}

export const WithQualityAndFormat: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <Image {...args} className="sb-image" />
      <pre style={{ fontSize: 12, marginTop: 12 }}>{`<img srcset> emits 1x/2x/3x WebP URLs with ?quality=80`}</pre>
    </>
  ),
  args: {
    src: 'https://placehold.co/800x400',
    alt: 'Compressed WebP',
    width: 800,
    height: 400,
    quality: 80,
    format: 'webp',
  },
}

export const Eager: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <Image {...args} className="sb-image" />
    </>
  ),
  args: {
    src: 'https://placehold.co/1200x600',
    alt: 'Hero image',
    width: 1200,
    height: 600,
    eager: true,
  },
}

export const SingleDensity: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <Image {...args} className="sb-image" />
    </>
  ),
  args: {
    src: 'https://placehold.co/400x400',
    alt: 'Single density',
    width: 400,
    height: 400,
    densities: [1],
  },
}
