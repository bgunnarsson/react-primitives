# RadioGroup

A group of radio buttons where only one option can be selected at a time.

## Import

```tsx
import { RadioGroup, RadioGroupItem } from '@bgunnarsson/react-primitives'
import { Label } from '@bgunnarsson/react-primitives'
```

## Props

### `RadioGroup`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `string` | — | **Required for forms.** The name used for native form submission. |
| `value` | `string` | — | Controlled selected value. |
| `defaultValue` | `string` | — | Uncontrolled initial selected value. |
| `onValueChange` | `(value: string) => void` | — | Callback when selection changes. |
| `orientation` | `'horizontal' \| 'vertical'` | `'vertical'` | Layout orientation. |
| `disabled` | `boolean` | `false` | Disables all items in the group. |
| `required` | `boolean` | `false` | Marks the group as required. |

### `RadioGroupItem`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | **Required.** The value this item represents. |
| `id` | `string` | — | **Required for labels.** Must match the `htmlFor` of the associated `Label`. |
| `disabled` | `boolean` | `false` | Disables this specific item. |

## Usage

```tsx
<RadioGroup name="plan" defaultValue="starter">
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <RadioGroupItem value="starter" id="plan-starter" />
    <Label htmlFor="plan-starter">Starter</Label>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <RadioGroupItem value="pro" id="plan-pro" />
    <Label htmlFor="plan-pro">Pro</Label>
  </div>
</RadioGroup>
```

## Tailwind Example

```tsx
<RadioGroup name="plan" defaultValue="pro" className="space-y-2">
  {[
    { value: 'starter', label: 'Starter', description: 'For individuals' },
    { value: 'pro', label: 'Pro', description: 'For small teams' },
    { value: 'enterprise', label: 'Enterprise', description: 'For large organizations' },
  ].map((plan) => (
    <div key={plan.value} className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
      <RadioGroupItem
        value={plan.value}
        id={`plan-${plan.value}`}
        className="h-4 w-4 rounded-full border border-gray-300 bg-white data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      />
      <div>
        <Label htmlFor={`plan-${plan.value}`} className="text-sm font-medium text-gray-900 cursor-pointer">
          {plan.label}
        </Label>
        <p className="text-xs text-gray-500">{plan.description}</p>
      </div>
    </div>
  ))}
</RadioGroup>
```

## Notes

- **`name` is required** for native HTML form submission. Without it, the selected value will not be included in `FormData`.
- Each `RadioGroupItem` must have a unique `id`, and its associated `Label` must have a matching `htmlFor`.
- Radix renders a hidden `<input type="radio">` for each item, using the `name` and `value` props for form compatibility.
- Arrow keys navigate between items within the group — keyboard users do not need to Tab between options.
