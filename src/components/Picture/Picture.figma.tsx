import { figma } from '@figma/code-connect'
import { Picture } from './Picture'

figma.connect(Picture, 'FIGMA_COMPONENT_URL', {
  props: {
    src: figma.string('Src'),
    alt: figma.string('Alt'),
  },
  example: ({ src, alt }) => <Picture src={src} alt={alt} />,
})
