# Lightbox

A full-screen image viewer with navigation, zoom, and keyboard support. Built on yet-another-react-lightbox.

## Import

```tsx
import { Lightbox } from '@bgunnarsson/react-primitives'
import type { Slide } from '@bgunnarsson/react-primitives'

// Required: import the lightbox CSS in your app entry or layout
import 'yet-another-react-lightbox/styles.css'
```

## Props

### `Lightbox`

Extends all props from `yet-another-react-lightbox`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | **Required.** Whether the lightbox is visible. |
| `close` | `() => void` | — | **Required.** Callback to close the lightbox. |
| `slides` | `Slide[]` | — | **Required.** Array of slide objects. |
| `index` | `number` | `0` | Index of the initially visible slide. |

### `Slide`

```ts
type Slide = {
  src: string       // Image URL
  alt?: string      // Alt text
  width?: number    // Natural image width
  height?: number   // Natural image height
}
```

## Usage

```tsx
import { useState } from 'react'
import { Lightbox } from '@bgunnarsson/react-primitives'
import 'yet-another-react-lightbox/styles.css'

function Gallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = [
    { src: '/photos/1.jpg', alt: 'Photo 1' },
    { src: '/photos/2.jpg', alt: 'Photo 2' },
    { src: '/photos/3.jpg', alt: 'Photo 3' },
  ]

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {slides.map((slide, i) => (
          <button key={i} onClick={() => { setIndex(i); setOpen(true) }}>
            <img src={slide.src} alt={slide.alt} className="aspect-square w-full object-cover rounded-lg" />
          </button>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
      />
    </>
  )
}
```

## Tailwind Example

The lightbox itself is controlled by its own CSS (the required import above). Tailwind is used to style the gallery trigger grid, not the lightbox overlay.

```tsx
<div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
  {slides.map((slide, i) => (
    <button
      key={i}
      onClick={() => { setIndex(i); setOpen(true) }}
      className="group relative overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <img
        src={slide.src}
        alt={slide.alt}
        className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
    </button>
  ))}
</div>
```

## Notes

- **You must import `yet-another-react-lightbox/styles.css`** in your app's entry point or layout. Without it, the lightbox will be invisible (z-index, positioning, and visibility rely on this stylesheet).
- The lightbox CSS is separate from your Tailwind styles and will not conflict with them.
- YARL supports plugins (Thumbnails, Zoom, Captions, Fullscreen, etc.) via its `plugins` prop. See [YARL docs](https://yet-another-react-lightbox.com) for details.
