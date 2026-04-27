import { figma } from '@figma/code-connect'
import { Toggle } from './Toggle'

figma.connect(Toggle, 'FIGMA_COMPONENT_URL', {
  props: {
    pressed: figma.boolean('Pressed'),
    children: figma.string('Label'),
  },
  example: ({ pressed, children }) => <Toggle defaultPressed={pressed}>{children}</Toggle>,
})
