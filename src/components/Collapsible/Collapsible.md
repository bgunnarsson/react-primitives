# Collapsible

An interactive section that can be expanded or collapsed to show or hide content.

## Import

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@bgunnarsson/react-primitives'
```

## Props

### `Collapsible` (root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | — | Controlled open state. |
| `onOpenChange` | `(open: boolean) => void` | — | Callback when open state changes. |
| `defaultOpen` | `boolean` | `false` | Uncontrolled initial open state. |
| `disabled` | `boolean` | `false` | Prevents interaction. |

### `CollapsibleTrigger`

| Prop | Type | Default | Description |
|---|---|---|---|
| `asChild` | `boolean` | `false` | Merge props onto the child element instead of rendering a button. |

### `CollapsibleContent`

| Prop | Type | Default | Description |
|---|---|---|---|
| `forceMount` | `boolean` | — | Keep content mounted even when closed. |

## Usage

```tsx
<Collapsible>
  <CollapsibleTrigger asChild>
    <button>Toggle</button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <p>Hidden content shown when open.</p>
  </CollapsibleContent>
</Collapsible>
```

## Tailwind Example

```tsx
<Collapsible className="w-full max-w-sm rounded-lg border border-gray-200 bg-white">
  <div className="flex items-center justify-between px-4 py-3">
    <span className="text-sm font-medium text-gray-900">Advanced options</span>
    <CollapsibleTrigger asChild>
      <button className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 data-[state=open]:text-gray-900">
        <svg className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </CollapsibleTrigger>
  </div>
  <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-none data-[state=open]:animate-none">
    <div className="border-t border-gray-100 px-4 py-3 text-sm text-gray-600">
      <p>These are the advanced settings you can configure.</p>
    </div>
  </CollapsibleContent>
</Collapsible>
```

## Notes

- Unlike `Accordion`, `Collapsible` is a standalone section — use it when you need a single expandable area.
- Use `asChild` on `CollapsibleTrigger` to turn any element into the trigger (e.g. a styled button, icon button, or heading).
- The `data-[state=open]` and `data-[state=closed]` attributes are available on all parts for CSS transitions.
