import React from 'react'
import { figma } from '@figma/code-connect'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from './Tooltip'

figma.connect(Tooltip, 'FIGMA_COMPONENT_URL', {
  props: {
    content: figma.string('Content'),
  },
  example: ({ content }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button>Trigger</button>
        </TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
})
