# EmptyState

A compound component for zero-data screens — empty lists, no search results, permission walls, etc.

## Import

```tsx
import { EmptyState, EmptyStateIcon, EmptyStateTitle, EmptyStateDescription, EmptyStateAction } from '@bgunnarsson/react-primitives'
```

## Props

### `EmptyState`
Extends `React.HTMLAttributes<HTMLDivElement>`.

### `EmptyStateIcon`
Extends `React.HTMLAttributes<HTMLDivElement>`. Container for an icon or illustration.

### `EmptyStateTitle`

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `'h1'–'h6'` | `'h3'` | Heading element level. |

### `EmptyStateDescription`
Extends `React.HTMLAttributes<HTMLParagraphElement>`.

### `EmptyStateAction`
Extends `React.HTMLAttributes<HTMLDivElement>`. Container for a CTA button or link.

## Usage

```tsx
<EmptyState>
  <EmptyStateIcon>📭</EmptyStateIcon>
  <EmptyStateTitle>No results found</EmptyStateTitle>
  <EmptyStateDescription>Try adjusting your search or filters.</EmptyStateDescription>
  <EmptyStateAction>
    <Button>Clear filters</Button>
  </EmptyStateAction>
</EmptyState>
```

## Tailwind Example

```tsx
<EmptyState className="flex flex-col items-center gap-4 py-16 text-center">
  <EmptyStateIcon className="text-5xl">📭</EmptyStateIcon>
  <EmptyStateTitle className="text-lg font-semibold text-gray-900">
    No results found
  </EmptyStateTitle>
  <EmptyStateDescription className="max-w-sm text-sm text-gray-500">
    We couldn't find anything matching your search. Try different keywords or clear the filters.
  </EmptyStateDescription>
  <EmptyStateAction className="mt-2">
    <button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
      Clear filters
    </button>
  </EmptyStateAction>
</EmptyState>
```
