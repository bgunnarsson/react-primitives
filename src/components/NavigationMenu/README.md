# NavigationMenu

A site-header navigation menu that supports mega-menu dropdowns and direct links side by side. Wraps `@radix-ui/react-navigation-menu`.

## Import

```tsx
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
  NavigationMenuIndicator,
  NavigationMenuSub,
} from '@bgunnarsson/react-primitives'
```

## Usage

```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/primitives">Primitives</NavigationMenuLink>
        <NavigationMenuLink href="/design-system">Design system</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/docs">Docs</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuViewport />
</NavigationMenu>
```

## Notes

- Prefer `NavigationMenu` over `DropdownMenu` when the menu items are primarily navigation links rather than actions.
- `NavigationMenuViewport` is optional — place it where the animated dropdown panel should render. Without it, each `NavigationMenuContent` renders inline relative to its trigger.
- Include a plain `NavigationMenuLink` (without a `Trigger`) for items that navigate directly.
