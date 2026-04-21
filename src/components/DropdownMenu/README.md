# DropdownMenu

A floating menu triggered by a button click, with support for nested submenus and checkbox/radio items.

## Import

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '@bgunnarsson/react-primitives'
```

## Props

### `DropdownMenu` (root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controlled open state. |
| `onOpenChange` | `(open: boolean) => void` | — | Callback when open state changes. |
| `modal` | `boolean` | `true` | Whether focus is trapped. |

### `DropdownMenuTrigger`

| Prop | Type | Default | Description |
|---|---|---|---|
| `asChild` | `boolean` | `false` | Merge props onto the child element. |

### `DropdownMenuContent`

| Prop | Type | Default | Description |
|---|---|---|---|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Preferred opening side. |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Alignment along the trigger. |
| `sideOffset` | `number` | `4` | Gap in px between trigger and content. |

### `DropdownMenuItem`

| Prop | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Prevents selection. |
| `onSelect` | `(event: Event) => void` | — | Callback when selected. |
| `inset` | `boolean` | `false` | Adds left padding to align with icon items. |

## Usage

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button>Open menu</button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Tailwind Example

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400">
      Options ▾
    </button>
  </DropdownMenuTrigger>
  <DropdownMenuContent
    align="end"
    className="z-50 min-w-48 overflow-hidden rounded-lg border border-gray-200 bg-white p-1 shadow-lg"
  >
    <DropdownMenuLabel className="px-2 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">
      My Account
    </DropdownMenuLabel>
    <DropdownMenuSeparator className="my-1 h-px bg-gray-100" />
    <DropdownMenuItem className="flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50">
      Profile
    </DropdownMenuItem>
    <DropdownMenuItem className="flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100">
      Settings
    </DropdownMenuItem>
    <DropdownMenuSeparator className="my-1 h-px bg-gray-100" />
    <DropdownMenuItem className="flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm text-red-600 hover:bg-red-50 focus:bg-red-50">
      Log out
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Notes

- Selecting an item closes the menu automatically. Call `event.preventDefault()` inside `onSelect` to keep it open.
- Use `DropdownMenuSub` + `DropdownMenuSubTrigger` + `DropdownMenuSubContent` for nested submenus.
- Use `DropdownMenuCheckboxItem` and `DropdownMenuRadioGroup` / `DropdownMenuRadioItem` for stateful items.
