import { figma } from '@figma/code-connect'
import { Box } from './Box'

figma.connect(Box, 'FIGMA_COMPONENT_URL', {
  props: {
    children: figma.string('Content'),
  },
  example: ({ children }) => <Box>{children}</Box>,
})
