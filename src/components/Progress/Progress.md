# Progress

A horizontal progress bar that displays completion status from 0 to 100.

## Import

```tsx
import { Progress } from '@bgunnarsson/react-primitives'
```

## Props

### `Progress`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number \| null` | `null` | Current progress value (0–100). `null` shows indeterminate state. |
| `max` | `number` | `100` | Maximum value. |

Extends `React.ComponentPropsWithoutRef`.

## Usage

```tsx
<Progress value={60} />
```

## Tailwind Example

```tsx
{/* Standard progress bar */}
<Progress
  value={60}
  className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200"
/>
{/* Note: the inner indicator uses an inline translateX transform. Style the track via className */}

{/* Styled with custom track and indicator using data attributes */}
<div className="space-y-2">
  <div className="flex justify-between text-sm text-gray-600">
    <span>Uploading...</span>
    <span>60%</span>
  </div>
  <Progress
    value={60}
    className="relative h-3 w-full overflow-hidden rounded-full bg-gray-100 [&>div]:h-full [&>div]:rounded-full [&>div]:bg-blue-600 [&>div]:transition-transform [&>div]:duration-500"
  />
</div>

{/* Multiple progress bars */}
<div className="space-y-3">
  {[
    { label: 'HTML', value: 90, color: 'bg-orange-500' },
    { label: 'CSS', value: 80, color: 'bg-blue-500' },
    { label: 'JavaScript', value: 70, color: 'bg-yellow-500' },
  ].map(({ label, value, color }) => (
    <div key={label} className="space-y-1">
      <div className="flex justify-between text-xs text-gray-600">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <Progress
        value={value}
        className={`relative h-2 w-full overflow-hidden rounded-full bg-gray-100 [&>div]:h-full [&>div]:${color} [&>div]:rounded-full [&>div]:transition-transform`}
      />
    </div>
  ))}
</div>
```

## Notes

- The indicator element inside `Progress` uses an inline `transform: translateX(-${100 - value}%)` style to animate position. Target it with `[&>div]` or a child selector in Tailwind.
- Set `value={null}` for an indeterminate state (e.g. while loading when progress is unknown).
- The component sets `role="progressbar"`, `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` automatically.
