# VideoPlayer

An HTML5 video element wrapper with ref forwarding and full native attribute support.

## Import

```tsx
import { VideoPlayer } from '@bgunnarsson/react-primitives'
```

## Props

### `VideoPlayer`

Extends `React.VideoHTMLAttributes<HTMLVideoElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | — | Video source URL. |
| `poster` | `string` | — | Image to show before the video plays. |
| `controls` | `boolean` | `false` | Show native browser playback controls. |
| `autoPlay` | `boolean` | `false` | Start playing immediately (usually requires `muted`). |
| `muted` | `boolean` | `false` | Mute audio (required for autoplay in most browsers). |
| `loop` | `boolean` | `false` | Loop the video. |
| `playsInline` | `boolean` | `false` | Play inline on iOS instead of full-screen. |
| `preload` | `'none' \| 'metadata' \| 'auto'` | — | Browser preload hint. |
| `ref` | `React.Ref<HTMLVideoElement>` | — | Forwarded ref for programmatic control. |

## Usage

```tsx
<VideoPlayer
  src="/video.mp4"
  controls
  style={{ maxWidth: 640 }}
/>
```

## Tailwind Example

```tsx
{/* Standard video with controls */}
<VideoPlayer
  src="https://www.w3schools.com/html/mov_bbb.mp4"
  controls
  className="w-full rounded-xl"
/>

{/* With poster image */}
<VideoPlayer
  src="/promo.mp4"
  poster="/promo-thumb.jpg"
  controls
  className="aspect-video w-full rounded-xl bg-black object-cover"
/>

{/* Background autoplay video (muted + loop required) */}
<div className="relative overflow-hidden rounded-2xl">
  <VideoPlayer
    src="/background.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  />
  <div className="relative z-10 p-8">
    <h2 className="text-2xl font-bold text-white">Hero section</h2>
  </div>
</div>

{/* Programmatic control via ref */}
<VideoPlayer
  ref={videoRef}
  src="/clip.mp4"
  className="w-full rounded-lg"
/>
<button onClick={() => videoRef.current?.play()}>Play</button>
<button onClick={() => videoRef.current?.pause()}>Pause</button>
```

## Notes

- Browsers block autoplay with audio. Always set `muted` when using `autoPlay`.
- Set `playsInline` to prevent iOS Safari from opening the video in full-screen mode.
- The ref forwards to the native `HTMLVideoElement`, giving full access to the [HTMLMediaElement API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) (`play()`, `pause()`, `currentTime`, etc.).
- For responsive video, apply `aspect-video` (16:9) combined with `w-full` to maintain the aspect ratio.
