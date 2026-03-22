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

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <button onClick={() => setOpen(true)}>Open lightbox</button>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            { src: 'https://placehold.co/1200x800', alt: 'Image 1' },
            { src: 'https://placehold.co/1200x800/333/fff', alt: 'Image 2' },
            { src: 'https://placehold.co/1200x800/666/fff', alt: 'Image 3' },
          ]}
          {...({} as any)}
        />
      </>
    )
  },
}
