# Spinner

An animated SVG loading indicator.

## Import

```tsx
import { Spinner } from '@bgunnarsson/react-primitives'
```

## Props

### `Spinner`

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number` | `24` | Width and height of the spinner in pixels. |

Extends `React.SVGAttributes<SVGSVGElement>`. Always renders `role="status"` and `aria-label="Loading"`.

## Usage

```tsx
<Spinner />
<Spinner size={48} />
```

## Tailwind Example

```tsx
{/* Default size, inheriting text color */}
<Spinner className="text-blue-600" />

{/* Inside a button */}
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-70" disabled>
  <Spinner size={16} className="text-white" />
  Saving...
</button>

{/* Centered page loader */}
<div className="flex min-h-screen items-center justify-center">
  <Spinner size={40} className="text-gray-400" />
</div>

{/* Inline content loader */}
<div className="flex items-center gap-2 text-sm text-gray-500">
  <Spinner size={14} className="text-gray-400" />
  Loading results...
</div>
```

## Notes

- The spinner uses `currentColor` for its stroke, so you control the color via `text-{color}` on the `Spinner` or any ancestor element.
- `role="status"` and `aria-label="Loading"` are always present — screen readers will announce "Loading" when the spinner appears.
- For full-page loading, consider pairing with a visually hidden live region: `<span className="sr-only" aria-live="polite">Loading, please wait.</span>`.
