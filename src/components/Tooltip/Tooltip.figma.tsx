import { figma } from '@figma/code-connect'
import { Tooltip, TooltipTrigger, TooltipContent } from './Tooltip'

figma.connect(Tooltip, 'FIGMA_COMPONENT_URL', {
  props: {
    content: figma.string('Content'),
  },
  example: ({ content }) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button>Trigger</button>
      </TooltipTrigger>
      <TooltipContent>{content}</TooltipContent>
    </Tooltip>
  ),
})
