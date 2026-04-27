import { figma } from '@figma/code-connect'
import { Image } from './Image'

figma.connect(Image, 'FIGMA_COMPONENT_URL', {
  props: {
    src: figma.string('Src'),
    alt: figma.string('Alt'),
  },
  example: ({ src, alt }) => <Image src={src} alt={alt} width={800} height={400} />,
})
