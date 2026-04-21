import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Lightbox } from './Lightbox'
import 'yet-another-react-lightbox/styles.css'

// Lightbox has many required props — use a loose Meta type and render-only stories
const meta = {
  title: 'Primitives/Lightbox',
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj

const styles = `
  .sb-lightbox-trigger {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    background: #111827;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font: 500 14px ui-sans-serif, system-ui, sans-serif;
    cursor: pointer;
    transition: background 120ms ease;
  }
  .sb-lightbox-trigger:hover { background: #1f2937; }
  .sb-lightbox-trigger:focus-visible { outline: 2px solid #3b82f6; outline-offset: 2px; }

  .sb-lightbox-thumbs {
    display: grid;
    grid-template-columns: repeat(3, 120px);
    gap: 8px;
    margin-top: 16px;
  }
  .sb-lightbox-thumb {
    width: 120px;
    height: 80px;
    object-fit: cover;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 160ms ease, box-shadow 160ms ease;
  }
  .sb-lightbox-thumb:hover { transform: scale(1.03); box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12); }
`

const slides = [
  { src: 'https://placehold.co/1200x800', alt: 'Image 1' },
  { src: 'https://placehold.co/1200x800/333/fff', alt: 'Image 2' },
  { src: 'https://placehold.co/1200x800/666/fff', alt: 'Image 3' },
]

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <style>{styles}</style>
        <button className="sb-lightbox-trigger" onClick={() => setOpen(true)}>
          Open lightbox
        </button>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          {...({} as any)}
        />
      </>
    )
  },
}

export const FromThumbnails: Story = {
  render: () => {
    const [index, setIndex] = React.useState(-1)
    return (
      <>
        <style>{styles}</style>
        <div className="sb-lightbox-thumbs">
          {slides.map((s, i) => (
            <img key={s.src} src={s.src} alt={s.alt} className="sb-lightbox-thumb" onClick={() => setIndex(i)} />
          ))}
        </div>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={slides}
          {...({} as any)}
        />
      </>
    )
  },
}
