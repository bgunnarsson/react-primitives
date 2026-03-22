# Nav

Semantic navigation wrappers using `<nav>`, `<ul>`, and `<li>` HTML elements.

## Import

```tsx
import { Nav, NavList, NavItem } from '@bgunnarsson/react-primitives'
```

## Props

### `Nav`

Extends `React.HTMLAttributes<HTMLElement>`. Renders as `<nav>`.

### `NavList`

Extends `React.HTMLAttributes<HTMLUListElement>`. Renders as `<ul>`.

### `NavItem`

Extends `React.LiHTMLAttributes<HTMLLIElement>`. Renders as `<li>`.

## Usage

```tsx
<Nav>
  <NavList>
    <NavItem><a href="/">Home</a></NavItem>
    <NavItem><a href="/about">About</a></NavItem>
    <NavItem><a href="/contact">Contact</a></NavItem>
  </NavList>
</Nav>
```

## Tailwind Example

```tsx
{/* Horizontal navigation bar */}
<Nav aria-label="Main navigation" className="border-b border-gray-200 bg-white">
  <NavList className="mx-auto flex max-w-6xl items-center gap-1 px-4">
    <NavItem>
      <Link href="/" className="block rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
        Home
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/products" className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900">
        Products
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/about" className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900">
        About
      </Link>
    </NavItem>
  </NavList>
</Nav>

{/* Vertical sidebar navigation */}
<Nav aria-label="Sidebar" className="w-56">
  <NavList className="space-y-0.5 p-2">
    <NavItem>
      <Link href="/dashboard" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100">
        Dashboard
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/settings" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
        Settings
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/profile" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
        Profile
      </Link>
    </NavItem>
  </NavList>
</Nav>
```

## Notes

- Always add an `aria-label` to `Nav` when multiple navigation landmarks exist on the same page (e.g. "Main navigation", "Footer navigation", "Sidebar").
- For flyout/dropdown navigation with keyboard support, use `NavigationMenu` instead.
