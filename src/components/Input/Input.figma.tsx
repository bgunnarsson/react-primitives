import { figma } from '@figma/code-connect'
import { Input } from './Input'

figma.connect(Input, 'FIGMA_COMPONENT_URL', {
  props: {
    placeholder: figma.string('Placeholder'),
    disabled: figma.boolean('Disabled'),
  },
  example: ({ placeholder, disabled }) => <Input placeholder={placeholder} disabled={disabled} />,
})
