import { figma } from '@figma/code-connect'
import { PhoneInput } from './PhoneInput'

figma.connect(PhoneInput, 'FIGMA_COMPONENT_URL', {
  props: {
    placeholder: figma.string('Placeholder'),
    disabled: figma.boolean('Disabled'),
  },
  example: ({ placeholder, disabled }) => (
    <PhoneInput placeholder={placeholder} disabled={disabled} />
  ),
})
