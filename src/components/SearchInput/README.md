# SearchInput

A `type="search"` input with optional leading icon and a clear button that wipes the value and refocuses the field.

## Import

```tsx
import { SearchInput } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Controlled value. |
| `defaultValue` | `string` | `''` | Initial value for uncontrolled use. |
| `onValueChange` | `(value: string) => void` | — | Fires on every change (including clear). |
| `onClear` | `() => void` | — | Fires when the clear button is pressed. |
| `icon` | `ReactNode` | — | Leading icon. Decorative — `aria-hidden`. |
| `clearLabel` | `ReactNode` | `'×'` | Clear button content. |
| `clearAriaLabel` | `string` | `'Clear search'` | Clear button accessible name. |
| `hideClearWhenEmpty` | `boolean` | `true` | Hide the clear button when the value is empty. |
| `inputClassName` / `inputStyle` | — | — | Apply to the underlying `<input>`. |
| `iconClassName` / `iconStyle` | — | — | Apply to the icon container. |
| `clearClassName` / `clearStyle` | — | — | Apply to the clear button. |

Plus all native `<input>` attributes except `type`, `value`, `defaultValue`, and `onChange`.

## Usage

```tsx
<SearchInput
  placeholder="Search products"
  icon={<SearchIcon />}
  onValueChange={setQuery}
/>
```

## Notes

- Renders `role="searchbox"` and `type="search"`.
- The clear button is `tabIndex={-1}` so keyboard users tab past it to the next field. Native `<input type="search">` clear UI is suppressed by most browsers when wrapped this way.
