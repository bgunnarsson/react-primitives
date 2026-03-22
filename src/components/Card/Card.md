# Card

A flexible container component for composing any card layout — article cards, user cards, product cards, and more.

## Import

```tsx
import { Card, CardContent } from '@bgunnarsson/react-primitives'
```

## Props

All parts extend `React.HTMLAttributes<HTMLDivElement>` and render as `<div>`. No required props.

## Usage

```tsx
<Card>
  <CardContent>
    Any content goes here.
  </CardContent>
</Card>
```

## Tailwind Examples

```tsx
{/* Article card */}
<Card className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden w-80">
  <img src="..." alt="..." className="w-full h-40 object-cover" />
  <CardContent className="p-5 flex flex-col gap-2">
    <span className="text-xs font-medium uppercase tracking-wide text-gray-400">Technology</span>
    <h3 className="text-base font-semibold text-gray-900 leading-snug">How to build great UI primitives</h3>
    <p className="text-sm text-gray-500 leading-relaxed">A short intro to the article content.</p>
  </CardContent>
</Card>

{/* User card */}
<Card className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 flex flex-col items-center gap-3">
  <img src="..." alt="Jane Doe" className="w-16 h-16 rounded-full object-cover" />
  <CardContent className="text-center flex flex-col gap-1">
    <span className="text-base font-semibold text-gray-900">Jane Doe</span>
    <span className="text-sm text-gray-500">Senior Designer</span>
    <span className="text-xs text-gray-400">jane@example.com</span>
  </CardContent>
</Card>

{/* Product card */}
<Card className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden w-72">
  <img src="..." alt="Product" className="w-full h-48 object-cover bg-gray-100" />
  <CardContent className="p-4 flex flex-col gap-2">
    <span className="text-sm font-semibold text-gray-900">Running Shoes Pro</span>
    <span className="text-xs text-gray-500">Lightweight and durable</span>
    <div className="flex items-center justify-between mt-2">
      <span className="text-lg font-bold text-gray-900">$129</span>
      <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
        Add to cart
      </button>
    </div>
  </CardContent>
</Card>
```

## Notes

- `Card` and `CardContent` are both plain `<div>` wrappers — structure your card however the design requires.
- There are no prescriptive sub-parts like header/body/footer. Use arbitrary children and Tailwind classes to build any layout.
- `CardContent` is optional; you can place content directly inside `Card` if no inner wrapper is needed.
