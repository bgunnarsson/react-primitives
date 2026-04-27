# Box

Polymorphic block-level wrapper. Use it as the unstyled base of any custom component when you want to keep the markup semantic without committing to a specific tag.

## Import

```tsx
import { Box } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `'div' \| 'span' \| 'section' \| 'article' \| 'aside' \| 'main' \| 'header' \| 'footer' \| 'nav' \| 'figure' \| 'figcaption' \| 'address' \| 'pre'` | `'div'` | Element to render. |

Plus all native HTML attributes for the rendered element.

## Usage

```tsx
<Box as="section" aria-label="Promo" className="bg-slate-50 p-6">
  {children}
</Box>
```

## Notes

- For flex layouts prefer `Stack`/`Flex`. For typographic content prefer `Text`.
