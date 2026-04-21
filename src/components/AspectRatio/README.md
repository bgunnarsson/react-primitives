# AspectRatio

A container that locks its children to a fixed width-to-height ratio. Wraps `@radix-ui/react-aspect-ratio`.

## Import

```tsx
import { AspectRatio } from '@bgunnarsson/react-primitives'
```

## Props

### `AspectRatio`

Extends the props of `@radix-ui/react-aspect-ratio`'s `Root`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `ratio` | `number` | `1` | Aspect ratio as width / height (e.g. `16 / 9`). |

## Usage

```tsx
<div style={{ width: 320 }}>
  <AspectRatio ratio={16 / 9}>
    <img src="/hero.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </AspectRatio>
</div>
```

## Tailwind Example

```tsx
<div className="w-80 overflow-hidden rounded-lg bg-gray-100">
  <AspectRatio ratio={16 / 9}>
    <img src="/hero.jpg" alt="" className="h-full w-full object-cover" />
  </AspectRatio>
</div>
```

## Notes

- Pass the ratio as a number, not a string (`16 / 9`, not `"16:9"`).
- The parent element must have a defined width; AspectRatio fills that width and derives the height.
