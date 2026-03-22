import React from 'react'
import { figma } from '@figma/code-connect'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './Select'

figma.connect(Select, 'FIGMA_COMPONENT_URL', {
  props: {
    placeholder: figma.string('Placeholder'),
  },
  example: ({ placeholder }) => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="item-1">Item 1</SelectItem>
      </SelectContent>
    </Select>
  ),
})
