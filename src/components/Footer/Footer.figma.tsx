import { figma } from '@figma/code-connect'
import { Footer } from './Footer'

figma.connect(Footer, 'FIGMA_COMPONENT_URL', {
  props: {
    children: figma.string('Content'),
  },
  example: ({ children }) => <Footer>{children}</Footer>,
})
