import { figma } from '@figma/code-connect'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from './NavigationMenu'

figma.connect(NavigationMenu, 'FIGMA_COMPONENT_URL', {
  props: {
    label: figma.string('Label'),
    href: figma.string('Href'),
  },
  example: ({ label, href }) => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href={href}>{label}</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
})
