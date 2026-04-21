# Grid

A semantic layout wrapper for CSS grid. Style entirely via `className` (Tailwind) or `style`.

## Import

```tsx
import { Grid, GridItem } from '@bgunnarsson/react-primitives'
```

## Props

### `Grid`

Extends `React.HTMLAttributes<HTMLDivElement>`. Renders a `<div>`.

### `GridItem`

Extends `React.HTMLAttributes<HTMLDivElement>`. Renders a `<div>`.

## Usage

```tsx
<Grid className="grid grid-cols-3 gap-6">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</Grid>
```

With spanning:

```tsx
<Grid className="grid grid-cols-4 gap-4">
  <GridItem className="col-span-2">Wide item</GridItem>
  <div>C</div>
  <div>D</div>
</Grid>
```

## Tailwind Example

```tsx
{/* Responsive dashboard layout */}
<Grid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
  <GridItem className="col-span-1 rounded-xl border border-gray-200 bg-white p-6 lg:col-span-2">
    Main content
  </GridItem>
  <div className="rounded-xl border border-gray-200 bg-white p-6">Sidebar A</div>
  <div className="rounded-xl border border-gray-200 bg-white p-6">Sidebar B</div>
</Grid>

{/* Fixed sidebar + fluid content */}
<Grid className="grid grid-cols-[240px_1fr] gap-0">
  <GridItem className="border-r border-gray-200 bg-gray-50 p-4">Nav</GridItem>
  <GridItem className="p-8">Content</GridItem>
</Grid>
```

## Notes

- `GridItem` is optional — any child placed directly inside `Grid` is a grid cell.
- Use Tailwind's arbitrary value syntax (`grid-cols-[240px_1fr]`) for custom templates.
