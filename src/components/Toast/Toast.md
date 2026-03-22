# Toast

A notification system for short-lived messages. Built on [Sonner](https://sonner.emilkowal.ski/).

## Import

```tsx
import { Toaster, toast } from '@bgunnarsson/react-primitives'
```

## Setup

Place `<Toaster>` once in your app layout (e.g. root layout or `App.tsx`):

```tsx
import { Toaster } from '@bgunnarsson/react-primitives'

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}
```

Then call `toast()` from anywhere:

```tsx
import { toast } from '@bgunnarsson/react-primitives'

toast('Profile saved.')
toast.success('Changes published.')
toast.error('Failed to save.')
toast.warning('Session expiring soon.')
```

## Props

### `Toaster`

| Prop | Type | Default | Description |
|---|---|---|---|
| `position` | `'top-left' \| 'top-center' \| 'top-right' \| 'bottom-left' \| 'bottom-center' \| 'bottom-right'` | `'bottom-right'` | Where toasts appear on screen. |
| `theme` | `'light' \| 'dark' \| 'system'` | `'light'` | Visual theme. |
| `richColors` | `boolean` | `false` | Use colored backgrounds for success/error/warning variants. |
| `expand` | `boolean` | `false` | Expand toasts by default instead of stacking. |
| `duration` | `number` | `4000` | Auto-dismiss delay in ms. |
| `closeButton` | `boolean` | `false` | Show a close button on each toast. |
| `visibleToasts` | `number` | `3` | Maximum number of visible toasts at once. |

## Toast API

```ts
// Default
toast('Your message here.')

// With description
toast('Event created', { description: 'Monday at 6:00pm' })

// Variants
toast.success('Saved successfully.')
toast.error('Something went wrong.')
toast.warning('Session expiring in 5 minutes.')
toast.info('New version available.')

// With action button
toast('File deleted.', {
  action: {
    label: 'Undo',
    onClick: () => restoreFile(),
  },
})

// Promise
toast.promise(saveData(), {
  loading: 'Saving...',
  success: 'Saved.',
  error: 'Failed to save.',
})

// Dismiss programmatically
const id = toast('Loading...')
toast.dismiss(id)
```

## Tailwind Example

```tsx
{/* In your layout */}
<Toaster
  position="bottom-right"
  theme="light"
  richColors
  closeButton
  className="font-sans"
/>

{/* Trigger from a button */}
<button
  onClick={() => toast.success('Settings saved!', { description: 'Your changes have been applied.' })}
  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
>
  Save settings
</button>
```

## Notes

- `<Toaster>` only needs to be mounted once in the app. Calling `toast()` from any component will display in that single `<Toaster>`.
- Sonner is a peer-level package bundled with this library. The `toast` function is a direct re-export from Sonner.
- For custom toast styling, use the `toastOptions` prop on `<Toaster>` — see [Sonner docs](https://sonner.emilkowal.ski/) for the full API.
