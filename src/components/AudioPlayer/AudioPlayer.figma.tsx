import { figma } from '@figma/code-connect'
import { AudioPlayer } from './AudioPlayer'

figma.connect(AudioPlayer, 'FIGMA_COMPONENT_URL', {
  props: {
    src: figma.string('Src'),
  },
  example: ({ src }) => <AudioPlayer src={src} controls />,
})
