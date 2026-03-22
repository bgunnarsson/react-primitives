# ScrollArea

A scrollable container with custom-styled scrollbars that work consistently across browsers and operating systems.

## Import

```tsx
import { ScrollArea } from '@bgunnarsson/react-primitives'
```

## Props

### `ScrollArea`

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `'auto' \| 'always' \| 'scroll' \| 'hover'` | `'hover'` | When scrollbars are visible. |
| `scrollHideDelay` | `number` | `600` | Delay in ms before scrollbars hide (when `type="scroll"` or `type="hover"`). |

Extends `React.ComponentPropsWithoutRef`. The component automatically includes a Viewport, both Scrollbars (vertical + horizontal), and a Corner.

## Usage

```tsx
<ScrollArea style={{ height: 300 }}>
  <div style={{ padding: 16 }}>
    {/* Long content */}
  </div>
</ScrollArea>
```

## Tailwind Example

```tsx
{/* Vertical scroll for a sidebar list */}
<ScrollArea className="h-72 w-56 rounded-md border border-gray-200">
  <div className="p-3">
    {Array.from({ length: 30 }, (_, i) => (
      <div key={i} className="py-1.5 text-sm text-gray-700">
        Item {i + 1}
      </div>
    ))}
  </div>
</ScrollArea>

{/* Horizontal scroll for a data table */}
<ScrollArea className="w-full whitespace-nowrap rounded-md border border-gray-200">
  <div className="flex gap-3 p-3">
    {Array.from({ length: 20 }, (_, i) => (
      <div key={i} className="w-32 shrink-0 rounded-lg bg-gray-100 p-3 text-sm text-gray-700">
        Column {i + 1}
      </div>
    ))}
  </div>
</ScrollArea>

{/* Chat/log area that sticks to bottom */}
<ScrollArea className="h-96 w-full rounded-xl border border-gray-200 bg-gray-50 p-4">
  <div className="space-y-3">
    {messages.map((msg, i) => (
      <p key={i} className="text-sm text-gray-700">{msg}</p>
    ))}
  </div>
</ScrollArea>
```

## Notes

- `ScrollArea` includes Viewport, Scrollbar (vertical and horizontal), and Corner internally — no need to compose them manually.
- The scrollbar thumb and track are unstyled. Target them via the exported `ScrollAreaScrollbar` and `ScrollAreaThumb` parts if you need more control (import from the component directly, not from the package root).
- The component uses a custom scrollbar overlay — the native scrollbar is hidden. This means it looks the same on all platforms.
