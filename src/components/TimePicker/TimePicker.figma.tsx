import { figma } from '@figma/code-connect'
import { TimePicker } from './TimePicker'

figma.connect(TimePicker, 'FIGMA_COMPONENT_URL', {
  props: {
    placeholder: figma.string('Placeholder'),
  },
  example: ({ placeholder }) => <TimePicker placeholder={placeholder} />,
})
