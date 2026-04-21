# Form

A context-based form field system that wires together labels, inputs, and error messages using shared `id` and `error` state.

## Import

```tsx
import { FormField, FormLabel, FormControl, FormMessage } from '@bgunnarsson/react-primitives'
```

## Props

### `FormField`

| Prop | Type | Default | Description |
|---|---|---|---|
| `id` | `string` | auto-generated | The id shared between label and control. Auto-generated with `useId()` if omitted. |
| `error` | `string` | — | Error message. Sets `aria-invalid` and `aria-describedby` on the control and shows `FormMessage`. |

### `FormLabel`

Extends `React.LabelHTMLAttributes<HTMLLabelElement>`. The `htmlFor` attribute is automatically set from context.

### `FormControl`

Extends `React.HTMLAttributes<HTMLElement>`. Uses Radix `Slot` internally to automatically inject `id`, `aria-invalid`, and `aria-describedby` onto its single child element from context. No additional props required.

### `FormMessage`

Extends `React.HTMLAttributes<HTMLParagraphElement>`. Renders the `error` string from context. Hidden when there is no error and no `children`.

## Usage

```tsx
<FormField>
  <FormLabel>Email</FormLabel>
  <FormControl>
    <Input type="email" placeholder="you@example.com" />
  </FormControl>
</FormField>

<FormField error="Email is required">
  <FormLabel>Email</FormLabel>
  <FormControl>
    <Input type="email" placeholder="you@example.com" />
  </FormControl>
  <FormMessage />
</FormField>
```

## Tailwind Example

```tsx
{/* Valid field */}
<FormField className="space-y-1.5">
  <FormLabel className="text-sm font-medium text-gray-700">Email address</FormLabel>
  <FormControl>
    <Input
      type="email"
      placeholder="you@example.com"
      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
  </FormControl>
</FormField>

{/* Field with error */}
<FormField error="Please enter a valid email address" className="space-y-1.5">
  <FormLabel className="text-sm font-medium text-gray-700">Email address</FormLabel>
  <FormControl>
    <Input
      type="email"
      placeholder="you@example.com"
      className="w-full rounded-md border border-red-400 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 aria-[invalid]:border-red-400"
    />
  </FormControl>
  <FormMessage className="text-xs text-red-600" />
</FormField>
```

## Notes

- `FormControl` uses Radix `Slot` to inject `id`, `aria-invalid`, and `aria-describedby` onto any child element. The child must accept and forward these props (all standard HTML inputs do).
- You do not need to manually set `htmlFor` on `FormLabel` or `id` on the input — they are wired automatically.
- `FormMessage` renders nothing when `error` is undefined and has no children.
- To display custom message content, pass it as `children` to `FormMessage` instead of using the `error` prop.
