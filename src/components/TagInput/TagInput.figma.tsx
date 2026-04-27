import { figma } from '@figma/code-connect'
import { TagInput } from './TagInput'

figma.connect(TagInput, 'FIGMA_COMPONENT_URL', {
  props: {
    placeholder: figma.string('Placeholder'),
  },
  example: ({ placeholder }) => (
    <TagInput placeholder={placeholder} value={[]} onValueChange={() => {}} />
  ),
})
