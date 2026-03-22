import React from 'react'
import { figma } from '@figma/code-connect'
import { Switch } from './Switch'

figma.connect(Switch, 'FIGMA_COMPONENT_URL', {
  props: {
    checked: figma.boolean('Checked'),
    disabled: figma.boolean('Disabled'),
  },
  example: ({ checked, disabled }) => (
    <Switch defaultChecked={checked} disabled={disabled} />
  ),
})
