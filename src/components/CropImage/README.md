# CropImage

Renders a responsive `<picture>` from separate **mobile** and **desktop** crops, with DPR-aware (`1x`/`2x`/`3x`) `srcset` for each. Modeled after the Razor `vv-cropimage` TagHelper.

Viewport width selects which crop is used (via `media`); the browser then picks the right resolution from the `srcset` based on device pixel ratio.

## Import

```tsx
import { CropImage } from '@bgunnarsson/react-primitives'
import type { CropImageProps, CropImageCrop } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `identifier` | `string` | — | **Required.** BEM block name. Renders `{identifier}__picture` on `<picture>` and `{identifier}__image` on `<img>`. |
| `modifier` | `string` | — | Modifier class(es) appended to `<picture>`. |
| `alt` | `string` | — | **Required.** Alt text for the inner `<img>`. |
| `mobile` | `CropImageCrop` | — | **Required.** `{ src, width, height }` for the mobile crop. |
| `desktop` | `CropImageCrop` | — | Optional desktop crop. When omitted, the mobile crop is used at all viewports. |
| `breakpoint` | `number` | `420` | Pixel breakpoint between sources. Mobile source uses `(max-width: Npx)`; desktop uses `(min-width: N+1px)`. |
| `quality` | `number` | — | Appends `quality=N` to URLs. |
| `format` | `ImageFormat` | `'webp'` | Format query param. |
| `densities` | `readonly number[]` | `[1, 2, 3]` | DPR descriptors. |
| `eager` | `boolean` | `false` | Sets `loading="eager"` and `fetchpriority="high"` on the `<img>`. |
| `imgClassName` | `string` | — | className applied to the inner `<img>` (in addition to `{identifier}__image`). |
| `imgProps` | `ImgHTMLAttributes` | — | Extra props forwarded to the inner `<img>`. |
| `buildUrl` | `ImageUrlBuilder` | built-in | Override URL construction. Receives `(src, { width, height, quality, format })`. |

The component extends `React.HTMLAttributes<HTMLPictureElement>` (applied to `<picture>`).

`CropImageCrop`:
```ts
type CropImageCrop = {
  src: string
  width: number
  height: number
}
```

## Usage

```tsx
<CropImage
  identifier="hero"
  alt="Hero image"
  breakpoint={600}
  quality={80}
  eager
  mobile={{ src: '/media/hero-mobile.jpg', width: 420, height: 560 }}
  desktop={{ src: '/media/hero.jpg', width: 1440, height: 600 }}
/>
```

Renders (paraphrased):

```html
<picture class="hero__picture">
  <source media="(max-width: 600px)"
          srcset="/media/hero-mobile.jpg?width=420&height=560&format=webp&quality=80 1x,
                  /media/hero-mobile.jpg?width=840&height=1120&format=webp&quality=80 2x,
                  /media/hero-mobile.jpg?width=1260&height=1680&format=webp&quality=80 3x"
          width="420" height="560" />
  <source media="(min-width: 601px)"
          srcset="/media/hero.jpg?width=1440&height=600&format=webp&quality=80 1x, … 2x, … 3x"
          width="1440" height="600" />
  <img class="hero__image"
       src="/media/hero.jpg?width=1440&height=600&format=webp&quality=80"
       srcset="… 1x, … 2x, … 3x"
       width="1440" height="600"
       alt="Hero image"
       loading="eager"
       fetchpriority="high"
       decoding="async" />
</picture>
```

## Notes

- Pair with an image-resizing backend that honors `width`/`height`/`format`/`quality` query params (Umbraco's ImageSharp middleware, Cloudinary with a custom `buildUrl`, imgproxy, etc.).
- The default URL builder uses `URLSearchParams.set`, so any of those keys already present in the source URL are replaced — not duplicated.
- Crop `width`/`height` are the **1× display** dimensions; the component multiplies by each density to build the `srcset`.
- Use `eager` for a single above-the-fold hero per page. All other images should default to lazy loading.
- Pass `densities={[1, 2]}` to drop `3x` if you want smaller URLs for low-DPR-only audiences.
