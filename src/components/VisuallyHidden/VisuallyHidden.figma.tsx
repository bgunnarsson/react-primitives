import { figma } from '@figma/code-connect'
import { VisuallyHidden } from './VisuallyHidden'

figma.connect(VisuallyHidden, 'FIGMA_COMPONENT_URL', {
  props: {
    children: figma.string('Text'),
  },
  example: ({ children }) => <VisuallyHidden>{children}</VisuallyHidden>,
})
