import { figma } from '@figma/code-connect'
import { ScrollArea } from './ScrollArea'

figma.connect(ScrollArea, 'FIGMA_COMPONENT_URL', {
  props: {},
  example: () => (
    <ScrollArea>
      <div>Content</div>
    </ScrollArea>
  ),
})
