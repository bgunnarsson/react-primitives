import { figma } from '@figma/code-connect'
import { Embed } from './Embed'

figma.connect(Embed, 'FIGMA_COMPONENT_URL', {
  props: {
    src: figma.string('Src'),
    title: figma.string('Title'),
  },
  example: ({ src, title }) => <Embed src={src} title={title} />,
})
