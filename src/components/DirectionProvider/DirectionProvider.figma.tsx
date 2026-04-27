import { figma } from '@figma/code-connect'
import { DirectionProvider } from './DirectionProvider'

figma.connect(DirectionProvider, 'FIGMA_COMPONENT_URL', {
  props: {
    dir: figma.enum('Direction', { ltr: 'ltr', rtl: 'rtl' }),
  },
  example: ({ dir }) => <DirectionProvider dir={dir as 'ltr' | 'rtl'}>{null}</DirectionProvider>,
})
