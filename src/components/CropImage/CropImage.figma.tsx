import { figma } from '@figma/code-connect'
import { CropImage } from './CropImage'

figma.connect(CropImage, 'FIGMA_COMPONENT_URL', {
  props: {
    identifier: figma.string('Identifier'),
    alt: figma.string('Alt'),
    src: figma.string('Src'),
  },
  example: ({ identifier, alt, src }) => (
    <CropImage
      identifier={identifier}
      alt={alt}
      mobile={{ src, width: 420, height: 560 }}
      desktop={{ src, width: 1440, height: 600 }}
    />
  ),
})
