# FocusScope

A focus management primitive. Traps Tab/Shift+Tab inside a region, auto-focuses the first focusable element on mount, and restores focus to the previously active element on unmount.

Use it for custom popovers, inline overlays, or any component that needs a focus trap without a full `Dialog`.

## Import

```tsx
import { FocusScope } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `trapped` | `boolean` | `true` | Trap Tab inside the scope. |
| `autoFocus` | `boolean` | `true` | Focus the first focusable element on mount (or the container itself if none). |
| `restoreFocus` | `boolean` | `true` | Return focus to the previously active element on unmount. |
| `loop` | `boolean` | `true` | Wrap focus from last → first (and Shift+Tab from first → last). When `false`, Tab is blocked at the boundary. |

Plus all native `<div>` attributes.

## Usage

```tsx
{open && (
  <FocusScope>
    <input />
    <button onClick={close}>Close</button>
  </FocusScope>
)}
```

## Notes

- The container is rendered as a `<div>`. Tab cycling is implemented via `keydown` on the container — make sure focus stays inside (which the trap enforces).
- `Dialog`, `Popover`, etc. already include focus trapping. Reach for `FocusScope` only when those don't fit.
- On unmount, focus restoration is skipped if the previously focused element was removed from the DOM.
