import { figma } from '@figma/code-connect'
import { Card, CardContent } from './Card'

figma.connect(Card, 'FIGMA_COMPONENT_URL', {
  props: {
    children: figma.string('Content'),
  },
  example: ({ children }) => (
    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  ),
})
