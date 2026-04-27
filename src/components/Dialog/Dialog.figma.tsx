import React from 'react'
import { figma } from '@figma/code-connect'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from './Dialog'

figma.connect(Dialog, 'FIGMA_COMPONENT_URL', {
  props: {
    title: figma.string('Title'),
    description: figma.string('Description'),
    triggerLabel: figma.string('Trigger Label'),
  },
  example: ({ title, description, triggerLabel }) => (
    <Dialog>
      <DialogTrigger>{triggerLabel}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
        <DialogClose>Close</DialogClose>
      </DialogContent>
    </Dialog>
  ),
})
