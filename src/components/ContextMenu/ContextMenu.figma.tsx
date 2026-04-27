import { figma } from '@figma/code-connect'
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from './ContextMenu'

figma.connect(ContextMenu, 'FIGMA_COMPONENT_URL', {
  props: {},
  example: () => (
    <ContextMenu>
      <ContextMenuTrigger>Right-click</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Action</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
})
