import React from 'react'
import { figma } from '@figma/code-connect'
import { Skeleton } from './Skeleton'

figma.connect(Skeleton, 'FIGMA_COMPONENT_URL', {
  props: {},
  example: () => <Skeleton />,
})
