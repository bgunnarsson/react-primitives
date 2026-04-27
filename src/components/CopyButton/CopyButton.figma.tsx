import { figma } from '@figma/code-connect'
import { CopyButton } from './CopyButton'

figma.connect(CopyButton, 'FIGMA_COMPONENT_URL', {
  props: {
    children: figma.string('Label'),
    disabled: figma.boolean('Disabled'),
  },
  example: ({ children, disabled }) => (
    <CopyButton value="" disabled={disabled}>{children}</CopyButton>
  ),
})
