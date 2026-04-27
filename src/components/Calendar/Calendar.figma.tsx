import { figma } from '@figma/code-connect'
import { Calendar } from './Calendar'

figma.connect(Calendar, 'FIGMA_COMPONENT_URL', {
  props: {
    mode: figma.enum('Mode', {
      single: 'single',
      multiple: 'multiple',
      range: 'range',
    }),
  },
  example: ({ mode }) => <Calendar mode={mode as 'single'} />,
})
