# ToggleGroup

A group of toggle buttons where either one (`single`) or multiple (`multiple`) items can be active at a time.

## Import

```tsx
import { ToggleGroup, ToggleGroupItem } from '@bgunnarsson/react-primitives'
```

## Props

### `ToggleGroup` (root)

`ToggleGroup` has a **discriminated union** type based on `type`. The props available depend on which type is used.

**When `type="single"`:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `'single'` | — | **Required.** Allow only one active item. |
| `value` | `string` | — | Controlled active value. |
| `defaultValue` | `string` | — | Uncontrolled initial active value. |
| `onValueChange` | `(value: string) => void` | — | Callback when active item changes. |

**When `type="multiple"`:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `'multiple'` | — | **Required.** Allow multiple active items. |
| `value` | `string[]` | — | Controlled active values. |
| `defaultValue` | `string[]` | — | Uncontrolled initial active values. |
| `onValueChange` | `(value: string[]) => void` | — | Callback when active items change. |

**Both types also accept:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Disables all items. |
| `rovingFocus` | `boolean` | `true` | Enable roving focus for keyboard navigation. |

### `ToggleGroupItem`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | **Required.** The value this item represents. |
| `disabled` | `boolean` | `false` | Disables this specific item. |

## Usage

```tsx
{/* Single selection */}
<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>

{/* Multiple selection */}
<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
  <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
  <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
</ToggleGroup>
```

## Tailwind Example

```tsx
{/* Alignment selector */}
<ToggleGroup
  type="single"
  defaultValue="left"
  className="inline-flex rounded-md border border-gray-200 bg-white"
>
  {(['left', 'center', 'right'] as const).map((alignment) => (
    <ToggleGroupItem
      key={alignment}
      value={alignment}
      className="px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors first:rounded-l-md last:rounded-r-md hover:bg-gray-50 data-[state=on]:bg-gray-100 data-[state=on]:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-inset"
    >
      {alignment.charAt(0).toUpperCase() + alignment.slice(1)}
    </ToggleGroupItem>
  ))}
</ToggleGroup>

{/* Text formatting (multiple) */}
<ToggleGroup
  type="multiple"
  className="inline-flex gap-1 rounded-lg bg-gray-100 p-1"
>
  {[
    { value: 'bold', label: 'B', className: 'font-bold' },
    { value: 'italic', label: 'I', className: 'italic' },
    { value: 'underline', label: 'U', className: 'underline' },
  ].map(({ value, label, className }) => (
    <ToggleGroupItem
      key={value}
      value={value}
      className={`inline-flex h-7 w-7 items-center justify-center rounded-md text-sm text-gray-600 hover:bg-white hover:text-gray-900 data-[state=on]:bg-white data-[state=on]:text-gray-900 data-[state=on]:shadow-sm ${className}`}
    >
      {label}
    </ToggleGroupItem>
  ))}
</ToggleGroup>
```

## Notes

- `type` is required and creates a discriminated union. TypeScript will enforce that `value` and `onValueChange` match the selected type.
- Use `data-[state=on]:` Tailwind variants to style active items.
- Items receive `aria-pressed` automatically.
