# DateRangePicker

A two-date range picker built on `react-day-picker` inside a `Popover`.

## Import

```tsx
import { DateRangePicker } from '@bgunnarsson/react-primitives'
import type { DateRange } from '@bgunnarsson/react-primitives'
```

## Setup

Import the react-day-picker stylesheet once in your app entry or layout:

```ts
import 'react-day-picker/style.css'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `DateRange \| undefined` | — | Controlled selected range. |
| `onValueChange` | `(range: DateRange \| undefined) => void` | — | Called when the range changes. |
| `disabled` | `boolean` | `false` | Disables the trigger button. |
| `placeholder` | `string` | `'Pick a date range'` | Trigger label when no range is selected. |
| `numberOfMonths` | `number` | `2` | Number of months shown side by side. |
| `closeOnSelect` | `boolean` | `true` | Close the popover when both `from` and `to` are set. |
| `captionLayout` | `'dropdown' \| 'dropdown-months' \| 'dropdown-years' \| 'label'` | `'dropdown'` | Calendar header layout. `'dropdown'` shows month + year selects. |
| `startMonth` | `Date` | 100 years ago | Earliest navigable month / lower bound of the year dropdown. |
| `endMonth` | `Date` | 10 years ahead | Latest navigable month / upper bound of the year dropdown. |
| `formatRange` | `(range) => string` | — | Custom trigger label formatter. |
| `triggerClassName` | `string` | — | `className` applied to the trigger. |
| `contentClassName` | `string` | — | `className` applied to the popover content. |
| `calendarClassName` | `string` | — | `className` applied to the `DayPicker`. |

## Usage

```tsx
import { useState } from 'react'
import { DateRangePicker, type DateRange } from '@bgunnarsson/react-primitives'
import 'react-day-picker/style.css'

const [range, setRange] = useState<DateRange | undefined>()

<DateRangePicker value={range} onValueChange={setRange} />
```

## Tailwind Example

```tsx
<DateRangePicker
  value={range}
  onValueChange={setRange}
  triggerClassName="flex w-72 items-center justify-between rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50 disabled:opacity-50"
  contentClassName="rounded-xl border border-gray-200 bg-white p-3 shadow-lg"
/>
```

## Notes

- The popover stays open until both `from` and `to` are selected (controlled by `closeOnSelect`).
- Pass a custom `formatRange` to localise the trigger label.
