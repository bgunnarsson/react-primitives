# TimePicker

A click-to-pick time selector. Opens a popover with scrollable columns for hours, minutes, and (optionally) AM/PM — no typing required.

## Import

```tsx
import { TimePicker, type TimeValue } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `TimeValue` | — | Controlled time, where `TimeValue = { hours: number; minutes: number }`. |
| `defaultValue` | `TimeValue` | — | Uncontrolled initial time. If omitted, the trigger shows `placeholder` until a value is picked. |
| `onValueChange` | `(value: TimeValue) => void` | — | Called whenever the hours, minutes, or AM/PM selection changes. |
| `step` | `number` | `1` | Minute granularity for the minutes column (e.g. `5`, `15`, `30`). |
| `hour12` | `boolean` | `false` | Render as 12-hour with AM/PM column. |
| `disabled` | `boolean` | `false` | Prevent interaction. |
| `name` | `string` | — | If set, renders a hidden `HH:MM` input so the value submits with enclosing forms. |
| `placeholder` | `string` | `'Pick a time'` | Trigger text shown before a value is picked. |
| `triggerClassName` | `string` | — | Class applied to the popover trigger button. |
| `contentClassName` | `string` | — | Class applied to the popover content (column container). |
| `columnClassName` | `string` | — | Class applied to each column (hours / minutes / period). |
| `itemClassName` | `string` | — | Class applied to each item button. |
| `itemSelectedClassName` | `string` | — | Class appended to the currently selected item in each column. |

Hours are always stored as 24-hour integers (0–23). The `hour12` prop only affects the display and whether an AM/PM column is shown.

## Usage

```tsx
const [time, setTime] = useState<TimeValue>({ hours: 9, minutes: 30 })

<TimePicker value={time} onValueChange={setTime} />
```

### 12-hour with 15-minute step

```tsx
<TimePicker value={time} onValueChange={setTime} hour12 step={15} />
```

### Uncontrolled with placeholder

```tsx
<TimePicker defaultValue={{ hours: 8, minutes: 0 }} step={5} placeholder="Pick a time" />
```

### With Tailwind styling

```tsx
<TimePicker
  value={time}
  onValueChange={setTime}
  triggerClassName="inline-flex min-w-[140px] items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
  contentClassName="flex gap-1 rounded-md border border-gray-200 bg-white p-1 shadow-lg"
  columnClassName="flex h-56 w-16 flex-col gap-1 overflow-y-auto scroll-smooth px-1 py-1"
  itemClassName="flex h-8 shrink-0 items-center justify-center rounded-sm px-2 text-sm text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
  itemSelectedClassName="bg-blue-600 text-white hover:bg-blue-700"
/>
```

## Accessibility

- Each column is a `role="listbox"` with `aria-label` (`Hours`, `Minutes`, `AM or PM`).
- Each item is a `role="option"` button with `aria-selected` reflecting state.
- The trigger is a standard `<button>`; pass `aria-label` if the visible text alone is not descriptive.
- When the popover opens, each column auto-scrolls the currently selected option into view.

## Notes

- Selecting an item only updates its own column — the popover stays open so you can adjust the other columns without reopening.
- When `name` is set, the hidden form value is always serialized as 24-hour `HH:MM` regardless of the `hour12` display setting.
