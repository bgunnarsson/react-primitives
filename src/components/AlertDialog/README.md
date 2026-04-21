# AlertDialog

A modal dialog that interrupts the user to confirm a destructive or irreversible action.

## Import

```tsx
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '@bgunnarsson/react-primitives'
```

## Props

### `AlertDialog` (root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controlled open state. |
| `onOpenChange` | `(open: boolean) => void` | — | Callback when open state changes. |
| `defaultOpen` | `boolean` | `false` | Uncontrolled initial open state. |

### `AlertDialogContent`

Extends `React.ComponentPropsWithoutRef`. Portal and Overlay are composed internally — no need to add them manually.

### `AlertDialogTitle`

Extends `React.HTMLAttributes<HTMLHeadingElement>`.

### `AlertDialogDescription`

Extends `React.HTMLAttributes<HTMLParagraphElement>`.

### `AlertDialogAction`

Extends `React.ButtonHTMLAttributes<HTMLButtonElement>`. Closes the dialog on click.

### `AlertDialogCancel`

Extends `React.ButtonHTMLAttributes<HTMLButtonElement>`. Closes the dialog on click.

## Usage

Use controlled state to open the dialog from any trigger in your app — the trigger does not need to be nested inside `AlertDialog`.

```tsx
const [open, setOpen] = useState(false)

<button onClick={() => setOpen(true)}>Delete item</button>

<AlertDialog open={open} onOpenChange={setOpen}>
  <AlertDialogContent>
    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
    <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    <AlertDialogCancel>Cancel</AlertDialogCancel>
    <AlertDialogAction>Delete</AlertDialogAction>
  </AlertDialogContent>
</AlertDialog>
```

## Tailwind Example

```tsx
const [open, setOpen] = useState(false)

<button
  onClick={() => setOpen(true)}
  className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
>
  Delete account
</button>

<AlertDialog open={open} onOpenChange={setOpen}>
  <AlertDialogContent className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-xl">
    <AlertDialogTitle className="text-lg font-semibold text-gray-900">
      Delete account
    </AlertDialogTitle>
    <AlertDialogDescription className="mt-2 text-sm text-gray-600">
      This will permanently delete your account and all associated data. This action cannot be undone.
    </AlertDialogDescription>
    <div className="mt-6 flex justify-end gap-3">
      <AlertDialogCancel className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
        Cancel
      </AlertDialogCancel>
      <AlertDialogAction className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
        Delete
      </AlertDialogAction>
    </div>
  </AlertDialogContent>
</AlertDialog>
```

## Notes

- `AlertDialogContent` automatically renders inside a Portal and includes an Overlay — you do not need to add `AlertDialogPortal` or `AlertDialogOverlay` manually in most cases.
- Unlike `Dialog`, pressing Escape or clicking the overlay does **not** close an `AlertDialog` by default, forcing the user to make an explicit choice.
- Use `open` + `onOpenChange` to integrate with Zustand or other state managers.
