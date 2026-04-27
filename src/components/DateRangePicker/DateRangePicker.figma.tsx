import { figma } from '@figma/code-connect'
import { DateRangePicker } from './DateRangePicker'

figma.connect(DateRangePicker, 'FIGMA_COMPONENT_URL', {
  props: {
    placeholder: figma.string('Placeholder'),
    disabled: figma.boolean('Disabled'),
  },
  example: ({ placeholder, disabled }) => <DateRangePicker placeholder={placeholder} disabled={disabled} />,
})
