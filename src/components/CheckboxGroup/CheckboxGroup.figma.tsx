import { figma } from '@figma/code-connect'
import { CheckboxGroup, CheckboxGroupItem } from './CheckboxGroup'

figma.connect(CheckboxGroup, 'FIGMA_COMPONENT_URL', {
  props: {
    name: figma.string('Name'),
    label: figma.string('Label'),
  },
  example: ({ name, label }) => (
    <CheckboxGroup name={name} value={[]} onValueChange={() => {}}>
      <CheckboxGroupItem value="1">{label}</CheckboxGroupItem>
    </CheckboxGroup>
  ),
})
