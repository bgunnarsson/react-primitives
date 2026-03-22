# Text

A polymorphic text component that renders any heading or inline text element.

## Import

```tsx
import { Text } from '@bgunnarsson/react-primitives'
```

## Props

### `Text`

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `'p' \| 'span' \| 'div' \| 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'p'` | The HTML element to render. |
| `children` | `React.ReactNode` | — | Text content. |

Extends the HTML attributes of the rendered element.

## Usage

```tsx
<Text as="h1">Page title</Text>
<Text as="p">Body paragraph text.</Text>
<Text as="span">Inline text</Text>
```

## Tailwind Example

```tsx
{/* Page heading */}
<Text as="h1" className="text-3xl font-bold tracking-tight text-gray-900">
  Welcome back
</Text>

{/* Section heading */}
<Text as="h2" className="text-xl font-semibold text-gray-800">
  Recent activity
</Text>

{/* Body paragraph */}
<Text as="p" className="text-base leading-relaxed text-gray-600">
  This is a paragraph of body text with comfortable line height for reading.
</Text>

{/* Caption / helper text */}
<Text as="span" className="text-xs text-gray-400">
  Last updated 2 hours ago
</Text>

{/* Large display text */}
<Text as="h1" className="text-6xl font-black tracking-tighter text-gray-900">
  42
</Text>
<Text as="p" className="mt-1 text-lg text-gray-500">
  Tasks completed this week
</Text>
```

## Notes

- `Text` is a thin semantic wrapper. For cases where you don't need the polymorphic `as` prop, using a plain HTML element is equally valid.
- Always use the semantically correct heading level (`h1`–`h6`) for document structure, regardless of the visual size you apply via Tailwind.
