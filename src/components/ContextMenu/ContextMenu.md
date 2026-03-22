# ContextMenu

A menu that appears on right-click (or long-press on touch devices), anchored to the target element.

## Import

```tsx
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from '@bgunnarsson/react-primitives'
```

## Props

### `ContextMenu` (root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `onOpenChange` | `(open: boolean) => void` | — | Callback when open state changes. |
| `modal` | `boolean` | `true` | Whether focus is trapped inside the menu. |

### `ContextMenuTrigger`

| Prop | Type | Default | Description |
|---|---|---|---|
| `asChild` | `boolean` | `false` | Merge props onto the child element. |
| `disabled` | `boolean` | `false` | Prevents the context menu from opening. |

### `ContextMenuContent`

| Prop | Type | Default | Description |
|---|---|---|---|
| `alignOffset` | `number` | `0` | Offset from alignment edge. |
| `avoidCollisions` | `boolean` | `true` | Reposition to avoid viewport overflow. |

### `ContextMenuItem`

| Prop | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Prevents selection. |
| `onSelect` | `(event: Event) => void` | — | Callback when the item is selected. |
| `inset` | `boolean` | `false` | Adds left padding to align with items that have icons. |

### `ContextMenuCheckboxItem`

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean \| 'indeterminate'` | — | Checked state. |
| `onCheckedChange` | `(checked: boolean) => void` | — | Callback when checked state changes. |

### `ContextMenuRadioGroup` / `ContextMenuRadioItem`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Current value (on group) / item value. |
| `onValueChange` | `(value: string) => void` | — | Callback (on group). |

## Usage

```tsx
<ContextMenu>
  <ContextMenuTrigger>
    <div>Right-click me</div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Edit</ContextMenuItem>
    <ContextMenuItem>Duplicate</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

## Tailwind Example

```tsx
<ContextMenu>
  <ContextMenuTrigger asChild>
    <div className="flex h-32 w-64 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 text-sm text-gray-500 select-none hover:border-gray-400">
      Right-click anywhere here
    </div>
  </ContextMenuTrigger>
  <ContextMenuContent className="min-w-48 overflow-hidden rounded-lg border border-gray-200 bg-white p-1 shadow-lg">
    <ContextMenuLabel className="px-2 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">
      Actions
    </ContextMenuLabel>
    <ContextMenuItem className="flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50">
      Edit
    </ContextMenuItem>
    <ContextMenuItem className="flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100">
      Duplicate
    </ContextMenuItem>
    <ContextMenuSeparator className="my-1 h-px bg-gray-100" />
    <ContextMenuItem className="flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm text-red-600 hover:bg-red-50 focus:bg-red-50">
      Delete
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

## Notes

- The context menu opens at the cursor position on right-click, not relative to the trigger element's bounds.
- Selecting an item closes the menu automatically. Use `onSelect` with `event.preventDefault()` to keep it open.
- Use `ContextMenuSub` + `ContextMenuSubTrigger` + `ContextMenuSubContent` for nested submenus.
