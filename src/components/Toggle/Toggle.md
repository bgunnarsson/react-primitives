# Toggle

A button that can be in a pressed or unpressed state.

## Import

```tsx
import { Toggle } from '@bgunnarsson/react-primitives'
```

## Props

### `Toggle`

| Prop | Type | Default | Description |
|---|---|---|---|
| `pressed` | `boolean` | — | Controlled pressed state. |
| `defaultPressed` | `boolean` | `false` | Uncontrolled initial pressed state. |
| `onPressedChange` | `(pressed: boolean) => void` | — | Callback when pressed state changes. |
| `disabled` | `boolean` | `false` | Disables the toggle. |

Extends `React.ButtonHTMLAttributes<HTMLButtonElement>`.

## Usage

```tsx
<Toggle>Bold</Toggle>
<Toggle defaultPressed>Italic</Toggle>
```

## Tailwind Example

```tsx
{/* Text formatting toggles */}
<div className="flex gap-1">
  <Toggle
    defaultPressed
    className="inline-flex h-8 w-8 items-center justify-center rounded border border-transparent text-sm font-bold text-gray-700 hover:bg-gray-100 data-[state=on]:border-gray-200 data-[state=on]:bg-gray-100 data-[state=on]:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
  >
    B
  </Toggle>
  <Toggle className="inline-flex h-8 w-8 items-center justify-center rounded border border-transparent text-sm italic text-gray-700 hover:bg-gray-100 data-[state=on]:border-gray-200 data-[state=on]:bg-gray-100 data-[state=on]:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400">
    I
  </Toggle>
  <Toggle className="inline-flex h-8 w-8 items-center justify-center rounded border border-transparent text-sm underline text-gray-700 hover:bg-gray-100 data-[state=on]:border-gray-200 data-[state=on]:bg-gray-100 data-[state=on]:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400">
    U
  </Toggle>
</div>

{/* Favorite button */}
<Toggle
  aria-label="Add to favorites"
  className="rounded-full p-2 text-gray-400 hover:text-yellow-500 data-[state=on]:text-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
>
  ★
</Toggle>
```

## Notes

- Use `data-[state=on]:` Tailwind variants to style the pressed state. Radix sets `data-state="on"` when pressed and `data-state="off"` when not.
- For grouped toggles where only one (or multiple) can be active at a time, use `ToggleGroup` instead.
- `Toggle` sets `aria-pressed` automatically based on the pressed state.
