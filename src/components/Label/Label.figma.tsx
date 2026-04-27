import { figma } from '@figma/code-connect'
import { Label } from './Label'

figma.connect(Label, 'FIGMA_COMPONENT_URL', {
  props: {
    children: figma.string('Text'),
  },
  example: ({ children }) => <Label>{children}</Label>,
})
