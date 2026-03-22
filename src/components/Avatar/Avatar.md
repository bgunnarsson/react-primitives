# Avatar

A circular image with an automatic text fallback when the image fails to load.

## Import

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@bgunnarsson/react-primitives'
```

## Props

### `Avatar`

Extends `React.HTMLAttributes<HTMLSpanElement>`. Container for the image and fallback.

### `AvatarImage`

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | — | Image URL. |
| `alt` | `string` | — | Alt text for accessibility. |
| `onLoadingStatusChange` | `(status: 'idle' \| 'loading' \| 'loaded' \| 'error') => void` | — | Callback for image load state. |

### `AvatarFallback`

| Prop | Type | Default | Description |
|---|---|---|---|
| `delayMs` | `number` | — | Delay in ms before showing the fallback (avoids flash on fast networks). |

## Usage

```tsx
<Avatar>
  <AvatarImage src="https://example.com/photo.jpg" alt="Jane Doe" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

## Tailwind Example

```tsx
{/* Standard avatar */}
<Avatar className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
  <AvatarImage
    src="https://placehold.co/40"
    alt="Jane Doe"
    className="aspect-square h-full w-full object-cover"
  />
  <AvatarFallback className="flex h-full w-full items-center justify-center rounded-full bg-gray-200 text-sm font-medium text-gray-600">
    JD
  </AvatarFallback>
</Avatar>

{/* Large avatar with colored fallback */}
<Avatar className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full">
  <AvatarImage src="/broken-url.jpg" alt="John Smith" className="h-full w-full object-cover" />
  <AvatarFallback
    delayMs={300}
    className="flex h-full w-full items-center justify-center rounded-full bg-blue-100 text-lg font-semibold text-blue-700"
  >
    JS
  </AvatarFallback>
</Avatar>
```

## Notes

- `AvatarFallback` is only displayed when the image fails to load or has no `src`. It renders immediately unless `delayMs` is set.
- Use `delayMs` to prevent a flash of fallback content on fast network connections.
- Always provide a meaningful `alt` on `AvatarImage` for screen reader users.
