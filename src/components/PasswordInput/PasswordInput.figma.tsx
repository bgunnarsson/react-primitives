import { figma } from '@figma/code-connect'
import { PasswordInput } from './PasswordInput'

figma.connect(PasswordInput, 'FIGMA_COMPONENT_URL', {
  props: {
    placeholder: figma.string('Placeholder'),
    disabled: figma.boolean('Disabled'),
  },
  example: ({ placeholder, disabled }) => <PasswordInput placeholder={placeholder} disabled={disabled} />,
})
