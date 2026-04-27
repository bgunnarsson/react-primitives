import { figma } from '@figma/code-connect'
import { FocusScope } from './FocusScope'

figma.connect(FocusScope, 'FIGMA_COMPONENT_URL', {
  props: {
    children: figma.string('Content'),
  },
  example: ({ children }) => <FocusScope>{children}</FocusScope>,
})
