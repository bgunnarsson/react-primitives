import React from 'react'
import { figma } from '@figma/code-connect'
import { Textarea } from './Textarea'

figma.connect(Textarea, 'FIGMA_COMPONENT_URL', {
  props: {
    placeholder: figma.string('Placeholder'),
    disabled: figma.boolean('Disabled'),
  },
  example: ({ placeholder, disabled }) => <Textarea placeholder={placeholder} disabled={disabled} />,
})
