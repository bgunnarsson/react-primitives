# Separator

A visual dividing line between content sections, either horizontal or vertical.

## Import

```tsx
import { Separator } from '@bgunnarsson/react-primitives'
```

## Props

### `Separator`

| Prop | Type | Default | Description |
|---|---|---|---|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Direction of the separator. |
| `decorative` | `boolean` | `true` | When `true`, the separator is hidden from the accessibility tree. |

Extends `React.ComponentPropsWithoutRef`.

## Usage

```tsx
{/* Horizontal */}
<Separator />

{/* Vertical */}
<Separator orientation="vertical" />
```

## Tailwind Example

```tsx
{/* Horizontal section divider */}
<Separator className="my-4 h-px w-full bg-gray-200" />

{/* Horizontal with label */}
<div className="flex items-center gap-3">
  <Separator className="flex-1 h-px bg-gray-200" />
  <span className="text-xs text-gray-400 uppercase tracking-wide">or</span>
  <Separator className="flex-1 h-px bg-gray-200" />
</div>

{/* Vertical between inline items */}
<div className="flex items-center gap-3 text-sm text-gray-600">
  <span>Privacy</span>
  <Separator orientation="vertical" className="h-4 w-px bg-gray-300" />
  <span>Terms</span>
  <Separator orientation="vertical" className="h-4 w-px bg-gray-300" />
  <span>Contact</span>
</div>
```

## Notes

- By default, `decorative={true}` renders `role="none"` so screen readers skip the element. Set `decorative={false}` if the separator is semantically meaningful.
- Vertical separators require a fixed height (or `self-stretch` in a flex container) to be visible.
