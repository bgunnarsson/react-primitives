# DatePicker

A single date picker built on `react-day-picker` inside a `Popover`.

## Import

```tsx
import { DatePicker } from '@bgunnarsson/react-primitives'
```

## Setup

Import the react-day-picker stylesheet once in your app entry or layout:

```ts
import 'react-day-picker/style.css'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `Date \| undefined` | — | Controlled selected date. |
| `onValueChange` | `(date: Date \| undefined) => void` | — | Called when the user selects or clears a date. |
| `disabled` | `boolean` | `false` | Disables the trigger button. |
| `placeholder` | `string` | `'Pick a date'` | Trigger label when no date is selected. |
| `triggerClassName` | `string` | — | `className` applied to the trigger button. |
| `contentClassName` | `string` | — | `className` applied to the popover content wrapper. |
| `calendarClassName` | `string` | — | `className` applied to the `DayPicker` component. |

## Usage

```tsx
import { useState } from 'react'
import 'react-day-picker/style.css'

const [date, setDate] = useState<Date | undefined>()

<DatePicker value={date} onValueChange={setDate} />
```

## Tailwind Example

```tsx
<DatePicker
  value={date}
  onValueChange={setDate}
  placeholder="Select date"
  triggerClassName="flex w-48 items-center justify-between rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50 disabled:opacity-50"
  contentClassName="rounded-xl border border-gray-200 bg-white p-3 shadow-lg"
/>
```

## Notes

- The popover closes automatically when a date is selected.
- For date range picking, use `react-day-picker`'s `DayPicker` directly with `mode="range"` inside a `Popover`.
