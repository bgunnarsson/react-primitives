# Label

A semantic `<label>` element used to associate text with a form control.

## Import

```tsx
import { Label } from '@bgunnarsson/react-primitives'
```

## Props

### `Label`

Extends `React.LabelHTMLAttributes<HTMLLabelElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `htmlFor` | `string` | — | The `id` of the associated form control. Clicking the label focuses the input. |
| `children` | `React.ReactNode` | — | Label text or content. |

## Usage

```tsx
<Label htmlFor="email">Email address</Label>
<Input id="email" type="email" />
```

## Tailwind Example

```tsx
{/* Standard form label */}
<Label htmlFor="username" className="text-sm font-medium text-gray-700">
  Username
</Label>

{/* Required field indicator */}
<Label htmlFor="email" className="text-sm font-medium text-gray-700">
  Email address <span className="text-red-500">*</span>
</Label>

{/* Paired with Checkbox */}
<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
    I agree to the terms and conditions
  </Label>
</div>

{/* Paired with Switch */}
<div className="flex items-center gap-3">
  <Switch id="notifications" />
  <Label htmlFor="notifications" className="text-sm font-medium text-gray-900 cursor-pointer">
    Enable notifications
  </Label>
</div>

{/* Disabled label */}
<Label htmlFor="disabled-input" className="text-sm font-medium text-gray-400 cursor-not-allowed">
  Disabled field
</Label>
```

## Notes

- Always pair `Label` with a form control using `htmlFor` matching the control's `id`. This is required for screen reader accessibility and improves the click target size for mouse users.
- When using `FormField` and `FormLabel`, the `htmlFor`/`id` wiring is handled automatically — use `Label` directly only outside of the Form system.
