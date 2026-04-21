# Select

An accessible dropdown select field with support for groups, labels, separators, and disabled items.

## Import

```tsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from '@bgunnarsson/react-primitives'
```

## Props

### `Select` (root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Controlled selected value. |
| `defaultValue` | `string` | — | Uncontrolled initial selected value. |
| `onValueChange` | `(value: string) => void` | — | Callback when selection changes. |
| `open` | `boolean` | — | Controlled open state. |
| `onOpenChange` | `(open: boolean) => void` | — | Callback when open state changes. |
| `disabled` | `boolean` | `false` | Disables the select. |
| `name` | `string` | — | Form field name for native form submission. |
| `required` | `boolean` | `false` | Marks the field as required. |

### `SelectTrigger`

| Prop | Type | Default | Description |
|---|---|---|---|
| `placeholder` | `string` | — | Passed to `SelectValue`. |

The trigger renders a dropdown arrow icon automatically.

### `SelectItem`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | **Required.** The item's value. |
| `disabled` | `boolean` | `false` | Prevents this item from being selected. |

## Usage

```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="cherry">Cherry</SelectItem>
  </SelectContent>
</Select>
```

## Tailwind Example

```tsx
<Select name="country" defaultValue="is">
  <SelectTrigger className="inline-flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 hover:bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 data-[placeholder]:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50">
    <SelectValue placeholder="Select a country" />
  </SelectTrigger>
  <SelectContent className="z-50 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
    <SelectGroup>
      <SelectLabel className="px-2 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">
        Nordic
      </SelectLabel>
      <SelectItem value="is" className="relative flex cursor-default select-none items-center px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50">
        Iceland
      </SelectItem>
      <SelectItem value="no" className="relative flex cursor-default select-none items-center px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100">
        Norway
      </SelectItem>
      <SelectItem value="se" className="relative flex cursor-default select-none items-center px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100">
        Sweden
      </SelectItem>
    </SelectGroup>
    <SelectSeparator className="my-1 h-px bg-gray-100" />
    <SelectGroup>
      <SelectLabel className="px-2 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">
        Other
      </SelectLabel>
      <SelectItem value="gb" className="relative flex cursor-default select-none items-center px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100">
        United Kingdom
      </SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

## Notes

- `Select` renders a hidden `<select>` element for native form submission when `name` is provided.
- `SelectTrigger` automatically renders a dropdown chevron icon inside itself.
- `SelectContent` wraps its children in a `SelectViewport` internally.
- `SelectItem` includes both `SelectItemText` and a `SelectItemIndicator` (checkmark) internally.
