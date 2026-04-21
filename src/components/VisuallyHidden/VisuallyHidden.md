# VisuallyHidden

Hides content visually while keeping it available to screen readers. Wraps `@radix-ui/react-visually-hidden`.

## Import

```tsx
import { VisuallyHidden } from '@bgunnarsson/react-primitives'
```

## Usage

```tsx
<button>
  <TrashIcon aria-hidden />
  <VisuallyHidden>Delete item</VisuallyHidden>
</button>
```

## Notes

- Use for icon-only buttons, form labels that are visually represented by placement, or any case where semantic meaning must reach assistive tech without cluttering the UI.
- Do not use `display: none` or `visibility: hidden` for this purpose — those remove the content from the accessibility tree.
