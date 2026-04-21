# Tooltip

A small informational popup that appears when the user hovers or focuses a trigger element.

## Import

```tsx
import { Tooltip, TooltipTrigger, TooltipContent } from '@bgunnarsson/react-primitives'
```

## Props

### `Tooltip`

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controlled open state. |
| `onOpenChange` | `(open: boolean) => void` | — | Callback when open state changes. |
| `defaultOpen` | `boolean` | `false` | Uncontrolled initial open state. |
| `delayDuration` | `number` | `200` | Hover delay in ms before the tooltip appears. |

### `TooltipTrigger`

| Prop | Type | Default | Description |
|---|---|---|---|
| `asChild` | `boolean` | `false` | Merge props onto the child element. |

### `TooltipContent`

| Prop | Type | Default | Description |
|---|---|---|---|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | Preferred side. |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Alignment along the trigger. |
| `sideOffset` | `number` | `4` | Gap in px between trigger and content. |

## Usage

No provider needed — `Tooltip` manages its own context internally.

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <button>Hover me</button>
  </TooltipTrigger>
  <TooltipContent>Helpful tooltip text</TooltipContent>
</Tooltip>
```

## Tailwind Example

```tsx
{/* Icon button with tooltip */}
<Tooltip delayDuration={300}>
  <TooltipTrigger asChild>
    <button
      aria-label="Copy to clipboard"
      className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    </button>
  </TooltipTrigger>
  <TooltipContent
    side="top"
    className="z-50 rounded-md bg-gray-900 px-2.5 py-1.5 text-xs font-medium text-white shadow-md"
  >
    Copy to clipboard
  </TooltipContent>
</Tooltip>

{/* Tooltip on a disabled button */}
<Tooltip>
  <TooltipTrigger asChild>
    <span className="inline-block">
      <button disabled className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white opacity-50 cursor-not-allowed">
        Publish
      </button>
    </span>
  </TooltipTrigger>
  <TooltipContent className="z-50 rounded-md bg-gray-900 px-2.5 py-1.5 text-xs text-white">
    You need editor permissions to publish.
  </TooltipContent>
</Tooltip>
```

## Notes

- Tooltips are accessible to keyboard users — they appear when the trigger is focused.
- When wrapping a `disabled` button with a tooltip, wrap the button in a `<span>` first, since disabled elements do not fire mouse events.
- `TooltipContent` renders in a Portal so it won't be clipped by `overflow: hidden` ancestors.
