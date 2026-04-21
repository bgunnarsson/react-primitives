# TimePicker

A single-input time picker with keyboard stepping (Arrow Up/Down), 12/24-hour formats, and typed entry with AM/PM parsing.

## Import

```tsx
import { TimePicker, type TimeValue } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `TimeValue` | — | Controlled time, where `TimeValue = { hours: number; minutes: number }`. |
| `defaultValue` | `TimeValue` | `{ hours: 0, minutes: 0 }` | Uncontrolled initial time. |
| `onValueChange` | `(value: TimeValue) => void` | — | Called on valid changes. |
| `step` | `number` | `1` | Minutes added/removed by Arrow Up/Down. |
| `hour12` | `boolean` | `false` | Render as 12-hour with AM/PM. |
| `disabled` | `boolean` | `false` | Prevent interaction. |

## Usage

```tsx
const [time, setTime] = useState<TimeValue>({ hours: 9, minutes: 30 })

<TimePicker value={time} onValueChange={setTime} />
```

### 12-hour with 5-minute step

```tsx
<TimePicker value={time} onValueChange={setTime} hour12 step={5} />
```

## Keyboard

| Key | Behavior |
|---|---|
| `↑` | Add `step` minutes (wraps past 23:59). |
| `↓` | Subtract `step` minutes. |
| `Enter` | Commit current draft and blur the input. |
| Typed entry | Free-form `HH:MM` or `HH:MM AM/PM` (parsed on blur). |

## Notes

- Hours are stored as 24-hour integers (0–23) regardless of the `hour12` display setting.
- Typed entries that can't be parsed are silently reverted on blur — the last valid value is preserved.
