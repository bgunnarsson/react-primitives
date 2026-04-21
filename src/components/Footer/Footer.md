# Footer

Semantic `<footer>` landmark wrapper.

## Import

```tsx
import { Footer } from '@bgunnarsson/react-primitives'
```

## Usage

```tsx
<Footer className="border-t px-4 py-8 text-sm text-gray-600">
  © {new Date().getFullYear()} Acme Inc.
</Footer>
```

## Notes

- Renders a native `<footer>` element, which is announced as a landmark by assistive technologies when it's a top-level footer.
- Accepts every `React.HTMLAttributes<HTMLElement>` prop.
