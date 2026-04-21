# Textarea

An unstyled multi-line text input that forwards refs and supports all native textarea attributes.

## Import

```tsx
import { Textarea } from '@bgunnarsson/react-primitives'
import { Label } from '@bgunnarsson/react-primitives'
```

## Props

### `Textarea`

Extends `React.TextareaHTMLAttributes<HTMLTextAreaElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `placeholder` | `string` | — | Placeholder text. |
| `disabled` | `boolean` | `false` | Disables the textarea. |
| `required` | `boolean` | `false` | Marks the field as required. |
| `rows` | `number` | — | Number of visible rows. |
| `value` | `string` | — | Controlled value. |
| `defaultValue` | `string` | — | Uncontrolled initial value. |
| `onChange` | `React.ChangeEventHandler` | — | Change handler. |
| `ref` | `React.Ref<HTMLTextAreaElement>` | — | Forwarded ref. |

## Usage

```tsx
<Label htmlFor="message">Message</Label>
<Textarea id="message" placeholder="Write your message..." rows={4} />
```

## Tailwind Example

```tsx
{/* Standard textarea with label */}
<div className="space-y-1.5">
  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
    Message
  </Label>
  <Textarea
    id="message"
    placeholder="Write your message..."
    rows={4}
    className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
  />
</div>

{/* With character count */}
<div className="space-y-1.5">
  <Label htmlFor="bio" className="text-sm font-medium text-gray-700">Bio</Label>
  <Textarea
    id="bio"
    rows={3}
    maxLength={160}
    className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  />
  <p className="text-right text-xs text-gray-400">0 / 160</p>
</div>

{/* Error state */}
<div className="space-y-1.5">
  <Label htmlFor="feedback" className="text-sm font-medium text-gray-700">Feedback</Label>
  <Textarea
    id="feedback"
    rows={3}
    className="w-full resize-none rounded-md border border-red-400 px-3 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
  />
  <p className="text-xs text-red-600">This field is required.</p>
</div>
```

## Notes

- `Textarea` forwards its ref, making it compatible with `FormControl` (Radix Slot) and third-party form libraries.
- Use `resize-none` in Tailwind to prevent the user from manually resizing, or `resize-y` to allow only vertical resizing.
- Use alongside `FormField`, `FormLabel`, `FormControl`, and `FormMessage` for automatic `id` and error state wiring.
