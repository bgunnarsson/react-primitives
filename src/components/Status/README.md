# Status

A small status indicator (online/offline/busy/away/etc.). Renders a `role="status"` element with a styleable indicator dot and optional label.

## Import

```tsx
import { Status, StatusIndicator, StatusLabel } from '@bgunnarsson/react-primitives'
```

## Props

### `Status`
| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `'online' \| 'offline' \| 'busy' \| 'away' \| 'idle' \| string` | — | Mirrored to `data-status` for styling. |
| `label` | `string` | — | Accessible name. Defaults to `value` if `string`. |
| `showLabel` | `boolean` | `false` | Render the label visibly via `<StatusLabel>` (when no children supplied). |

When children are not provided, `<Status>` auto-renders `<StatusIndicator />` (and `<StatusLabel>` when `showLabel` is `true`). When children are supplied they fully replace the defaults — compose `<StatusIndicator />` and `<StatusLabel>` yourself. `aria-label` is set automatically when there's no visible text.

### `StatusIndicator`
The decorative dot. `aria-hidden`. Inherits styling cues from `[data-status]` on the parent.

### `StatusLabel`
Visible text label.

## Usage

```tsx
{/* Auto-rendered indicator + label */}
<Status value="online" showLabel />

{/* Custom composition */}
<Status value="busy" label="In a meeting">
  <StatusIndicator />
  <StatusLabel>Busy</StatusLabel>
</Status>

{/* Indicator only — label via aria */}
<Status value="online" label="User online">
  <StatusIndicator />
</Status>
```

## Notes

- `value` is open-ended — pass any string to drive `[data-status]` styles.
- Use `Badge` for counts and labels; use `Status` for live state.
