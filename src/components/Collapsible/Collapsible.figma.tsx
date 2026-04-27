import { figma } from '@figma/code-connect'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './Collapsible'

figma.connect(Collapsible, 'FIGMA_COMPONENT_URL', {
  props: {
    open: figma.boolean('Open'),
  },
  example: ({ open }) => (
    <Collapsible defaultOpen={open}>
      <CollapsibleTrigger asChild>
        <button type="button">Toggle</button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p>Hidden content</p>
      </CollapsibleContent>
    </Collapsible>
  ),
})
