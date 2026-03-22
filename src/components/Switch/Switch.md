# Switch

A toggle switch for binary on/off settings. Built on Radix UI.

## Import

```tsx
import { Switch } from '@bgunnarsson/react-primitives'
import { Label } from '@bgunnarsson/react-primitives'
```

## Props

### `Switch`

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | — | Controlled checked state. |
| `defaultChecked` | `boolean` | `false` | Uncontrolled initial checked state. |
| `onCheckedChange` | `(checked: boolean) => void` | — | Callback when checked state changes. |
| `disabled` | `boolean` | `false` | Disables the switch. |
| `required` | `boolean` | `false` | Marks the field as required. |
| `name` | `string` | — | Form field name for native form submission. |
| `value` | `string` | `'on'` | Form value submitted when checked. |

## Usage

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>
```

## Tailwind Example

```tsx
{/* Standard switch with label */}
<div className="flex items-center gap-3">
  <Switch
    id="notifications"
    className="relative inline-flex h-6 w-11 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-600"
  />
  <Label htmlFor="notifications" className="text-sm font-medium text-gray-900 cursor-pointer">
    Enable notifications
  </Label>
</div>

{/* Settings row */}
<div className="flex items-center justify-between py-3">
  <div>
    <p className="text-sm font-medium text-gray-900">Dark mode</p>
    <p className="text-xs text-gray-500">Use a dark color scheme.</p>
  </div>
  <Switch
    id="dark-mode"
    defaultChecked
    className="relative inline-flex h-6 w-11 rounded-full bg-gray-200 transition-colors data-[state=checked]:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
  />
</div>

{/* Disabled */}
<div className="flex items-center gap-3">
  <Switch
    id="sync"
    disabled
    className="relative inline-flex h-6 w-11 rounded-full bg-gray-200 transition-colors data-[state=checked]:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
  />
  <Label htmlFor="sync" className="text-sm text-gray-400 cursor-not-allowed">
    Auto-sync (unavailable)
  </Label>
</div>
```

## Notes

- The `Thumb` (the sliding circle) is rendered inside the component automatically. Style it using the `[&>[data-radix-switch-thumb]]` selector or the `[&>span]` child selector in Tailwind.
- Use `data-[state=checked]:` and `data-[state=unchecked]:` variants to change the switch track color when toggled.
- Always pair with a `<Label>` for accessibility. The `id` must match `htmlFor`.
