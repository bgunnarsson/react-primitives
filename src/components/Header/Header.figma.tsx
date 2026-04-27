import { figma } from '@figma/code-connect'
import { Header } from './Header'

figma.connect(Header, 'FIGMA_COMPONENT_URL', {
  props: {
    children: figma.string('Content'),
  },
  example: ({ children }) => <Header>{children}</Header>,
})
