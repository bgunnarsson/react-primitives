# AudioPlayer

An HTML5 audio element wrapper with ref forwarding and full native attribute support.

## Import

```tsx
import { AudioPlayer } from '@bgunnarsson/react-primitives'
```

## Props

### `AudioPlayer`

Extends `React.AudioHTMLAttributes<HTMLAudioElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | — | Audio source URL. |
| `controls` | `boolean` | `false` | Show native browser playback controls. |
| `autoPlay` | `boolean` | `false` | Start playing immediately (usually requires `muted`). |
| `muted` | `boolean` | `false` | Mute audio (required for autoplay in most browsers). |
| `loop` | `boolean` | `false` | Loop the audio. |
| `preload` | `'none' \| 'metadata' \| 'auto'` | — | Browser preload hint. |
| `ref` | `React.Ref<HTMLAudioElement>` | — | Forwarded ref for programmatic control. |

## Usage

```tsx
<AudioPlayer src="/podcast.mp3" controls />
```

## Tailwind Example

```tsx
{/* Standard audio with controls */}
<AudioPlayer
  src="/podcast.mp3"
  controls
  className="w-full"
/>

{/* Custom-styled wrapper */}
<div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
  <h3 className="mb-2 text-sm font-medium">Episode 12 — Headless components</h3>
  <AudioPlayer src="/episode-12.mp3" controls className="w-full" />
</div>

{/* Programmatic control via ref */}
<AudioPlayer ref={audioRef} src="/clip.mp3" />
<button onClick={() => audioRef.current?.play()}>Play</button>
<button onClick={() => audioRef.current?.pause()}>Pause</button>
```

## Notes

- Browsers block autoplay with audio. Always set `muted` when using `autoPlay`.
- The ref forwards to the native `HTMLAudioElement`, giving full access to the [HTMLMediaElement API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) (`play()`, `pause()`, `currentTime`, `volume`, etc.).
- For multiple sources (different formats), pass `<source>` children instead of `src`:

  ```tsx
  <AudioPlayer controls>
    <source src="/audio.opus" type="audio/ogg" />
    <source src="/audio.mp3" type="audio/mpeg" />
  </AudioPlayer>
  ```
