# Input

An unstyled text input field that forwards refs, supports all native input attributes, and renders placeholder text as a stylable span.

## Import

```tsx
import { Input } from '@bgunnarsson/react-primitives'
import { Label } from '@bgunnarsson/react-primitives'
```

## Props

### `Input`

Extends `React.InputHTMLAttributes<HTMLInputElement>`, except inline `style` is intentionally omitted.

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | — | Class name for the wrapper element. |
| `inputClassName` | `string` | — | Class name for the native input element. |
| `placeholderClassName` | `string` | — | Class name for the placeholder span. |
| `type` | `string` | `'text'` | Input type (`text`, `email`, `password`, `number`, `tel`, `url`, `search`, etc.). |
| `placeholder` | `string` | — | Placeholder text — set natively on the input (so `:placeholder-shown` value detection works) AND rendered in a sibling span for CSS transitions. Hide the native one with `placeholder:text-transparent` when styling the span. |
| `disabled` | `boolean` | `false` | Disables the input. |
| `required` | `boolean` | `false` | Marks the field as required. |
| `value` | `string` | — | Controlled value. |
| `defaultValue` | `string` | — | Uncontrolled initial value. |
| `onChange` | `React.ChangeEventHandler` | — | Change handler. |
| `ref` | `React.Ref<HTMLInputElement>` | — | Forwarded ref. |

## Usage

```tsx
<Label htmlFor="email">Email address</Label>
<Input id="email" type="email" placeholder="you@example.com" />
```

## Tailwind Example

```tsx
{/* Standard text input with label */}
<div className="space-y-1.5">
  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
    Full name
  </Label>
  <Input
    id="name"
    type="text"
    placeholder="Jane Doe"
    className="relative block w-full focus-within:ring-1 focus-within:ring-blue-500"
    inputClassName="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
    placeholderClassName="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 transition-transform duration-150"
  />
</div>

{/* Password input */}
<div className="space-y-1.5">
  <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
  <Input
    id="password"
    type="password"
    placeholder="••••••••"
    className="relative block w-full focus-within:ring-1 focus-within:ring-blue-500"
    inputClassName="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
    placeholderClassName="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 transition-transform duration-150"
  />
</div>

{/* Error state */}
<div className="space-y-1.5">
  <Label htmlFor="email-error" className="text-sm font-medium text-gray-700">Email</Label>
  <Input
    id="email-error"
    type="email"
    defaultValue="not-an-email"
    className="relative block w-full focus-within:ring-1 focus-within:ring-red-500"
    inputClassName="w-full rounded-md border border-red-400 px-3 py-2 text-sm focus:border-red-500 focus:outline-none"
  />
  <p className="text-xs text-red-600">Please enter a valid email address.</p>
</div>

{/* Disabled */}
<Input
  disabled
  value="Read only value"
  inputClassName="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-500 cursor-not-allowed"
/>
```

## Notes

- `Input` forwards its ref, making it compatible with `FormControl` (Radix Slot) and third-party form libraries like React Hook Form.
- `placeholder` is rendered as a sibling `<span aria-hidden="true">` instead of a native placeholder so it can be animated with wrapper focus styles such as `:focus-within`.
- Use alongside `FormField`, `FormLabel`, `FormControl`, and `FormMessage` for full form field wiring with automatic `id` and error state management.
