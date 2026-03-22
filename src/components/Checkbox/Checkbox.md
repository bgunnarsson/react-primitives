# Checkbox

An accessible checkbox input with a built-in checkmark indicator.

## Import

```tsx
import { Checkbox } from '@bgunnarsson/react-primitives'
import { Label } from '@bgunnarsson/react-primitives'
```

## Props

### `Checkbox`

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean \| 'indeterminate'` | — | Controlled checked state. |
| `defaultChecked` | `boolean` | `false` | Uncontrolled initial checked state. |
| `onCheckedChange` | `(checked: boolean \| 'indeterminate') => void` | — | Callback when checked state changes. |
| `disabled` | `boolean` | `false` | Disables the checkbox. |
| `required` | `boolean` | `false` | Marks the field as required in a form. |
| `name` | `string` | — | Form field name for native form submission. |
| `value` | `string` | `'on'` | Form value submitted when checked. |

## Usage

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>
```

## Tailwind Example

```tsx
{/* Basic checkbox with label */}
<div className="flex items-center gap-2">
  <Checkbox
    id="terms"
    className="h-4 w-4 rounded border border-gray-300 bg-white data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
  />
  <Label htmlFor="terms" className="text-sm font-medium text-gray-700">
    Accept terms and conditions
  </Label>
</div>

{/* Required checkbox */}
<div className="flex items-start gap-2">
  <Checkbox
    id="newsletter"
    required
    className="mt-0.5 h-4 w-4 rounded border border-gray-300 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
  />
  <Label htmlFor="newsletter" className="text-sm text-gray-700">
    Subscribe to newsletter <span className="text-red-500">*</span>
  </Label>
</div>

{/* Disabled */}
<div className="flex items-center gap-2">
  <Checkbox
    id="disabled"
    disabled
    defaultChecked
    className="h-4 w-4 rounded border border-gray-200 data-[state=checked]:border-gray-400 data-[state=checked]:bg-gray-400"
  />
  <Label htmlFor="disabled" className="text-sm text-gray-400">
    Disabled option
  </Label>
</div>
```

## Notes

- The checkmark SVG indicator is built into the component. Style its visibility using `data-[state=checked]:` and `data-[state=unchecked]:` variants.
- Always pair with a `<Label htmlFor="...">` for accessibility. The `id` on `Checkbox` must match the `htmlFor` on `Label`.
- Use `name` and `value` props when submitting within a native `<form>`.
