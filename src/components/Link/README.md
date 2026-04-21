# Link

An unstyled anchor element that supports all native `<a>` attributes.

## Import

```tsx
import { Link } from '@bgunnarsson/react-primitives'
```

## Props

### `Link`

Extends `React.AnchorHTMLAttributes<HTMLAnchorElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | `string` | — | Link destination URL. |
| `target` | `string` | — | Browsing context (`_blank`, `_self`, `_parent`, `_top`). |
| `rel` | `string` | — | Link relationship. Use `'noopener noreferrer'` with `target="_blank"`. |
| `children` | `React.ReactNode` | — | Link content. |

## Usage

```tsx
<Link href="/about">About us</Link>

<Link href="https://example.com" target="_blank" rel="noopener noreferrer">
  External link
</Link>
```

## Tailwind Example

```tsx
{/* Standard inline link */}
<Link href="/about" className="text-blue-600 hover:text-blue-800 hover:underline">
  About us
</Link>

{/* Navigation link */}
<Link
  href="/dashboard"
  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
>
  Dashboard
</Link>

{/* External link with icon */}
<Link
  href="https://github.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
>
  View on GitHub
  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
</Link>

{/* Button-style link */}
<Link
  href="/signup"
  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
>
  Get started
</Link>
```

## Notes

- Always add `rel="noopener noreferrer"` when using `target="_blank"` to prevent the opened page from accessing the opener's `window` object (security best practice).
- For client-side navigation in Next.js or React Router, use your framework's `<Link>` component directly rather than this primitive.
