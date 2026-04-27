# Image

A responsive `<img>` that emits a DPR-aware `srcset` (`1x`, `2x`, `3x`) by appending `width`, `height`, `format`, and optional `quality` query parameters to the source URL. Pair with an image-resizing backend (Umbraco, ImageSharp, Cloudinary, imgproxy, etc.) that honors those query keys.

## Import

```tsx
import { Image } from '@bgunnarsson/react-primitives'
import type { ImageProps, ImageFormat, ImageUrlBuilder } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | — | **Required.** Base image URL. May already contain query params; existing `width`/`height`/`format`/`quality` keys are overridden. |
| `alt` | `string` | — | **Required.** Alt text. |
| `width` | `number` | — | **Required.** Display width (1× density). Used for the `width` attribute and to compute srcset. |
| `height` | `number` | — | **Required.** Display height (1× density). |
| `quality` | `number` | — | When set, appends `quality=N` to URLs. |
| `format` | `'webp' \| 'avif' \| 'jpg' \| 'png' \| string` | `'webp'` | Image format query param. |
| `densities` | `readonly number[]` | `[1, 2, 3]` | DPR descriptors to emit. |
| `eager` | `boolean` | `false` | Sets `loading="eager"` and `fetchpriority="high"` for above-the-fold images. |
| `buildUrl` | `ImageUrlBuilder` | built-in | Override URL construction. Receives `(src, { width, height, quality, format })`. |

Extends `React.ImgHTMLAttributes<HTMLImageElement>` (minus `src`/`srcSet`/`width`/`height`).

## Usage

```tsx
{/* Basic — emits srcset="…?width=800&height=400&format=webp 1x, …×2 2x, …×3 3x" */}
<Image src="/photos/hero.jpg" alt="Hero" width={800} height={400} />

{/* Above-the-fold hero with quality + eager loading */}
<Image
  src="/photos/hero.jpg"
  alt="Hero"
  width={1440}
  height={600}
  quality={80}
  eager
/>

{/* Single density (no srcset) */}
<Image src="/avatar.jpg" alt="Avatar" width={64} height={64} densities={[1]} />

{/* Custom URL builder for a different backend (e.g. Cloudinary) */}
<Image
  src="https://res.cloudinary.com/demo/image/upload/sample"
  alt="Sample"
  width={800}
  height={400}
  buildUrl={(src, { width, height, quality, format }) => {
    const tx = [`w_${width}`, `h_${height}`, `c_fill`, format && `f_${format}`, quality && `q_${quality}`]
      .filter(Boolean)
      .join(',')
    return src.replace('/upload/', `/upload/${tx}/`)
  }}
/>
```

## Notes

- The `width`/`height` props are the **1× / display** dimensions. The component multiplies them per density to build the `srcset`.
- The default URL builder uses `URLSearchParams.set`, so existing keys with the same names are replaced rather than duplicated.
- For art-directed images (different crops at different breakpoints), use `CropImage` instead.
