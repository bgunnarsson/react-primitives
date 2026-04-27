import { figma } from '@figma/code-connect'
import { NumberInput } from './NumberInput'

figma.connect(NumberInput, 'FIGMA_COMPONENT_URL', {
  props: {
    placeholder: figma.string('Placeholder'),
    disabled: figma.boolean('Disabled'),
  },
  example: ({ placeholder, disabled }) => (
    <NumberInput placeholder={placeholder} disabled={disabled} />
  ),
})
