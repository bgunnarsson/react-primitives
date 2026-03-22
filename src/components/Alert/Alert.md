# Alert

A non-interactive status message that communicates important information to the user.

## Import

```tsx
import { Alert, AlertTitle, AlertDescription } from '@bgunnarsson/react-primitives'
```

## Props

### `Alert`

| Prop | Type | Default | Description |
|---|---|---|---|
| `heading` | `React.ReactNode` | — | Renders an `AlertTitle` inside the alert. |
| `description` | `React.ReactNode` | — | Renders an `AlertDescription` inside the alert. |
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h5'` | The heading element used for `heading`. |
| `role` | `string` | `'alert'` | ARIA role. Use `'status'` for non-urgent messages. |

Extends `React.HTMLAttributes<HTMLDivElement>`.

### `AlertTitle`

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h5'` | The heading element to render. |

Extends `React.HTMLAttributes<HTMLHeadingElement>`.

### `AlertDescription`

Extends `React.HTMLAttributes<HTMLParagraphElement>`. No additional props.

## Usage

```tsx
<Alert>
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>Something needs your attention.</AlertDescription>
</Alert>
```

## Tailwind Example

```tsx
{/* Info alert */}
<Alert className="flex gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4">
  <AlertTitle as="h4" className="text-sm font-semibold text-blue-800">
    Heads up
  </AlertTitle>
  <AlertDescription className="text-sm text-blue-700">
    Your free trial expires in 3 days.
  </AlertDescription>
</Alert>

{/* Destructive alert */}
<Alert role="alert" className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
  <AlertTitle as="h4" className="text-sm font-semibold text-red-800">
    Error
  </AlertTitle>
  <AlertDescription className="text-sm text-red-700">
    Failed to save changes. Please try again.
  </AlertDescription>
</Alert>
```

## Notes

- `role="alert"` causes screen readers to announce the content immediately. Use `role="status"` for non-urgent messages like success confirmations.
- `AlertTitle` renders as `<h5>` by default. Use the `as` prop to match the correct heading hierarchy of your page.
