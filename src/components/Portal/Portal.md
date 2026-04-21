# Portal

Renders its children into a different part of the DOM tree (defaults to `document.body`). Wraps `@radix-ui/react-portal`.

## Import

```tsx
import { Portal } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `container` | `HTMLElement \| null` | `document.body` | Target DOM node to render into. |
| `asChild` | `boolean` | `false` | Merge props onto the child element instead of rendering a wrapper. |

## Usage

```tsx
<Portal>
  <div className="fixed bottom-4 right-4">Toast</div>
</Portal>
```

## Notes

- Dialog, DropdownMenu, Popover, and similar overlay primitives already portal internally — reach for this when you need a portal outside those components.
