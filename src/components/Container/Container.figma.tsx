import { figma } from '@figma/code-connect'
import { Container } from './Container'

figma.connect(Container, 'FIGMA_COMPONENT_URL', {
  props: {
    children: figma.string('Content'),
  },
  example: ({ children }) => <Container>{children}</Container>,
})
