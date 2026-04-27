import { figma } from '@figma/code-connect'
import { Editable, EditablePreview, EditableInput } from './Editable'

figma.connect(Editable, 'FIGMA_COMPONENT_URL', {
  props: {
    value: figma.string('Value'),
    placeholder: figma.string('Placeholder'),
  },
  example: ({ value, placeholder }) => (
    <Editable defaultValue={value} placeholder={placeholder}>
      <EditablePreview />
      <EditableInput />
    </Editable>
  ),
})
