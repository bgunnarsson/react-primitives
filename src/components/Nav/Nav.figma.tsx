import { figma } from '@figma/code-connect'
import { Nav, NavList, NavItem } from './Nav'

figma.connect(Nav, 'FIGMA_COMPONENT_URL', {
  props: {},
  example: () => (
    <Nav>
      <NavList>
        <NavItem>Item</NavItem>
      </NavList>
    </Nav>
  ),
})
