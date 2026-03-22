# Dialog

A modal dialog that renders on top of the page and traps focus until dismissed.

## Import

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@bgunnarsson/react-primitives'
```

## Props

### `Dialog` (root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controlled open state. |
| `onOpenChange` | `(open: boolean) => void` | — | Callback when open state changes. |
| `defaultOpen` | `boolean` | `false` | Uncontrolled initial open state. |

### `DialogContent`

Portal and Overlay are composed internally. Extends `React.ComponentPropsWithoutRef`.

### `DialogTitle`

Extends `React.HTMLAttributes<HTMLHeadingElement>`.

### `DialogDescription`

Extends `React.HTMLAttributes<HTMLParagraphElement>`.

### `DialogClose`

| Prop | Type | Default | Description |
|---|---|---|---|
| `asChild` | `boolean` | `false` | Merge props onto the child element. |

## Usage

Use controlled state to open the dialog from any trigger in your app — the trigger does not need to be nested inside `Dialog`.

```tsx
const [open, setOpen] = useState(false)

<button onClick={() => setOpen(true)}>Open dialog</button>

<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogTitle>Edit profile</DialogTitle>
    <DialogDescription>Make changes to your profile here.</DialogDescription>
    <DialogClose>Close</DialogClose>
  </DialogContent>
</Dialog>
```

## Tailwind Example

```tsx
const [open, setOpen] = useState(false)

<button
  onClick={() => setOpen(true)}
  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
>
  Edit profile
</button>

<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent className="fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-2xl focus:outline-none">
    <DialogTitle className="text-lg font-semibold text-gray-900">Edit profile</DialogTitle>
    <DialogDescription className="mt-1 text-sm text-gray-500">
      Update your display name and email address.
    </DialogDescription>
    <div className="mt-5 space-y-4">
      <input
        placeholder="Display name"
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="Email address"
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
    <div className="mt-6 flex justify-end gap-3">
      <DialogClose className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
        Cancel
      </DialogClose>
      <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
        Save changes
      </button>
    </div>
  </DialogContent>
</Dialog>
```

## Controlled example (with Zustand)

```tsx
const open = useUiStore((s) => s.dialogOpen)
const setOpen = useUiStore((s) => s.setDialogOpen)

<Dialog open={open} onOpenChange={setOpen}>
  ...
</Dialog>
```

## Notes

- `DialogContent` automatically renders a Portal and Overlay — no need to add them manually for standard use.
- `DialogTitle` and `DialogDescription` are required for accessibility (screen reader announcements). If you omit them visually, use `className="sr-only"`.
- Press `Escape` or click the overlay to close the dialog by default.
