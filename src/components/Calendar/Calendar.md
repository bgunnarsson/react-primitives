# Calendar

Standalone date-picker calendar for inline use. Wraps [`react-day-picker`](https://daypicker.dev) — the same library `DatePicker` uses, but exposed without the Popover trigger so you can embed the calendar directly in forms, sidebars, or modals.

## Import

```tsx
import { Calendar } from '@bgunnarsson/react-primitives'
```

## Usage

### Single date

```tsx
const [date, setDate] = useState<Date | undefined>()

<Calendar mode="single" selected={date} onSelect={setDate} />
```

### Date range

```tsx
const [range, setRange] = useState<{ from?: Date; to?: Date } | undefined>()

<Calendar mode="range" selected={range} onSelect={setRange} numberOfMonths={2} />
```

### Multiple dates

```tsx
<Calendar mode="multiple" selected={days} onSelect={setDays} />
```

## Notes

- Accepts all `react-day-picker` props — `disabled`, `fromDate`, `toDate`, `fromYear`, `toYear`, `locale`, `modifiers`, `modifiersClassNames`, etc.
- When you need a compact input with a popover, reach for `DatePicker` instead.
- Style the calendar via the `className` and `classNames` props. Import `react-day-picker/style.css` for the default look, or author your own.
