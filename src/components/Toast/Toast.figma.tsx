import React from 'react'
import { figma } from '@figma/code-connect'
import { Toaster } from './Toast'

figma.connect(Toaster, 'FIGMA_COMPONENT_URL', {
  props: {
    position: figma.enum('Position', {
      'top-left': 'top-left',
      'top-right': 'top-right',
      'bottom-left': 'bottom-left',
      'bottom-right': 'bottom-right',
    }),
  },
  example: ({ position }) => <Toaster position={position} />,
})
