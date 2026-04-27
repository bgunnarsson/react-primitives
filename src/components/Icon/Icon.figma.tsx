import { figma } from '@figma/code-connect'
import { Icon } from './Icon'

figma.connect(Icon, 'FIGMA_COMPONENT_URL', {
  props: {
    name: figma.string('Name'),
  },
  example: ({ name }) => <Icon name={name} />,
})
