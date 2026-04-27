import { figma } from '@figma/code-connect'
import { FileInput } from './FileInput'

figma.connect(FileInput, 'FIGMA_COMPONENT_URL', {
  props: {
    accept: figma.string('Accept'),
    multiple: figma.boolean('Multiple'),
  },
  example: ({ accept, multiple }) => <FileInput accept={accept} multiple={multiple} />,
})
