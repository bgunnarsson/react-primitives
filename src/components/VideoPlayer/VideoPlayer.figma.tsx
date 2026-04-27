import { figma } from '@figma/code-connect'
import { VideoPlayer } from './VideoPlayer'

figma.connect(VideoPlayer, 'FIGMA_COMPONENT_URL', {
  props: {
    src: figma.string('Src'),
    poster: figma.string('Poster'),
  },
  example: ({ src, poster }) => <VideoPlayer src={src} poster={poster} controls />,
})
