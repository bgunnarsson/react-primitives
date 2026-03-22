import React from 'react'
import { figma } from '@figma/code-connect'
import { Avatar, AvatarImage, AvatarFallback } from './Avatar'

figma.connect(Avatar, 'FIGMA_COMPONENT_URL', {
  props: {
    src: figma.string('Image'),
    fallback: figma.string('Fallback'),
  },
  example: ({ src, fallback }) => (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  ),
})
