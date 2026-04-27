import { figma } from '@figma/code-connect'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './DropdownMenu'

figma.connect(DropdownMenu, 'FIGMA_COMPONENT_URL', {
  props: {},
  example: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button">Open</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Item</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
})
