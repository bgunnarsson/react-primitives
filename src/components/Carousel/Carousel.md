# Carousel

A touch-friendly, keyboard-accessible slideshow component built on Embla Carousel.

## Import

```tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
} from '@bgunnarsson/react-primitives'
```

## Props

### `Carousel`

| Prop | Type | Default | Description |
|---|---|---|---|
| `opts` | `EmblaOptionsType` | — | Embla Carousel options (loop, align, dragFree, etc.). |
| `plugins` | `EmblaPluginType[]` | — | Embla plugins (e.g. Autoplay). |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Scroll direction. |
| `setApi` | `(api: CarouselApi) => void` | — | Callback to access the Embla API externally. |

### `CarouselContent`

Extends `React.HTMLAttributes<HTMLDivElement>`. The scroll container — must wrap `CarouselItem`s.

### `CarouselItem`

Extends `React.HTMLAttributes<HTMLDivElement>`. A single slide.

### `CarouselPrevious` / `CarouselNext`

Extends `React.ButtonHTMLAttributes<HTMLButtonElement>`. Navigation buttons. Automatically disabled at the start/end of the carousel.

## Usage

```tsx
<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
    <CarouselItem>Slide 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious>Prev</CarouselPrevious>
  <CarouselNext>Next</CarouselNext>
</Carousel>
```

## Tailwind Example

```tsx
<div className="relative w-full max-w-xl">
  <Carousel opts={{ loop: true }} className="w-full">
    <CarouselContent className="flex">
      {['Slide 1', 'Slide 2', 'Slide 3'].map((label, i) => (
        <CarouselItem key={i} className="min-w-full">
          <div className="flex h-48 items-center justify-center rounded-xl bg-gray-100 text-2xl font-semibold text-gray-600">
            {label}
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <div className="mt-4 flex justify-center gap-3">
      <CarouselPrevious className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40">
        ←
      </CarouselPrevious>
      <CarouselNext className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40">
        →
      </CarouselNext>
    </div>
  </Carousel>
</div>
```

## Using the Carousel API

Access the Embla API to programmatically control the carousel or subscribe to events:

```tsx
import { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@bgunnarsson/react-primitives'

function MyCarousel() {
  const [api, setApi] = useState<CarouselApi>()

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>Slide 1</CarouselItem>
        <CarouselItem>Slide 2</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
```

Or use `useCarousel()` inside a child component:

```tsx
import { useCarousel } from '@bgunnarsson/react-primitives'

function SlideCounter() {
  const { api } = useCarousel()
  // api is the Embla CarouselApi instance
  return null
}
```

## Notes

- `CarouselContent` must have `display: flex` (or `className="flex"`) for slides to lay out correctly.
- `CarouselItem` must have `min-width: 100%` (or a fraction like `min-w-1/2`) to define the slide width.
- `useCarousel()` can only be used inside a component that is a descendant of `<Carousel>`.
