import { figma } from '@figma/code-connect'
import { Badge } from './Badge'

figma.connect(Badge, 'FIGMA_COMPONENT_URL', {
  props: {
    children: figma.string('Label'),
  },
  example: ({ children }) => <Badge>{children}</Badge>,
})
