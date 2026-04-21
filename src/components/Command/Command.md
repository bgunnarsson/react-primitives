# Command

A command palette primitive (⌘K / Ctrl+K pattern) built on [`cmdk`](https://cmdk.paco.me). Provides fuzzy filtering, keyboard navigation, grouping, and optional dialog mode. Use it standalone for inline search UIs or wrap it in `CommandDialog` for modal palettes.

## Import

```tsx
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
  CommandEmpty,
  CommandSeparator,
  CommandLoading,
} from '@bgunnarsson/react-primitives'
```

## Parts

| Part | Description |
|---|---|
| `Command` | Root container — provides state and filtering. |
| `CommandDialog` | Same as `Command`, but rendered inside a modal dialog. Accepts `open` / `onOpenChange`. |
| `CommandInput` | Search input. `value` is auto-managed unless you control it. |
| `CommandList` | Scrollable list region. |
| `CommandItem` | Single selectable item. Receives `onSelect`. |
| `CommandGroup` | Grouping wrapper with an optional `heading`. |
| `CommandSeparator` | Visual divider between groups. |
| `CommandEmpty` | Shown when no items match the query. |
| `CommandLoading` | Shown while async data loads. |

## Usage

```tsx
<Command>
  <CommandInput placeholder="Type a command…" />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem onSelect={onNew}>New file</CommandItem>
      <CommandItem onSelect={onOpen}>Open recent</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

### Dialog mode

```tsx
<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command…" />
  <CommandList>
    <CommandItem onSelect={run}>Run task</CommandItem>
  </CommandList>
</CommandDialog>
```

## Notes

- For a Combobox-style UI (input + popover + tokens), reach for the existing `Combobox` component. Use `Command` when you want a full-surface palette.
- Keyboard: `↑/↓` navigate, `Enter` selects, `Esc` closes (in dialog mode).
- Filtering uses cmdk's default fuzzy filter — override via `Command`'s `filter` prop, or use `commandDefaultFilter` as a base.
