import { figma } from '@figma/code-connect'
import { MaskedInput } from './MaskedInput'

figma.connect(MaskedInput, 'FIGMA_COMPONENT_URL', {
  props: {
    placeholder: figma.string('Placeholder'),
    disabled: figma.boolean('Disabled'),
  },
  example: ({ placeholder, disabled }) => (
    <MaskedInput mask="9999 9999 9999 9999" placeholder={placeholder} disabled={disabled} />
  ),
})
