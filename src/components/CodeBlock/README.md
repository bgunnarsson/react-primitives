# CodeBlock

A code display block with an optional title and a built-in copy-to-clipboard button. Render children for syntax-highlighted markup, or pass a plain `code` string.

## Import

```tsx
import { CodeBlock } from '@bgunnarsson/react-primitives'
```

## Props

Extends `React.HTMLAttributes<HTMLDivElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `code` | `string` (required) | — | The text copied to the clipboard when the copy button is clicked. Also rendered when no `children` are supplied. |
| `title` | `string` | — | Optional label shown in the header (usually the filename or language). |
| `children` | `ReactNode` | — | Pre-rendered code, e.g. highlighted output from Shiki or Prism. When provided, overrides the plain-text display of `code`. |

## Usage

```tsx
<CodeBlock title="Button.tsx" code="<Button>Click</Button>">
  <Button>Click</Button>
</CodeBlock>
```

## Slots

The component exposes these `data-slot` attributes for styling:

| Slot | Element |
|---|---|
| `data-slot="header"` | The top row containing title and copy button. |
| `data-slot="title"` | The title label, if provided. |
| `data-slot="copy"` | The copy button (exposes `data-copied` while the "copied" confirmation is active). |
| `data-slot="pre"` | The `<pre>` wrapper. |
| `data-slot="code"` | The inner `<code>` element. |

## Notes

- The copy button writes `code` to the clipboard and flips `data-copied` for 2 seconds so you can style the confirmation state.
- For real syntax highlighting, generate the highlighted markup at build time (Shiki, Starry Night, etc.) and pass it as `children`.
