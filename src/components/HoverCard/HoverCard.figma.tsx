import { figma } from '@figma/code-connect'
import { HoverCard, HoverCardTrigger, HoverCardContent } from './HoverCard'

figma.connect(HoverCard, 'FIGMA_COMPONENT_URL', {
  props: {},
  example: () => (
    <HoverCard>
      <HoverCardTrigger>Trigger</HoverCardTrigger>
      <HoverCardContent>Card content</HoverCardContent>
    </HoverCard>
  ),
})
