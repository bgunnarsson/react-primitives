import { figma } from '@figma/code-connect'
import { AspectRatio } from './AspectRatio'

figma.connect(AspectRatio, 'FIGMA_COMPONENT_URL', {
  props: {
    ratio: figma.string('Ratio'),
  },
  example: ({ ratio }) => <AspectRatio ratio={Number(ratio) || 16 / 9} />,
})
