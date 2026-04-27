import { figma } from '@figma/code-connect'
import { CodeBlock } from './CodeBlock'

figma.connect(CodeBlock, 'FIGMA_COMPONENT_URL', {
  props: {
    code: figma.string('Code'),
    title: figma.string('Title'),
  },
  example: ({ code, title }) => <CodeBlock code={code} title={title} />,
})
