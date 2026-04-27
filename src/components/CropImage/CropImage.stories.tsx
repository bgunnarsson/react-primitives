import type { Meta, StoryObj } from '@storybook/react'
import { CropImage } from './CropImage'

const meta = {
  title: 'Primitives/CropImage',
  component: CropImage,
  tags: ['autodocs'],
  argTypes: {
    identifier: { control: 'text' },
    alt: { control: 'text' },
    breakpoint: { control: { type: 'number', min: 320, max: 1440, step: 10 } },
    quality: { control: { type: 'number', min: 1, max: 100 } },
    eager: { control: 'boolean' },
  },
} satisfies Meta<typeof CropImage>

export default meta
type Story = StoryObj<typeof meta>

const styles = `
  .hero__picture { display: block; max-width: 100%; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08); }
  .hero__image { display: block; width: 100%; height: auto; }
  .hero--rounded { border-radius: 9999px; }

  .sb-caption { margin: 8px 0 0; font: 400 12px ui-sans-serif, system-ui, sans-serif; color: #6b7280; }
`

export const Default: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <CropImage {...args} />
      <p className="sb-caption">Resize the viewport across the breakpoint to see the source switch.</p>
    </>
  ),
  args: {
    identifier: 'hero',
    alt: 'Responsive hero image',
    breakpoint: 600,
    mobile: { src: 'https://placehold.co/420x560', width: 420, height: 560 },
    desktop: { src: 'https://placehold.co/1200x600', width: 1200, height: 600 },
  },
}

export const MobileOnly: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <CropImage {...args} />
    </>
  ),
  args: {
    identifier: 'hero',
    alt: 'Mobile-only crop',
    mobile: { src: 'https://placehold.co/420x420', width: 420, height: 420 },
  },
}

export const WithModifier: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <CropImage {...args} />
    </>
  ),
  args: {
    identifier: 'hero',
    modifier: 'hero--rounded',
    alt: 'Rounded crop',
    mobile: { src: 'https://placehold.co/320x320', width: 320, height: 320 },
    desktop: { src: 'https://placehold.co/640x640', width: 640, height: 640 },
  },
}

export const EagerHero: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <CropImage {...args} />
    </>
  ),
  args: {
    identifier: 'hero',
    alt: 'Above-the-fold hero',
    eager: true,
    quality: 80,
    mobile: { src: 'https://placehold.co/420x560', width: 420, height: 560 },
    desktop: { src: 'https://placehold.co/1440x600', width: 1440, height: 600 },
  },
}
