import { figma } from '@figma/code-connect'
import { SearchInput } from './SearchInput'

figma.connect(SearchInput, 'FIGMA_COMPONENT_URL', {
  props: {
    placeholder: figma.string('Placeholder'),
    disabled: figma.boolean('Disabled'),
  },
  example: ({ placeholder, disabled }) => <SearchInput placeholder={placeholder} disabled={disabled} />,
})
