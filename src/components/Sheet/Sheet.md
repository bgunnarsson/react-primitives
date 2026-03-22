# Sheet

A sliding panel that enters from any edge of the screen. Built on top of Radix Dialog.

## Import

```tsx
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@bgunnarsson/react-primitives'
```

## Props

### `Sheet` (root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controlled open state. |
| `onOpenChange` | `(open: boolean) => void` | — | Callback when open state changes. |
| `defaultOpen` | `boolean` | `false` | Uncontrolled initial open state. |

### `SheetContent`

| Prop | Type | Default | Description |
|---|---|---|---|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` | Which edge the sheet slides in from. |

Portal and Overlay are composed internally.

### `SheetTitle` / `SheetDescription` / `SheetClose`

Standard dialog parts. `SheetClose` closes the sheet on click.

## Usage

Use controlled state to open the sheet from any trigger in your app — the trigger does not need to be nested inside `Sheet`.

```tsx
const [open, setOpen] = useState(false)

<button onClick={() => setOpen(true)}>Open menu</button>

<Sheet open={open} onOpenChange={setOpen}>
  <SheetContent side="right">
    <SheetTitle>Navigation</SheetTitle>
    <SheetDescription>Site navigation links.</SheetDescription>
    <SheetClose>Close</SheetClose>
  </SheetContent>
</Sheet>
```

## Tailwind Example

```tsx
const [open, setOpen] = useState(false)

<button
  onClick={() => setOpen(true)}
  className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
>
  Open sidebar
</button>

<Sheet open={open} onOpenChange={setOpen}>
  <SheetContent
    side="right"
    className="fixed right-0 top-0 flex h-full w-80 flex-col bg-white shadow-2xl outline-none"
  >
    <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
      <SheetTitle className="text-base font-semibold text-gray-900">Settings</SheetTitle>
      <SheetClose className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
        ✕
      </SheetClose>
    </div>
    <div className="flex-1 overflow-y-auto px-5 py-4">
      <SheetDescription className="mb-4 text-sm text-gray-500">
        Manage your account settings.
      </SheetDescription>
    </div>
  </SheetContent>
</Sheet>
```

## Notes

- The `side` prop sets a `data-side` attribute on the content element, which you can use in CSS to animate slide-in direction.
- Use `data-[state=open]:` and `data-[state=closed]:` Tailwind variants for enter/exit animations.
- For a bottom sheet with drag-to-dismiss, use `Drawer` instead.
