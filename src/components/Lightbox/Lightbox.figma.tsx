import { figma } from '@figma/code-connect'
import { Lightbox } from './Lightbox'

figma.connect(Lightbox, 'FIGMA_COMPONENT_URL', {
  props: {
    open: figma.boolean('Open'),
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  example: ({ open }) => (
    <Lightbox open={open} close={() => {}} slides={[{ src: '/image.jpg', alt: 'Image' }]} {...({} as any)} />
  ),
})
