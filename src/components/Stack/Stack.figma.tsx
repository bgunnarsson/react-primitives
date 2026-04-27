import { figma } from '@figma/code-connect'
import { Stack } from './Stack'

figma.connect(Stack, 'FIGMA_COMPONENT_URL', {
  props: {
    direction: figma.enum('Direction', {
      row: 'row',
      column: 'column',
    }),
    children: figma.string('Content'),
  },
  example: ({ direction, children }) => <Stack direction={direction as 'row' | 'column'}>{children}</Stack>,
})
