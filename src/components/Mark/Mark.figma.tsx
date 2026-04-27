import { figma } from '@figma/code-connect'
import { Mark } from './Mark'

figma.connect(Mark, 'FIGMA_COMPONENT_URL', {
  props: {
    children: figma.string('Text'),
  },
  example: ({ children }) => <Mark>{children}</Mark>,
})
