# PhoneInput

A country-aware phone input that emits an E.164-formatted string. The country list and per-country formatting are pluggable.

## Import

```tsx
import { PhoneInput, DEFAULT_COUNTRIES } from '@bgunnarsson/react-primitives'
import type { PhoneCountry } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Controlled E.164 value (e.g. `+15551234567`). |
| `defaultValue` | `string` | — | Uncontrolled initial E.164 value. |
| `onValueChange` | `(value: string, country: PhoneCountry) => void` | — | Called with the E.164 string (or `''` when empty). |
| `defaultCountry` | `string` | `'US'` | ISO 3166-1 alpha-2 default. |
| `countries` | `PhoneCountry[]` | `DEFAULT_COUNTRIES` | List shown in the country selector. |
| `formatNational` | `(digits, country) => string` | — | Custom display formatter for the national portion. |
| `selectClassName` / `selectStyle` | `string` / `CSSProperties` | — | Country `<select>` styling. |
| `inputClassName` / `inputStyle` | `string` / `CSSProperties` | — | Phone `<input>` styling. |
| `className` / `style` | `string` / `CSSProperties` | — | Wrapper styling. |

Other native input props (`disabled`, `placeholder`, `aria-*`, etc.) are forwarded to the underlying `<input>`.

## Usage

```tsx
import { useState } from 'react'

const [phone, setPhone] = useState('')

<PhoneInput value={phone} onValueChange={setPhone} defaultCountry="GB" />
```

## With Custom Formatting

```tsx
import { PhoneInput, type PhoneCountry } from '@bgunnarsson/react-primitives'

const formatNational = (digits: string, country: PhoneCountry) => {
  if (country.code === 'US' || country.code === 'CA') {
    const d = digits.slice(0, 10)
    if (d.length <= 3) return d
    if (d.length <= 6) return `${d.slice(0, 3)} ${d.slice(3)}`
    return `${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`
  }
  return digits
}

<PhoneInput value={phone} onValueChange={setPhone} formatNational={formatNational} />
```

## Tailwind Example

```tsx
<PhoneInput
  value={phone}
  onValueChange={setPhone}
  className="flex items-stretch overflow-hidden rounded-md border border-gray-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
  selectClassName="border-r border-gray-300 bg-gray-50 px-2 text-sm focus:outline-none"
  inputClassName="flex-1 px-3 py-2 text-sm focus:outline-none"
/>
```

## Notes

- The component stores national digits internally and emits E.164 (`+<dialCode><digits>`). Empty input emits `''`.
- The default country list covers ~50 common countries. Override `countries` for a smaller/larger list or to add territories.
- For full validation and per-region masking, plug in `libphonenumber-js` via `formatNational` and validate the emitted E.164 string in your form layer.
