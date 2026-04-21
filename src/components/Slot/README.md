# Slot

Composition primitive that merges its props onto a single child element. Use it to implement an `asChild` prop on your own components. Wraps `@radix-ui/react-slot`.

## Import

```tsx
import { Slot, Slottable } from '@bgunnarsson/react-primitives'
```

## Usage

```tsx
const MyButton = ({ asChild, ...props }) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp {...props} />
}

// Renders as <a>, inheriting all props from MyButton:
<MyButton asChild>
  <a href="/profile">Profile</a>
</MyButton>
```

## `Slottable`

Use `Slottable` inside the slot when your component renders wrapper elements so Radix knows which child should receive the merged props.

```tsx
<Slot>
  <span>prefix</span>
  <Slottable>{children}</Slottable>
  <span>suffix</span>
</Slot>
```

## Notes

- The child must accept a `ref`. Wrap DOM elements directly or use `React.forwardRef` on custom components.
- Props are merged: the slot's props take precedence over the child's, except for `className`, which is concatenated, and event handlers, which are composed.
