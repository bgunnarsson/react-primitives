# NumberInput

A numeric input with increment and decrement buttons.

## Import

```tsx
import { NumberInput } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | — | Controlled value. |
| `onChange` | `(value: number) => void` | — | Called with the new numeric value. |
| `min` | `number` | — | Minimum allowed value. |
| `max` | `number` | — | Maximum allowed value. |
| `step` | `number` | `1` | Increment/decrement amount. |
| `disabled` | `boolean` | `false` | Disables all interaction. |

Also accepts standard `<input>` HTML attributes (excluding `type` and `onChange`).

## Usage

```tsx
import { useState } from 'react'

const [qty, setQty] = useState(1)

<NumberInput value={qty} onChange={setQty} min={1} max={99} />
```

## Tailwind Example

```tsx
<NumberInput
  value={qty}
  onChange={setQty}
  min={1}
  max={99}
  className="inline-flex items-center rounded-md border border-gray-300 [&_button]:px-3 [&_button]:py-1.5 [&_button]:text-gray-600 [&_button:hover]:bg-gray-100 [&_button:disabled]:opacity-40 [&_input]:w-12 [&_input]:border-x [&_input]:border-gray-300 [&_input]:py-1.5 [&_input]:text-center [&_input]:text-sm [&_input]:outline-none"
/>
```

## Notes

- The decrement button is automatically disabled when `value <= min`; increment when `value >= max`.
- Decrement/increment buttons have `tabIndex={-1}` so tab focus goes to the input, not the buttons.
