# DirectionProvider

Declares the writing direction (`ltr` / `rtl`) for all Radix-based components rendered underneath. Wraps `@radix-ui/react-direction`.

## Import

```tsx
import { DirectionProvider, useDirection } from '@bgunnarsson/react-primitives'
```

## Usage

```tsx
<DirectionProvider dir="rtl">
  <App />
</DirectionProvider>
```

## `useDirection`

Reads the current direction inside a component rendered beneath a `DirectionProvider`. Returns `'ltr'` by default when no provider is present.

```tsx
const direction = useDirection()
```

## Notes

- Radix primitives (DropdownMenu, Slider, Select, etc.) consult this provider to flip keyboard navigation and positioning correctly.
- Set `dir="rtl"` on the HTML `<html>` element as well so native layout and CSS logical properties respond.
