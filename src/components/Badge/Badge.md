# Badge

An inline label used to highlight status, counts, or categories.

## Import

```tsx
import { Badge } from '@bgunnarsson/react-primitives'
```

## Props

### `Badge`

Extends `React.HTMLAttributes<HTMLSpanElement>`. Renders as a `<span>`.

## Usage

```tsx
<Badge>New</Badge>
```

## Tailwind Example

```tsx
{/* Status badge */}
<Badge className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
  Active
</Badge>

{/* Count badge */}
<Badge className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-xs font-bold text-white">
  4
</Badge>

{/* Inline in text */}
<p className="text-sm text-gray-700">
  This feature is{' '}
  <Badge className="inline-flex items-center rounded-md bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700">
    Beta
  </Badge>{' '}
  and may change.
</p>

{/* Pill variants */}
<div className="flex gap-2">
  <Badge className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">Draft</Badge>
  <Badge className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">Pending</Badge>
  <Badge className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">Published</Badge>
</div>
```
