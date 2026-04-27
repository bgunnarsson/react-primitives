import { figma } from '@figma/code-connect'
import { Slot } from './Slot'

figma.connect(Slot, 'FIGMA_COMPONENT_URL', {
  props: {
    children: figma.string('Content'),
  },
  example: ({ children }) => <Slot>{children}</Slot>,
})
