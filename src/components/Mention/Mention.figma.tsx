import { figma } from '@figma/code-connect'
import { Mention } from './Mention'

figma.connect(Mention, 'FIGMA_COMPONENT_URL', {
  props: {
    placeholder: figma.string('Placeholder'),
  },
  example: ({ placeholder }) => (
    <Mention<string>
      value=""
      onValueChange={() => {}}
      items={[]}
      format={(item) => item}
    >
      {({ getInputProps }) => <input {...getInputProps()} placeholder={placeholder} />}
    </Mention>
  ),
})
