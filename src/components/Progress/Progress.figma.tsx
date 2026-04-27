import { figma } from '@figma/code-connect'
import { Progress } from './Progress'

figma.connect(Progress, 'FIGMA_COMPONENT_URL', {
  props: {
    value: figma.string('Value'),
  },
  example: ({ value }) => <Progress value={Number(value)} />,
})
