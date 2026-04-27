# Alert

A non-interactive status message that communicates important information to the user. Supports composing an icon, title, description, and action buttons.

## Import

```tsx
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertActions,
} from '@bgunnarsson/react-primitives'
```

## Props

### `Alert`

| Prop | Type | Default | Description |
|---|---|---|---|
| `heading` | `React.ReactNode` | — | Shorthand: renders an `AlertTitle` inside the alert. |
| `description` | `React.ReactNode` | — | Shorthand: renders an `AlertDescription` inside the alert. |
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h5'` | The heading element used for `heading`. |
| `role` | `string` | `'alert'` | ARIA role. Use `'status'` for non-urgent messages. |

Extends `React.HTMLAttributes<HTMLDivElement>`.

### `AlertIcon`

Decorative icon container. Sets `aria-hidden="true"` and `data-part="icon"`. Renders `<span>`.

### `AlertTitle`

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h5'` | The heading element to render. |

Sets `data-part="title"`.

### `AlertDescription`

Renders `<p>` with `data-part="description"`.

### `AlertActions`

Container for action buttons. Renders `<div>` with `data-part="actions"`.

## Usage

```tsx
{/* Shorthand */}
<Alert heading="Heads up" description="Something needs your attention." />

{/* Composed with icon and actions */}
<Alert>
  <AlertIcon>⚠️</AlertIcon>
  <AlertTitle>Session expiring</AlertTitle>
  <AlertDescription>You'll be signed out in 5 minutes.</AlertDescription>
  <AlertActions>
    <button type="button">Stay signed in</button>
  </AlertActions>
</Alert>
```

## Tailwind Example

```tsx
<Alert
  role="alert"
  className="grid grid-cols-[auto_1fr_auto] items-start gap-x-3 gap-y-1 rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-900"
>
  <AlertIcon className="row-span-2 text-lg leading-none">⚠️</AlertIcon>
  <AlertTitle as="h4" className="m-0 text-sm font-semibold">
    Session expiring
  </AlertTitle>
  <AlertDescription className="col-start-2 m-0 text-sm opacity-80">
    You'll be signed out in 5 minutes.
  </AlertDescription>
  <AlertActions className="row-span-2">
    <button
      type="button"
      className="rounded-md border border-current px-2.5 py-1 text-xs font-semibold"
    >
      Stay signed in
    </button>
  </AlertActions>
</Alert>
```

## Notes

- `role="alert"` causes screen readers to announce the content immediately. Use `role="status"` for non-urgent messages like success confirmations.
- `AlertIcon` is marked `aria-hidden` — don't put meaningful text inside; describe the alert in the title or description.
- The shorthand `heading`/`description` props and the composed subcomponents are interchangeable; mix them freely.
