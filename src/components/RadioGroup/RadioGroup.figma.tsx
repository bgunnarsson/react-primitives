import { figma } from '@figma/code-connect'
import { RadioGroup, RadioGroupItem } from './RadioGroup'

figma.connect(RadioGroup, 'FIGMA_COMPONENT_URL', {
  props: {
    value: figma.string('Value'),
  },
  example: ({ value }) => (
    <RadioGroup defaultValue={value}>
      <RadioGroupItem value="option-1" />
    </RadioGroup>
  ),
})
