import React from 'react'
import { figma } from '@figma/code-connect'
import { Card, CardHeader, CardBody } from './Card'

figma.connect(Card, 'FIGMA_COMPONENT_URL', {
  props: {
    title: figma.string('Title'),
    children: figma.string('Content'),
  },
  example: ({ title, children }) => (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  ),
})
