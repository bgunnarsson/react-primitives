import { figma } from '@figma/code-connect'
import { Slider } from './Slider'

figma.connect(Slider, 'FIGMA_COMPONENT_URL', {
  props: {
    min: figma.string('Min'),
    max: figma.string('Max'),
  },
  example: ({ min, max }) => (
    <Slider min={Number(min) || 0} max={Number(max) || 100} defaultValue={[50]} />
  ),
})
