# MaskedInput

A formatted input that applies a fixed-pattern mask as the user types. Emits the raw unmasked value alongside the masked display string.

## Import

```tsx
import { MaskedInput } from '@bgunnarsson/react-primitives'
```

## Mask Tokens

| Token | Matches |
|---|---|
| `9` | A digit `0–9` |
| `a` | A letter `A–Z`/`a–z` |
| `*` | A digit or letter |
| anything else | A literal character (e.g. `-`, `/`, space) |

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `mask` | `string` | — | Pattern using the mask tokens above. Required. |
| `value` | `string` | — | Controlled raw (unmasked) value. |
| `defaultValue` | `string` | — | Uncontrolled initial raw value. |
| `onValueChange` | `(raw: string, masked: string) => void` | — | Called on every change. |
| `maskChar` | `string` | — | Placeholder shown for unfilled slots (e.g. `_`). When unset, the field collapses after the last typed character. |

All other native input props (`placeholder`, `disabled`, `aria-*`, etc.) are forwarded.

## Usage

```tsx
import { useState } from 'react'

const [card, setCard] = useState('')

<MaskedInput
  mask="9999 9999 9999 9999"
  value={card}
  onValueChange={setCard}
  placeholder="0000 0000 0000 0000"
/>
```

## Common Masks

```tsx
{/* SSN */}
<MaskedInput mask="999-99-9999" />

{/* US phone */}
<MaskedInput mask="(999) 999-9999" />

{/* Date */}
<MaskedInput mask="99/99/9999" />

{/* License plate */}
<MaskedInput mask="aaa-9999" />

{/* With placeholder character visible */}
<MaskedInput mask="999-99-9999" maskChar="_" />
```

## Tailwind Example

```tsx
<MaskedInput
  mask="9999 9999 9999 9999"
  value={card}
  onValueChange={setCard}
  className="w-72 rounded-md border border-gray-300 px-3 py-2 font-mono text-sm tracking-wider focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
/>
```

## Notes

- `value` / `defaultValue` are the *raw* unmasked characters. The component re-applies the mask on every render.
- For numeric formatting (currency, percentages with thousands separators), prefer a dedicated number-format component; `MaskedInput` is for fixed-position patterns.
