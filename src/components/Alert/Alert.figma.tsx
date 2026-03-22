import React from 'react'
import { figma } from '@figma/code-connect'
import { Alert, AlertTitle, AlertDescription } from './Alert'

figma.connect(Alert, 'FIGMA_COMPONENT_URL', {
  props: {
    title: figma.string('Title'),
    description: figma.string('Description'),
  },
  example: ({ title, description }) => (
    <Alert>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  ),
})
