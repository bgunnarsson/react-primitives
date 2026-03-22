# Button

An unstyled button element with full HTML button attribute support.

## Import

```tsx
import { Button } from '@bgunnarsson/react-primitives'
```

## Props

### `Button`

Extends `React.ButtonHTMLAttributes<HTMLButtonElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | The button type. Always set explicitly inside forms. |
| `disabled` | `boolean` | `false` | Disables the button. |
| `onClick` | `React.MouseEventHandler` | — | Click handler. |

## Usage

```tsx
<Button type="button" onClick={() => console.log('clicked')}>
  Click me
</Button>
```

## Tailwind Example

```tsx
{/* Primary */}
<Button
  type="button"
  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
>
  Save changes
</Button>

{/* Secondary */}
<Button
  type="button"
  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 disabled:opacity-50"
>
  Cancel
</Button>

{/* Destructive */}
<Button
  type="button"
  className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:opacity-50"
>
  Delete
</Button>

{/* Submit inside a form */}
<form>
  <Button
    type="submit"
    className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
  >
    Submit
  </Button>
</form>
```

## Notes

- Always set `type` explicitly inside `<form>` elements. Browsers default to `type="submit"`, which can cause unintended form submissions.
- Use `disabled` to prevent interaction — it also prevents click events natively.
