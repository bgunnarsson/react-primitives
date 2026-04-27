import { figma } from '@figma/code-connect'
import { Separator } from './Separator'

figma.connect(Separator, 'FIGMA_COMPONENT_URL', {
  props: {
    orientation: figma.enum('Orientation', {
      Horizontal: 'horizontal',
      Vertical: 'vertical',
    }),
  },
  example: ({ orientation }) => <Separator orientation={orientation} />,
})
