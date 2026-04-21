# Icon

An SVG icon component supporting sprite-based or external file rendering.

## Import

```tsx
import { Icon } from '@bgunnarsson/react-primitives'
```

## Props

### `Icon`

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `string` | — | **Required.** The icon identifier. |
| `mode` | `'sprite' \| 'external'` | `'sprite'` | Rendering mode. |
| `spriteHref` | `string` | `'/icons.svg'` | Path to the SVG sprite file (used when `mode="sprite"`). |
| `size` | `number` | `24` | Width and height in pixels. |
| `className` | `string` | — | Applied to the `<svg>` or `<img>` element. |

All other props are passed to the underlying `<svg>` or `<img>` element.

## Usage

```tsx
{/* Sprite mode (default) — requires /icons.svg served by your app */}
<Icon name="arrow-right" />

{/* External mode — loads /icons/arrow-right.svg as an <img> */}
<Icon name="arrow-right" mode="external" />
```

## Tailwind Example

```tsx
{/* Inline icon next to text */}
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
  <Icon name="plus" size={16} className="shrink-0" />
  Add item
</button>

{/* Sized icon with color inherited from parent */}
<span className="text-gray-400 hover:text-gray-600">
  <Icon name="settings" size={20} />
</span>

{/* Large decorative icon */}
<Icon name="check-circle" size={48} className="text-green-500" />

{/* External mode with custom size */}
<Icon name="logo" mode="external" size={32} className="rounded" />
```

## Sprite mode setup

The consuming application must serve an SVG sprite file. A typical sprite looks like:

```html
<!-- public/icons.svg -->
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="arrow-right" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" />
  </symbol>
  <symbol id="plus" viewBox="0 0 24 24">
    <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" />
  </symbol>
</svg>
```

Reference a custom sprite path with `spriteHref`:

```tsx
<Icon name="star" spriteHref="/assets/icons.svg" />
```

## Notes

- In sprite mode the icon inherits `currentColor`, so you can control its color via `text-{color}` Tailwind classes on any ancestor.
- In external mode, color cannot be controlled via CSS since the SVG is an `<img>`.
- The component always renders `aria-hidden="true"`. For icons that carry meaning, add a visually hidden label or `aria-label` on the surrounding element.
