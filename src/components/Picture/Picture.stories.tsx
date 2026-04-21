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

const styles = `
  .sb-picture {
    display: block;
    max-width: 100%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }
  .sb-picture-img {
    display: block;
    width: 100%;
    height: auto;
    transition: transform 300ms ease;
  }
  .sb-picture:hover .sb-picture-img { transform: scale(1.02); }

  .sb-picture--rounded { border-radius: 9999px; width: 160px; height: 160px; }
  .sb-picture--rounded .sb-picture-img { width: 100%; height: 100%; object-fit: cover; }

  .sb-caption {
    margin: 8px 0 0;
    font: 400 12px ui-sans-serif, system-ui, sans-serif;
    color: #6b7280;
  }
`

export const Default: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <figure style={{ margin: 0, maxWidth: 480 }}>
        <Picture {...args} className="sb-picture" imgClassName="sb-picture-img" />
        <figcaption className="sb-caption">A lazy-loaded placeholder, 800×400.</figcaption>
      </figure>
    </>
  ),
  args: {
    src: 'https://placehold.co/800x400',
    alt: 'Placeholder image',
    width: 800,
    height: 400,
  },
}

export const Rounded: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <Picture {...args} className="sb-picture sb-picture--rounded" imgClassName="sb-picture-img" />
    </>
  ),
  args: {
    src: 'https://placehold.co/320',
    alt: 'Rounded portrait',
    width: 320,
    height: 320,
  },
}

export const WithSources: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <Picture {...args} className="sb-picture" imgClassName="sb-picture-img" />
    </>
  ),
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
