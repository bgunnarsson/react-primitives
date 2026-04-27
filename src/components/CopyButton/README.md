# CopyButton

A button that copies text to the clipboard and exposes a `copied` state for visual feedback.

## Import

```tsx
import { CopyButton } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Text to copy. |
| `getValue` | `() => string \| Promise<string>` | — | Lazily resolves the value when pressed. Wins over `value`. |
| `resetMs` | `number` | `2000` | How long the copied state stays true (ms). |
| `onCopy` | `(value: string) => void` | — | Called after a successful copy. |
| `onError` | `(error: Error) => void` | — | Called when the clipboard write fails. |
| `children` | `ReactNode \| (state) => ReactNode` | — | Static children or render-prop receiving `{ copied, copy, error }`. |

All other native `<button>` props (`disabled`, `className`, `aria-*`, etc.) are forwarded.

The button exposes its state as `data-state="copied" \| "idle"` for styling.

## Usage

```tsx
<CopyButton value="hello world" />
```

### Render prop for swap-on-copy

```tsx
<CopyButton value="hello world">
  {({ copied }) => (copied ? '✓ Copied' : 'Copy')}
</CopyButton>
```

### Async value

```tsx
<CopyButton getValue={async () => fetchTokenForUser(userId)}>
  Copy access token
</CopyButton>
```

## Tailwind Example

```tsx
<CopyButton
  value="npm install @bgunnarsson/react-primitives"
  className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm hover:bg-gray-50 data-[state=copied]:border-green-500 data-[state=copied]:text-green-600"
>
  {({ copied }) => (copied ? '✓ Copied' : 'Copy command')}
</CopyButton>
```

## Notes

- Uses `navigator.clipboard.writeText` when available, with a `document.execCommand('copy')` fallback for older browsers.
- The `copied` state automatically resets after `resetMs`.
- In SSR or non-browser environments the button renders normally; copying happens on user interaction in the browser.
