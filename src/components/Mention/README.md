# Mention

A headless `@`-style autocomplete primitive. Detects a trigger character preceded by start-of-string or whitespace, exposes the active query, and inserts a formatted token when an item is picked. Works with any input or textarea — you control the markup.

## Import

```tsx
import { Mention } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `trigger` | `string` | `'@'` | Single character that opens the suggestion list. |
| `value` | `string` | — | Current input value (controlled). |
| `onValueChange` | `(value: string) => void` | — | Fires when the value changes (typing or selection). |
| `items` | `T[]` | — | Suggestions to render. Filter externally based on `query`. |
| `onQueryChange` | `(query: string) => void` | — | Fires when the active query (text after the trigger) changes. |
| `format` | `(item: T) => string` | — | Returns the string inserted into the value when an item is picked. |
| `appendSpace` | `boolean` | `true` | Append a trailing space after insertion. |
| `onSelect` | `(item: T) => void` | — | Fires after an item is inserted. |
| `children` | `(api) => ReactNode` | — | Render prop. |

## Render-prop API

```ts
{
  open: boolean
  query: string
  activeIndex: number
  setActiveIndex: (i: number) => void
  selectItem: (item: T) => void
  close: () => void
  getInputProps(): { ref, value, onChange, onKeyDown, onKeyUp, onClick, onBlur }
  getListProps(): { role: 'listbox', onMouseDown }
  getItemProps({ index, item }): { role: 'option', 'aria-selected', onMouseEnter, onMouseDown, onClick, 'data-active' }
}
```

## Usage

```tsx
const [value, setValue] = useState('')
const [query, setQuery] = useState('')
const items = users.filter((u) => u.username.startsWith(query))

<Mention
  value={value}
  onValueChange={setValue}
  onQueryChange={setQuery}
  items={items}
  format={(u) => `@${u.username}`}
>
  {({ open, activeIndex, getInputProps, getListProps, getItemProps }) => (
    <div className="relative">
      <textarea {...getInputProps()} />
      {open && (
        <ul {...getListProps()}>
          {items.map((u, i) => (
            <li key={u.id} {...getItemProps({ index: i, item: u })}>
              {u.username}
            </li>
          ))}
        </ul>
      )}
    </div>
  )}
</Mention>
```

## Notes

- The trigger only activates when preceded by whitespace or start-of-string. A `@` inside `email@domain` will not open the menu.
- Filtering is your responsibility — the primitive only emits the `query` and renders whatever you pass via `items`.
- `ArrowUp` / `ArrowDown` cycle, `Enter` and `Tab` select, `Escape` closes.
- `onMouseDown` returns `preventDefault` on the list and items so clicks don't blur the input before insertion.
