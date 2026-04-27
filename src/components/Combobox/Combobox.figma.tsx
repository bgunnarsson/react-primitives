import { figma } from '@figma/code-connect'
import {
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxInput,
  ComboboxList,
  ComboboxItem,
} from './Combobox'

figma.connect(Combobox, 'FIGMA_COMPONENT_URL', {
  props: {
    placeholder: figma.string('Placeholder'),
  },
  example: ({ placeholder }) => (
    <Combobox>
      <ComboboxTrigger>{placeholder}</ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder={placeholder} />
        <ComboboxList>
          <ComboboxItem value="1">Option</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
})
