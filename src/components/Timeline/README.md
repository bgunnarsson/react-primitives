# Timeline

A semantic chronological list (`<ol>`) for activity feeds, status histories, and changelogs. Different from `Stepper`, which represents a sequential process — Timeline is for events that have already happened (or that you're tracking over time).

## Import

```tsx
import {
  Timeline,
  TimelineItem,
  TimelineIndicator,
  TimelineConnector,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
} from '@bgunnarsson/react-primitives'
```

## Props

### `Timeline`
| Prop | Type | Default |
|---|---|---|
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` |

Renders `<ol data-orientation>`.

### `TimelineItem`
| Prop | Type | Default |
|---|---|---|
| `state` | `'past' \| 'current' \| 'future' \| 'default'` | `'default'` |

Sets `data-state` for styling. Renders `<li>`.

### `TimelineIndicator`
The dot/marker. Inherits `data-state` from the parent item.

### `TimelineConnector`
The line between indicators. Inherits `data-state` and `data-orientation`.

### `TimelineContent`
Container for the item's body. Renders `<div>`.

### `TimelineTitle`
| Prop | Type | Default |
|---|---|---|
| `as` | `'h1'–'h6' \| 'p'` | `'p'` |

### `TimelineDescription`
Renders `<p>`.

### `TimelineTime`
Renders `<time>`. Pass `dateTime` for machine-readable timestamps.

## Usage

```tsx
<Timeline>
  <TimelineItem state="past">
    <TimelineIndicator />
    <TimelineConnector />
    <TimelineContent>
      <TimelineTitle as="h4">Order placed</TimelineTitle>
      <TimelineTime dateTime="2026-04-24T09:12:00">Apr 24, 09:12</TimelineTime>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem state="current">
    <TimelineIndicator />
    <TimelineContent>
      <TimelineTitle as="h4">Out for delivery</TimelineTitle>
    </TimelineContent>
  </TimelineItem>
</Timeline>
```

## Notes

- `Timeline` is unstyled — supply layout via `className`/`style`. The semantic structure (`ol > li`) is preserved.
- `TimelineConnector` is decorative; omit it on the last item.
