# Banner

A persistent, dismissable notification — typically placed at the top of a page or a section. Different from `Alert` (which is a static inline message) and `Toast` (which auto-dismisses and floats).

## Import

```tsx
import {
  Banner,
  BannerIcon,
  BannerTitle,
  BannerDescription,
  BannerActions,
  BannerClose,
} from '@bgunnarsson/react-primitives'
```

## Props

### `Banner`
| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controlled visibility. |
| `defaultOpen` | `boolean` | `true` | Initial visibility. |
| `onOpenChange` | `(open: boolean) => void` | — | Fires when dismissed. |
| `variant` | `'info' \| 'success' \| 'warning' \| 'error' \| string` | — | Mirrored to `data-variant`. |
| `role` | `AriaRole` | `'status'` | Use `'alert'` for high-urgency banners (announced immediately). |

Renders `<section>`. Returns `null` when closed.

### `BannerIcon`
Decorative icon. `aria-hidden`.

### `BannerTitle`
| Prop | Type | Default |
|---|---|---|
| `as` | `'h1'–'h6' \| 'p' \| 'strong'` | `'p'` |

### `BannerDescription`
Renders `<p>`.

### `BannerActions`
Container for action buttons (e.g. "Upgrade", "Learn more"). Renders `<div>`.

### `BannerClose`
Button that dismisses the banner. Defaults to `×` content and `aria-label="Dismiss"`.

## Usage

```tsx
<Banner variant="warning">
  <BannerIcon>⚠️</BannerIcon>
  <BannerDescription>Your trial expires in 3 days.</BannerDescription>
  <BannerActions>
    <Button>Upgrade</Button>
    <BannerClose />
  </BannerActions>
</Banner>
```

## Notes

- For transient confirmations use `Toast`. For inline messages near a form field use `Alert`.
- Set `role="alert"` for urgent / time-sensitive banners so assistive tech announces them immediately.
