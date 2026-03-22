import React from 'react'
import { figma } from '@figma/code-connect'
import { Popover, PopoverTrigger, PopoverContent } from './Popover'

figma.connect(Popover, 'FIGMA_COMPONENT_URL', {
  props: {},
  example: () => (
    <Popover>
      <PopoverTrigger asChild>
        <button>Open</button>
      </PopoverTrigger>
      <PopoverContent>
        <p>Popover content</p>
      </PopoverContent>
    </Popover>
  ),
})
