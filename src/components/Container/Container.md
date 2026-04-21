# Container

A generic `<div>` wrapper that accepts all native HTML div attributes. Use it when you need a themeable block container without pulling in `Card` or other semantic wrappers.

## Import

```tsx
import { Container } from '@bgunnarsson/react-primitives'
```

## Usage

```tsx
<Container className="mx-auto max-w-5xl px-4">
  {children}
</Container>
```

## Notes

- Renders as `<div>`. For semantic landmarks use `Header`, `Footer`, or `Nav`.
- Accepts every `React.HTMLAttributes<HTMLDivElement>` prop.
