import React from 'react'
import { figma } from '@figma/code-connect'
import { Spinner } from './Spinner'

figma.connect(Spinner, 'FIGMA_COMPONENT_URL', {
  props: {
    size: figma.enum('Size', {
      Small: 16,
      Medium: 24,
      Large: 32,
    }),
  },
  example: ({ size }) => <Spinner size={size} />,
})
