import { figma } from '@figma/code-connect'
import { Rating } from './Rating'

figma.connect(Rating, 'FIGMA_COMPONENT_URL', {
  props: {
    max: figma.string('Max'),
    readOnly: figma.boolean('Read Only'),
  },
  example: ({ max, readOnly }) => <Rating max={Number(max) || 5} readOnly={readOnly} />,
})
