# Drawer

A bottom sheet that can be dragged to dismiss. Built on Vaul.

## Import

```tsx
import {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
  DrawerHandle,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from '@bgunnarsson/react-primitives'
```

## Props

### `Drawer` (root — `DrawerRoot` from Vaul)

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controlled open state. |
| `onOpenChange` | `(open: boolean) => void` | — | Callback when open state changes. |
| `defaultOpen` | `boolean` | `false` | Uncontrolled initial open state. |
| `dismissible` | `boolean` | `true` | Allow dismissing by dragging or clicking the overlay. |
| `snapPoints` | `(number \| string)[]` | — | Snap positions as fractions (0–1) or pixel strings. |
| `modal` | `boolean` | `true` | Whether the drawer is modal (blocks background interaction). |

### `DrawerPortal`

Teleports the overlay and content to `document.body`, preventing parent CSS (`overflow: hidden`, `z-index`, `transform`) from clipping the drawer.

### `DrawerContent`

Extends Vaul's content props. Must be rendered inside `DrawerPortal`.

### `DrawerHandle`

A draggable handle indicator — render at the top of `DrawerContent`.

### `DrawerTitle` / `DrawerDescription` / `DrawerClose`

Standard semantic parts. `DrawerClose` closes the drawer on click.

## Usage

Use controlled state to open the drawer from any trigger in your app — the trigger does not need to be nested inside `Drawer`.

```tsx
const [open, setOpen] = useState(false)

<button onClick={() => setOpen(true)}>Open drawer</button>

<Drawer open={open} onOpenChange={setOpen}>
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHandle />
      <DrawerTitle>Options</DrawerTitle>
      <DrawerDescription>Select an action below.</DrawerDescription>
      <DrawerClose>Close</DrawerClose>
    </DrawerContent>
  </DrawerPortal>
</Drawer>
```

## Tailwind Example

```tsx
const [open, setOpen] = useState(false)

<button
  onClick={() => setOpen(true)}
  className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
>
  Open drawer
</button>

<Drawer open={open} onOpenChange={setOpen}>
  <DrawerPortal>
    <DrawerOverlay className="fixed inset-0 bg-black/50" />
    <DrawerContent className="fixed bottom-0 left-0 right-0 flex flex-col rounded-t-2xl bg-white shadow-2xl outline-none">
      <DrawerHandle className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-gray-300" />
      <div className="px-6 pb-8 pt-5">
        <DrawerTitle className="text-lg font-semibold text-gray-900">Options</DrawerTitle>
        <DrawerDescription className="mt-1 text-sm text-gray-500">
          Choose an action to continue.
        </DrawerDescription>
        <div className="mt-6 space-y-2">
          <button className="w-full rounded-lg border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-50">
            Edit
          </button>
          <button className="w-full rounded-lg border border-red-100 px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-red-50">
            Delete
          </button>
        </div>
        <DrawerClose asChild>
          <button className="mt-4 w-full rounded-lg bg-gray-100 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-200">
            Cancel
          </button>
        </DrawerClose>
      </div>
    </DrawerContent>
  </DrawerPortal>
</Drawer>
```

## Notes

- Drawer is built on [Vaul](https://github.com/emilkowalski/vaul). It is a separate package (`vaul`) bundled with this library.
- `DrawerPortal` is required — wrap `DrawerOverlay` and `DrawerContent` inside it to ensure the drawer renders above all other content.
- On desktop, the drawer still appears from the bottom. Use `Sheet` for directional panels (left/right/top).
- `DrawerHandle` is a visual indicator only — the entire content area is draggable by default.
- Use `snapPoints` for multi-step drawers that can snap to partial heights.
