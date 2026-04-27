import { figma } from '@figma/code-connect'
import { Kbd } from './Kbd'

figma.connect(Kbd, 'FIGMA_COMPONENT_URL', {
  props: {
    children: figma.string('Key'),
  },
  example: ({ children }) => <Kbd>{children}</Kbd>,
})
