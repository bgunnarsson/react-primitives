import React from 'react'
import { figma } from '@figma/code-connect'
import { Richtext } from './Richtext'

figma.connect(Richtext, 'FIGMA_COMPONENT_URL', {
  props: {
    html: figma.string('Content'),
  },
  example: ({ html }) => <Richtext html={html} />,
})
