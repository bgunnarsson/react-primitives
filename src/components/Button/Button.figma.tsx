import { figma } from '@figma/code-connect'
import { Button } from './Button'

// Replace 'FIGMA_COMPONENT_URL' with the actual Figma component URL
// after running: figma connect create <FIGMA_URL>
figma.connect(Button, 'FIGMA_COMPONENT_URL', {
  props: {
    children: figma.string('Label'),
    disabled: figma.boolean('Disabled'),
  },
  example: ({ children, disabled }) => <Button disabled={disabled}>{children}</Button>,
})
