# Combobox

A searchable dropdown select built on cmdk + Popover.

## Import

```tsx
import {
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxCommand,
  ComboboxInput,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from '@bgunnarsson/react-primitives'
```

## Props

### `Combobox`
| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controlled open state. |
| `onOpenChange` | `(open: boolean) => void` | — | Called when open state changes. |

### `ComboboxContent`
Extends `PopoverContent` props. Defaults `align` to `'start'`.

### `ComboboxInput`
`placeholder`, `value`, `onValueChange` — same as `CommandInput`.

### `ComboboxItem`
`value`, `onSelect`, `disabled` — same as `CommandItem`.

## Usage

```tsx
const [open, setOpen] = useState(false)
const [value, setValue] = useState('')

<Combobox open={open} onOpenChange={setOpen}>
  <ComboboxTrigger>{value || 'Select…'}</ComboboxTrigger>
  <ComboboxContent>
    <ComboboxCommand>
      <ComboboxInput placeholder="Search…" />
      <ComboboxList>
        <ComboboxEmpty>No results.</ComboboxEmpty>
        <ComboboxItem value="apple" onSelect={(v) => { setValue(v); setOpen(false) }}>Apple</ComboboxItem>
        <ComboboxItem value="banana" onSelect={(v) => { setValue(v); setOpen(false) }}>Banana</ComboboxItem>
      </ComboboxList>
    </ComboboxCommand>
  </ComboboxContent>
</Combobox>
```

## Tailwind Example

```tsx
<Combobox open={open} onOpenChange={setOpen}>
  <ComboboxTrigger className="flex w-48 items-center justify-between rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50">
    {value || 'Select fruit…'}
    <span className="text-gray-400">↕</span>
  </ComboboxTrigger>
  <ComboboxContent className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
    <ComboboxCommand>
      <ComboboxInput
        placeholder="Search…"
        className="w-full border-b border-gray-200 px-4 py-2.5 text-sm outline-none"
      />
      <ComboboxList className="max-h-60 overflow-y-auto p-1">
        <ComboboxEmpty className="py-4 text-center text-sm text-gray-500">No results.</ComboboxEmpty>
        {fruits.map((fruit) => (
          <ComboboxItem
            key={fruit}
            value={fruit}
            onSelect={(v) => { setValue(v); setOpen(false) }}
            className="flex cursor-pointer items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100 aria-selected:bg-gray-100"
          >
            {fruit}
          </ComboboxItem>
        ))}
      </ComboboxList>
    </ComboboxCommand>
  </ComboboxContent>
</Combobox>
```
