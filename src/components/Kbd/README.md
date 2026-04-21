# Kbd

Semantic wrapper for the `<kbd>` element, used to represent keyboard input or shortcut hints.

## Import

```tsx
import { Kbd } from '@bgunnarsson/react-primitives'
```

## Usage

```tsx
<p>
  Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette.
</p>
```

## Notes

- Rendered as a native `<kbd>`. Accepts all `HTMLAttributes<HTMLElement>`.
- Screen readers announce `<kbd>` contents as keyboard input, so avoid wrapping icons or non-key text in it.
