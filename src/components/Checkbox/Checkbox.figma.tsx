import { figma } from '@figma/code-connect'
import { Checkbox } from './Checkbox'

figma.connect(Checkbox, 'FIGMA_COMPONENT_URL', {
  props: {
    checked: figma.boolean('Checked'),
    disabled: figma.boolean('Disabled'),
  },
  example: ({ checked, disabled }) => <Checkbox defaultChecked={checked} disabled={disabled} />,
})
