# Embed

A thin `<iframe>` wrapper for third-party media (YouTube, Vimeo, etc.) with safe defaults: lazy loading, fullscreen permission, and a strict referrer policy. Ships zero CSS — control aspect ratio and sizing via `className`.

## Import

```tsx
import {
  Embed,
  getYouTubeEmbedUrl,
  getVimeoEmbedUrl,
} from '@bgunnarsson/react-primitives'
```

## Props

### `Embed`

Extends `React.IframeHTMLAttributes<HTMLIFrameElement>` (with `title` made required).

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | — | Embed URL. Use `getYouTubeEmbedUrl` / `getVimeoEmbedUrl` to convert raw share URLs. |
| `title` | `string` | — | **Required.** Accessible label announced by screen readers. |
| `allow` | `string` | `'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'` | Permissions Policy directives. |
| `allowFullScreen` | `boolean` | `true` | Allow the player to enter full-screen. |
| `loading` | `'lazy' \| 'eager'` | `'lazy'` | Browser loading hint. |
| `referrerPolicy` | `ReferrerPolicy` | `'strict-origin-when-cross-origin'` | Referrer header policy. |
| `ref` | `React.Ref<HTMLIFrameElement>` | — | Forwarded ref. |

### Helpers

| Helper | Signature | Description |
|---|---|---|
| `getYouTubeEmbedUrl` | `(urlOrId: string) => string` | Converts a YouTube watch / shorts / `youtu.be` URL or a bare 11-character video ID to an embed URL. Returns the input unchanged if it cannot parse. |
| `getVimeoEmbedUrl` | `(urlOrId: string) => string` | Converts a Vimeo URL or bare numeric ID to a player URL. Returns the input unchanged if it cannot parse. |

## Usage

```tsx
<Embed
  src={getYouTubeEmbedUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
  title="Never Gonna Give You Up"
  className="aspect-video w-full rounded-xl"
/>
```

## Tailwind Example

```tsx
{/* 16:9 YouTube embed */}
<Embed
  src={getYouTubeEmbedUrl('dQw4w9WgXcQ')}
  title="YouTube — example video"
  className="aspect-video w-full rounded-xl border-0 shadow-md"
/>

{/* Vimeo embed from a full URL */}
<Embed
  src={getVimeoEmbedUrl('https://vimeo.com/76979871')}
  title="Vimeo — example video"
  className="aspect-video w-full rounded-2xl"
/>

{/* Square ratio (e.g. social media) */}
<Embed
  src={getYouTubeEmbedUrl('dQw4w9WgXcQ')}
  title="Square embed"
  className="aspect-square w-full rounded-xl"
/>

{/* Arbitrary iframe (any third-party widget) */}
<Embed
  src="https://example.com/widget"
  title="Pricing widget"
  className="h-96 w-full rounded-lg border border-gray-200"
/>
```

## Notes

- Aspect ratio is **not** managed by the component — apply `aspect-video`, `aspect-square`, or your own ratio via `className`. Border, rounding, and shadow are also consumer-controlled.
- The default `allow` string covers the permissions YouTube and Vimeo players expect. Override `allow` if you need to restrict or extend it.
- For untrusted sources, pass a `sandbox` attribute (e.g. `sandbox="allow-scripts allow-same-origin"`).
- The `getYouTubeEmbedUrl` / `getVimeoEmbedUrl` helpers are pure URL parsers — they accept full share URLs, embed URLs, or bare video IDs. Pass query strings (autoplay, start time, etc.) by appending them to the returned URL or by passing a fully-formed embed URL directly.
