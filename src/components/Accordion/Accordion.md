# Accordion

Vertically stacked sections that expand and collapse to reveal content.

## Import

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@bgunnarsson/react-primitives'
```

## Props

### `Accordion` (root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `'single' \| 'multiple'` | — | **Required.** Whether one or multiple items can be open at a time. |
| `collapsible` | `boolean` | `false` | When `type="single"`, allows closing the open item by clicking it again. |
| `defaultValue` | `string \| string[]` | — | Uncontrolled initial open item(s). |
| `value` | `string \| string[]` | — | Controlled open item(s). |
| `onValueChange` | `(value) => void` | — | Callback when open state changes. |
| `disabled` | `boolean` | `false` | Disables all items. |

### `AccordionItem`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | **Required.** Unique identifier for this item. |
| `disabled` | `boolean` | `false` | Disables this specific item. |

### `AccordionTrigger`

Extends `React.ButtonHTMLAttributes<HTMLButtonElement>`. No additional required props.

### `AccordionContent`

| Prop | Type | Default | Description |
|---|---|---|---|
| `forceMount` | `boolean` | — | Keep content mounted even when closed (useful for animations). |

## Usage

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It follows the WAI-ARIA Accordion pattern.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>No. Apply your own classes via className.</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Tailwind Example

```tsx
<Accordion type="single" collapsible className="w-full divide-y divide-gray-200 rounded-lg border border-gray-200">
  <AccordionItem value="item-1">
    <AccordionTrigger className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 data-[state=open]:bg-gray-50">
      Is it accessible?
      <span className="text-gray-400 transition-transform duration-200 data-[state=open]:rotate-180">↓</span>
    </AccordionTrigger>
    <AccordionContent className="overflow-hidden px-4 pb-3 text-sm text-gray-600 data-[state=closed]:animate-none data-[state=open]:animate-none">
      Yes. It follows the WAI-ARIA Accordion pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50">
      Is it styled?
    </AccordionTrigger>
    <AccordionContent className="px-4 pb-3 text-sm text-gray-600">
      No. Apply your own classes via className.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Notes

- `type` is a discriminated union. TypeScript will enforce that `collapsible` is only valid when `type="single"`.
- Use `data-[state=open]` and `data-[state=closed]` Tailwind variants on triggers and content to animate open/close transitions.
- For animated height transitions on content, apply `overflow-hidden` and use CSS `grid-template-rows` or a library like `tailwindcss-animate`.
