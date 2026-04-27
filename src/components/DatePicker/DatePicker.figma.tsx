import { figma } from '@figma/code-connect'
import { DatePicker } from './DatePicker'

figma.connect(DatePicker, 'FIGMA_COMPONENT_URL', {
  props: {
    placeholder: figma.string('Placeholder'),
  },
  example: ({ placeholder }) => <DatePicker placeholder={placeholder} />,
})
