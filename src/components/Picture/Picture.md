# Picture

A responsive `<picture>` element with support for multiple image sources and lazy loading.

## Import

```tsx
import { Picture } from '@bgunnarsson/react-primitives'
import type { PictureSource } from '@bgunnarsson/react-primitives'
```

## Props

### `Picture`

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | — | **Required.** Fallback image URL (used by the inner `<img>`). |
| `alt` | `string` | — | **Required.** Alt text for the image. |
| `sources` | `PictureSource[]` | `[]` | Array of `<source>` descriptors for responsive images. |
| `loading` | `'lazy' \| 'eager'` | `'lazy'` | Browser loading strategy. |
| `width` | `number` | — | Natural image width (prevents layout shift). |
| `height` | `number` | — | Natural image height (prevents layout shift). |
| `imgClassName` | `string` | — | `className` applied to the inner `<img>` element. |

Extends `React.HTMLAttributes<HTMLPictureElement>` (applied to `<picture>`).

### `PictureSource`

```ts
type PictureSource = {
  srcSet: string    // Image URL or srcset descriptor
  media?: string    // Media query string
  type?: string     // MIME type (e.g. 'image/webp')
  width?: number
  height?: number
}
```

## Usage

```tsx
{/* Simple image */}
<Picture src="/photo.jpg" alt="A landscape" width={800} height={450} />

{/* Responsive sources */}
<Picture
  src="/photo.jpg"
  alt="A landscape"
  width={800}
  height={450}
  sources={[
    { srcSet: '/photo.webp', type: 'image/webp' },
    { srcSet: '/photo-sm.jpg', media: '(max-width: 640px)' },
  ]}
/>
```

## Tailwind Example

```tsx
{/* Responsive hero image */}
<Picture
  src="/hero.jpg"
  alt="Hero image"
  width={1440}
  height={600}
  loading="eager"
  sources={[
    { srcSet: '/hero.webp', type: 'image/webp' },
    { srcSet: '/hero-mobile.jpg', media: '(max-width: 640px)' },
  ]}
  className="w-full"
  imgClassName="w-full object-cover h-[400px] md:h-[600px]"
/>

{/* Thumbnail with aspect ratio */}
<Picture
  src="/thumb.jpg"
  alt="Product thumbnail"
  width={400}
  height={400}
  className="block overflow-hidden rounded-lg"
  imgClassName="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
/>
```

## Notes

- Always provide `width` and `height` to prevent cumulative layout shift (CLS) — the browser reserves space before the image loads.
- Use `loading="eager"` for above-the-fold images (e.g. hero images). All other images should use the default `lazy`.
- The `sources` array maps directly to `<source>` elements in order. List more specific formats (WebP, AVIF) before the generic fallback.
- Use `imgClassName` to style the inner `<img>` and `className` to style the outer `<picture>`.
