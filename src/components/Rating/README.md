# Rating

An accessible star / score rating input. Built on native radio inputs inside a `radiogroup`, so keyboard navigation and screen-reader announcements work out of the box.

## Import

```tsx
import { Rating } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | — | Controlled value (1-based). |
| `defaultValue` | `number` | `0` | Uncontrolled initial value. |
| `onValueChange` | `(value: number) => void` | — | Fired when the user picks a value. |
| `max` | `number` | `5` | Number of steps. |
| `disabled` | `boolean` | `false` | Prevent interaction. |
| `readOnly` | `boolean` | `false` | Display-only (still in the tab order, cannot change). |
| `name` | `string` | — | Form field name. |
| `renderItem` | `({ index, filled, active }) => ReactNode` | — | Custom icon renderer. Defaults to `★` / `☆`. |

## Usage

```tsx
const [value, setValue] = useState(3)

<Rating value={value} onValueChange={setValue} aria-label="Product rating" />
```

### Custom icon

```tsx
<Rating
  value={value}
  onValueChange={setValue}
  renderItem={({ filled }) => <HeartIcon filled={filled} />}
/>
```

## Styling

Each slot exposes `[data-filled]` on filled stars and `[data-active]` on the currently-selected star — use those attribute selectors to color filled vs unfilled states.

```css
.rating [data-filled] { color: gold; }
.rating label:not([data-filled]) { color: lightgray; }
```

## Notes

- The native radios are visually hidden but remain focusable — arrow keys and `Tab`/`Space` work as expected.
- `onMouseEnter` on each label drives a preview; the visual fill follows hover when hovering.
