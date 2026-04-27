# VirtualList

A windowed list that renders only the rows currently in (or near) the viewport. Supports fixed and per-index variable item sizes in both vertical and horizontal orientations. Zero dependencies.

## Import

```tsx
import { VirtualList } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `readonly T[]` | — | The data array. |
| `itemSize` | `number \| (index) => number` | — | Pixel size of each row. Function form for variable sizes. |
| `children` | `({ item, index, style }) => ReactNode` | — | Render-prop. Spread `style` onto the rendered row. |
| `overscan` | `number` | `4` | Extra rows rendered above/below the visible window. |
| `height` | `number \| string` | — | Sets the scroller height (or width when horizontal). Required unless the scroller has external sizing. |
| `getItemKey` | `(item, index) => Key` | `index` | Stable React key per row. |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Direction to virtualize. |

All other native `<div>` props (`className`, `style`, `aria-*`, `onScroll`, etc.) are forwarded to the scrolling container.

## Usage

```tsx
const rows = Array.from({ length: 10_000 }, (_, i) => ({ id: i, label: `Row ${i + 1}` }))

<VirtualList items={rows} itemSize={32} height={320} getItemKey={(r) => r.id}>
  {({ item, style }) => (
    <div style={{ ...style, padding: '0 12px' }}>{item.label}</div>
  )}
</VirtualList>
```

### Variable sizes

```tsx
<VirtualList items={rows} itemSize={(i) => 32 + (i % 3) * 8} height={400}>
  {({ item, style }) => <div style={style}>{item.label}</div>}
</VirtualList>
```

### Horizontal

```tsx
<VirtualList items={rows} itemSize={160} orientation="horizontal" height={120}>
  {({ item, style }) => <div style={style}>{item.label}</div>}
</VirtualList>
```

## Tailwind Example

```tsx
<VirtualList
  items={rows}
  itemSize={40}
  height={400}
  className="rounded-md border border-gray-200"
>
  {({ item, index, style }) => (
    <div
      style={style}
      className={`flex items-center px-3 text-sm ${index % 2 ? 'bg-gray-50' : 'bg-white'}`}
    >
      {item.label}
    </div>
  )}
</VirtualList>
```

## Notes

- The render-prop **must** spread `style` onto its returned element. Rows are absolutely positioned via `transform`.
- For row sizes that depend on rendered content (measurement-based), reach for `@tanstack/react-virtual` or `react-window` directly — `VirtualList` is intentionally tiny and sizes are computed up-front.
- Keep `itemSize` referentially stable when it's a function — wrap with `useCallback` if defined inside a component.
