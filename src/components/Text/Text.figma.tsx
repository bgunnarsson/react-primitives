import React from 'react'
import { figma } from '@figma/code-connect'
import { Text } from './Text'

figma.connect(Text, 'FIGMA_COMPONENT_URL', {
  props: {
    as: figma.enum('Element', {
      Paragraph: 'p',
      Span: 'span',
      H1: 'h1',
      H2: 'h2',
      H3: 'h3',
      H4: 'h4',
      H5: 'h5',
      H6: 'h6',
    }),
    children: figma.string('Content'),
  },
  example: ({ as, children }) => <Text as={as}>{children}</Text>,
})
