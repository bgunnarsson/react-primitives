# Popover

A floating panel that appears on click, anchored to a trigger element.

## Import

```tsx
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '@bgunnarsson/react-primitives'
```

## Props

### `Popover` (root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controlled open state. |
| `onOpenChange` | `(open: boolean) => void` | — | Callback when open state changes. |
| `defaultOpen` | `boolean` | `false` | Uncontrolled initial open state. |

### `PopoverTrigger`

| Prop | Type | Default | Description |
|---|---|---|---|
| `asChild` | `boolean` | `false` | Merge props onto the child element. |

### `PopoverContent`

| Prop | Type | Default | Description |
|---|---|---|---|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Preferred opening side. |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Alignment relative to trigger. |
| `sideOffset` | `number` | `4` | Gap in px between trigger and content. |
| `avoidCollisions` | `boolean` | `true` | Reposition to avoid viewport overflow. |

### `PopoverClose`

| Prop | Type | Default | Description |
|---|---|---|---|
| `asChild` | `boolean` | `false` | Merge props onto the child element. |

## Usage

```tsx
<Popover>
  <PopoverTrigger asChild>
    <button>Open popover</button>
  </PopoverTrigger>
  <PopoverContent>
    <p>Popover content here.</p>
  </PopoverContent>
</Popover>
```

## Tailwind Example

```tsx
<Popover>
  <PopoverTrigger asChild>
    <button className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400">
      Filter options
    </button>
  </PopoverTrigger>
  <PopoverContent
    align="start"
    className="z-50 w-80 rounded-xl border border-gray-200 bg-white p-4 shadow-lg focus:outline-none"
  >
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-gray-900">Filter by status</h4>
      <div className="space-y-2">
        {['Active', 'Pending', 'Archived'].map((status) => (
          <label key={status} className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" className="rounded border-gray-300" />
            {status}
          </label>
        ))}
      </div>
      <div className="flex justify-end gap-2 pt-2">
        <PopoverClose asChild>
          <button className="rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50">
            Reset
          </button>
        </PopoverClose>
        <button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
          Apply
        </button>
      </div>
    </div>
  </PopoverContent>
</Popover>
```

## Notes

- Unlike `DropdownMenu`, `Popover` can contain any interactive content (forms, filters, date pickers, etc.).
- Click outside or press `Escape` to close the popover.
- `PopoverContent` renders in a Portal so it won't be clipped by `overflow: hidden` ancestors.
