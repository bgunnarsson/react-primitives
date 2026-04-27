# Stack / Flex

A flex layout primitive. Renders a `display: flex` container with shortcut props for direction, alignment, gap, and wrapping. `Flex` is an alias for `Stack`.

## Import

```tsx
import { Stack, Flex } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `'div' \| 'section' \| 'article' \| 'aside' \| 'main' \| 'header' \| 'footer' \| 'nav' \| 'ul' \| 'ol' \| 'li' \| 'span'` | `'div'` | Element to render. |
| `direction` | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'` | — | `flex-direction`. |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch' \| 'baseline'` | — | `align-items`. |
| `justify` | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | — | `justify-content`. |
| `wrap` | `'wrap' \| 'nowrap' \| 'wrap-reverse'` | — | `flex-wrap`. |
| `gap` | `number \| string` | — | CSS gap. Numbers are treated as pixels. |
| `inline` | `boolean` | `false` | Use `inline-flex` instead of `flex`. |

Plus all native HTML attributes for the rendered element.

## Usage

```tsx
<Stack direction="row" align="center" justify="between" gap={12}>
  <Logo />
  <Nav />
</Stack>
```

## Notes

- Inline-styled by design so it works without a CSS layer. Override via `style` or `className`.
- For grid layouts use `Grid` instead.
