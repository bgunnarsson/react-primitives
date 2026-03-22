# CheckboxGroup

A controlled compound component for rendering a group of labelled checkboxes with shared state.

## Import

```tsx
import { CheckboxGroup, CheckboxGroupItem } from '@bgunnarsson/react-primitives'
```

## Props

### `CheckboxGroup`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `string` | — | The `name` attribute shared by all checkboxes. Used to generate unique `id`s for each item. |
| `value` | `string[]` | — | Controlled array of currently checked values. |
| `onValueChange` | `(value: string[]) => void` | — | Called with the updated array whenever an item is checked or unchecked. |
| `disabled` | `boolean` | `false` | Disables all items when `true`. Can be overridden per item. |

Extends `React.HTMLAttributes<HTMLDivElement>`.

### `CheckboxGroupItem`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | The value added to / removed from the `CheckboxGroup` value array when this item is toggled. |
| `disabled` | `boolean` | — | Overrides the parent `disabled` for this item. |
| `children` | `React.ReactNode` | — | The label text rendered next to the checkbox. |

Extends `React.HTMLAttributes<HTMLDivElement>`.

## Usage

```tsx
import { useState } from 'react'
import { CheckboxGroup, CheckboxGroupItem } from '@bgunnarsson/react-primitives'

export function FruitPicker() {
  const [selected, setSelected] = useState<string[]>([])

  return (
    <CheckboxGroup name="fruits" value={selected} onValueChange={setSelected}>
      <CheckboxGroupItem value="apple">Apple</CheckboxGroupItem>
      <CheckboxGroupItem value="banana">Banana</CheckboxGroupItem>
      <CheckboxGroupItem value="cherry" disabled>Cherry</CheckboxGroupItem>
    </CheckboxGroup>
  )
}
```

## Tailwind Example

```tsx
<CheckboxGroup
  name="notifications"
  value={selected}
  onValueChange={setSelected}
  className="flex flex-col gap-3"
>
  <CheckboxGroupItem
    value="email"
    className="flex items-center gap-3"
  >
    {/* CheckboxGroupItem renders Checkbox + Label internally */}
    {/* Style the container div; Checkbox and Label accept className via the primitives */}
    Email notifications
  </CheckboxGroupItem>
  <CheckboxGroupItem value="sms" className="flex items-center gap-3">
    SMS notifications
  </CheckboxGroupItem>
  <CheckboxGroupItem value="push" className="flex items-center gap-3">
    Push notifications
  </CheckboxGroupItem>
</CheckboxGroup>
```

To style the checkbox and label themselves, use the individual primitives instead:

```tsx
import { Checkbox, Label } from '@bgunnarsson/react-primitives'
```

## Notes

- Each `CheckboxGroupItem` auto-generates an `id` from `${name}-${value}` and wires it to the `Label`'s `htmlFor`.
- Setting `disabled` on `CheckboxGroup` disables all items. Setting `disabled` on a `CheckboxGroupItem` disables only that item regardless of the parent.
- The root `div` renders with `role="group"`. Add an `aria-labelledby` pointing to a visible heading for best accessibility.
