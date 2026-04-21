# HoverCard

A popover that appears when the user hovers over a trigger element, used to show preview or supplemental content.

## Import

```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@bgunnarsson/react-primitives'
```

## Props

### `HoverCard` (root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controlled open state. |
| `onOpenChange` | `(open: boolean) => void` | — | Callback when open state changes. |
| `defaultOpen` | `boolean` | `false` | Uncontrolled initial open state. |
| `openDelay` | `number` | `700` | Delay in ms before opening. |
| `closeDelay` | `number` | `300` | Delay in ms before closing. |

### `HoverCardTrigger`

| Prop | Type | Default | Description |
|---|---|---|---|
| `asChild` | `boolean` | `false` | Merge props onto the child element. |

### `HoverCardContent`

| Prop | Type | Default | Description |
|---|---|---|---|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Preferred opening side. |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Alignment along the trigger. |
| `sideOffset` | `number` | `4` | Gap in px from trigger. |

## Usage

```tsx
<HoverCard>
  <HoverCardTrigger>@username</HoverCardTrigger>
  <HoverCardContent>
    <p>User profile preview</p>
  </HoverCardContent>
</HoverCard>
```

## Tailwind Example

```tsx
<HoverCard openDelay={200} closeDelay={100}>
  <HoverCardTrigger asChild>
    <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
      @bjorn
    </a>
  </HoverCardTrigger>
  <HoverCardContent className="w-72 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
    <div className="flex gap-3">
      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gray-200">
        <img src="https://placehold.co/48" alt="Björn" className="h-full w-full object-cover" />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">Björn Gunnarsson</p>
        <p className="text-xs text-gray-500">@bjorn</p>
        <p className="mt-1.5 text-xs text-gray-600">Frontend engineer. Building things with React.</p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

## Notes

- `HoverCard` is for non-interactive preview content. For actionable menus, use `DropdownMenu` or `Popover` instead.
- The content renders inside a Portal, so it won't be clipped by `overflow: hidden` on parent elements.
- Avoid putting interactive elements (buttons, inputs) inside `HoverCardContent` — hover cards are not accessible to keyboard-only users who cannot trigger hover events.
