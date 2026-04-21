# Header

Semantic `<header>` landmark wrapper.

## Import

```tsx
import { Header } from '@bgunnarsson/react-primitives'
```

## Usage

```tsx
<Header className="sticky top-0 z-50 border-b bg-white">
  <Nav>…</Nav>
</Header>
```

## Notes

- Renders a native `<header>` element, which is announced as a landmark by assistive technologies.
- Accepts every `React.HTMLAttributes<HTMLElement>` prop.
