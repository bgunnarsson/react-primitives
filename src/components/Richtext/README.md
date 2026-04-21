# Richtext

Renders an HTML string from a CMS or other source using `dangerouslySetInnerHTML`.

## Import

```tsx
import { Richtext } from '@bgunnarsson/react-primitives'
```

## Props

### `Richtext`

| Prop | Type | Default | Description |
|---|---|---|---|
| `html` | `string` | — | **Required.** The HTML string to render. |

Extends `React.HTMLAttributes<HTMLDivElement>`.

## Usage

```tsx
<Richtext html="<p>This is <strong>rich text</strong> from a CMS.</p>" />
```

## Tailwind Example

```tsx
{/* Basic rendering */}
<Richtext
  html={cmsContent}
  className="prose max-w-none text-gray-800"
/>

{/* With Tailwind Typography plugin (recommended) */}
<Richtext
  html={cmsContent}
  className="prose prose-gray prose-headings:font-semibold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline max-w-none"
/>

{/* Custom inline styles without the typography plugin */}
<Richtext
  html={cmsContent}
  className="
    max-w-none
    [&_p]:mb-4 [&_p]:text-gray-700 [&_p]:leading-relaxed
    [&_h2]:mb-3 [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-gray-900
    [&_h3]:mb-2 [&_h3]:mt-5 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-900
    [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-gray-700
    [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:text-gray-700
    [&_li]:mb-1
    [&_a]:text-blue-600 [&_a]:underline hover:[&_a]:text-blue-800
    [&_strong]:font-semibold [&_strong]:text-gray-900
    [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600
  "
/>
```

## Notes

- **Always sanitize the HTML string before passing it to this component.** `dangerouslySetInnerHTML` renders the string as-is. Use a library like [DOMPurify](https://github.com/cure53/DOMPurify) to sanitize untrusted content:
  ```ts
  import DOMPurify from 'dompurify'
  <Richtext html={DOMPurify.sanitize(rawHtml)} />
  ```
- The [Tailwind Typography plugin](https://github.com/tailwindlabs/tailwindcss-typography) (`@tailwindcss/typography`) is the easiest way to style CMS content — add `className="prose"` and it handles headings, paragraphs, lists, links, blockquotes, and more.
- Umbraco and other CMS platforms typically sanitize HTML on the server before storing it. Verify with your backend team whether client-side sanitization is also needed.
