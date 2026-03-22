import React from 'react'
import { figma } from '@figma/code-connect'
import { Input, Label } from './Input'

figma.connect(Input, 'FIGMA_COMPONENT_URL', {
  props: {
    placeholder: figma.string('Placeholder'),
    disabled: figma.boolean('Disabled'),
  },
  example: ({ placeholder, disabled }) => (
    <div>
      <Label htmlFor="input">Label</Label>
      <Input id="input" placeholder={placeholder} disabled={disabled} />
    </div>
  ),
})
