# PasswordInput

An `<input>` with a built-in show/hide toggle. The toggle button's accessible name updates to reflect the current visibility state.

## Import

```tsx
import { PasswordInput } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `visible` | `boolean` | — | Controlled visibility. |
| `defaultVisible` | `boolean` | `false` | Initial visibility for uncontrolled use. |
| `onVisibilityChange` | `(visible: boolean) => void` | — | Fires on toggle click. |
| `toggleLabel` | `(visible: boolean) => ReactNode` | `'Show' / 'Hide'` | Toggle button content. |
| `toggleAriaLabel` | `(visible: boolean) => string` | `'Show password' / 'Hide password'` | Toggle accessible name. |
| `inputClassName` | `string` | — | Class on the underlying `<input>`. |
| `inputStyle` | `CSSProperties` | — | Inline style on the underlying `<input>`. |
| `toggleClassName` | `string` | — | Class on the toggle button. |
| `toggleStyle` | `CSSProperties` | — | Inline style on the toggle button. |

Plus all native `<input>` attributes except `type` (managed by the component).

## Usage

```tsx
<PasswordInput
  placeholder="Enter password"
  toggleLabel={(v) => (v ? <EyeOff /> : <Eye />)}
/>
```

## Notes

- The toggle is `tabIndex={-1}` so keyboard users can flow straight from the input to the next field. Override by setting `tabIndex` on the parent or using a custom layout.
- `aria-pressed` reflects visibility for assistive tech.
