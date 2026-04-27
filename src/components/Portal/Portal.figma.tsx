import { figma } from '@figma/code-connect'
import { Portal } from './Portal'

figma.connect(Portal, 'FIGMA_COMPONENT_URL', {
  props: {
    children: figma.string('Content'),
  },
  example: ({ children }) => <Portal>{children}</Portal>,
})
