# Slider

An accessible range slider built on Radix UI.

## Import

```tsx
import { Slider } from '@bgunnarsson/react-primitives'
```

## Props

Extends all [Radix Slider.Root](https://www.radix-ui.com/primitives/docs/components/slider) props, including:

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number[]` | — | Controlled value array (one entry per thumb). |
| `defaultValue` | `number[]` | `[0]` | Initial value for uncontrolled usage. |
| `onValueChange` | `(value: number[]) => void` | — | Called on value change. |
| `min` | `number` | `0` | Minimum value. |
| `max` | `number` | `100` | Maximum value. |
| `step` | `number` | `1` | Step size. |
| `disabled` | `boolean` | `false` | Disables interaction. |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Slider axis. |

## Usage

```tsx
import { useState } from 'react'

const [volume, setVolume] = useState([50])

<Slider value={volume} onValueChange={setVolume} min={0} max={100} />
```

Range (two thumbs):

```tsx
const [range, setRange] = useState([20, 80])

<Slider value={range} onValueChange={setRange} min={0} max={100} />
```

## Tailwind Example

```tsx
<Slider
  defaultValue={[50]}
  className="relative flex w-full touch-none select-none items-center"
  // Style inner parts via global CSS or data attributes:
  // [&>[data-radix-slider-track]]:h-1.5
  // [&>[data-radix-slider-range]]:bg-blue-600
  // [&>[data-radix-slider-thumb]]:block [&>[data-radix-slider-thumb]]:h-4 [&>[data-radix-slider-thumb]]:w-4
/>
```

For full styling control, use Radix's individual sub-components from `@radix-ui/react-slider` directly alongside this primitive.
