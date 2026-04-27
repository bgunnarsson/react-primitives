# Mark

Highlighted text. Two modes:

1. Wrap children directly in `<mark>` (the default).
2. Pass `text` + `query` and have matching substrings wrapped in `<mark>` automatically — useful for search results.

## Import

```tsx
import { Mark } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `text` | `string` | — | Text to scan for matches. When set, `<mark>` wraps the rendered span. |
| `query` | `string \| string[]` | — | Substring(s) to highlight inside `text`. |
| `caseSensitive` | `boolean` | `false` | |
| `highlight` | `(match, index) => ReactNode` | — | Custom renderer for each match. Defaults to `<mark>`. |

If neither `text` nor `query` is provided, renders `<mark>` around `children`.

## Usage

```tsx
{/* Direct wrap */}
<Mark>highlighted phrase</Mark>

{/* Search highlighting */}
<Mark text="The quick brown fox" query="quick" />

{/* Multiple terms */}
<Mark text="React and Vue" query={['React', 'Vue']} />

{/* Custom renderer */}
<Mark
  text="Custom highlight"
  query="Custom"
  highlight={(m) => <strong>{m}</strong>}
/>
```

## Notes

- Query strings are escaped before being compiled to a RegExp, so search input is safe to pass directly.
- Empty / whitespace queries fall through to the unhighlighted text.
