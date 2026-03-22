# Skeleton

A placeholder element shown while content is loading.

## Import

```tsx
import { Skeleton } from '@bgunnarsson/react-primitives'
```

## Props

### `Skeleton`

Extends `React.HTMLAttributes<HTMLDivElement>`. Renders `aria-hidden="true"`.

## Usage

```tsx
<Skeleton style={{ width: 200, height: 20 }} />
```

## Tailwind Example

```tsx
{/* Text line skeletons */}
<div className="space-y-2">
  <Skeleton className="h-4 w-3/4 rounded-md bg-gray-200 animate-pulse" />
  <Skeleton className="h-4 w-full rounded-md bg-gray-200 animate-pulse" />
  <Skeleton className="h-4 w-5/6 rounded-md bg-gray-200 animate-pulse" />
</div>

{/* Card skeleton */}
<div className="rounded-xl border border-gray-200 bg-white p-5 space-y-4">
  <div className="flex items-center gap-3">
    <Skeleton className="h-10 w-10 rounded-full bg-gray-200 animate-pulse shrink-0" />
    <div className="flex-1 space-y-1.5">
      <Skeleton className="h-4 w-32 rounded bg-gray-200 animate-pulse" />
      <Skeleton className="h-3 w-20 rounded bg-gray-200 animate-pulse" />
    </div>
  </div>
  <Skeleton className="h-32 w-full rounded-lg bg-gray-200 animate-pulse" />
  <div className="space-y-2">
    <Skeleton className="h-3.5 w-full rounded bg-gray-200 animate-pulse" />
    <Skeleton className="h-3.5 w-4/5 rounded bg-gray-200 animate-pulse" />
  </div>
</div>

{/* Table row skeleton */}
<div className="space-y-2">
  {Array.from({ length: 5 }, (_, i) => (
    <div key={i} className="flex items-center gap-4">
      <Skeleton className="h-4 w-6 rounded bg-gray-200 animate-pulse" />
      <Skeleton className="h-4 flex-1 rounded bg-gray-200 animate-pulse" />
      <Skeleton className="h-4 w-24 rounded bg-gray-200 animate-pulse" />
      <Skeleton className="h-6 w-16 rounded-full bg-gray-200 animate-pulse" />
    </div>
  ))}
</div>
```

## Notes

- `Skeleton` renders `aria-hidden="true"` so screen readers skip it. Ensure the loading state is communicated via a live region (e.g. `aria-live="polite"`) elsewhere in your component if needed.
- Use `animate-pulse` from Tailwind for the standard pulsing animation, or `animate-shimmer` with a custom keyframe for a shimmer effect.
- Match the skeleton dimensions to the actual content that will replace it to prevent layout shift.
