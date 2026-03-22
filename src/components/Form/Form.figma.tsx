import React from 'react'
import { figma } from '@figma/code-connect'
import { FormField, FormLabel, FormControl, FormMessage } from './Form'
import { Input } from '../Input'

figma.connect(FormField, 'FIGMA_COMPONENT_URL', {
  props: {
    label: figma.string('Label'),
    error: figma.string('Error'),
  },
  example: ({ label, error }) => (
    <FormField error={error}>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input />
      </FormControl>
      <FormMessage />
    </FormField>
  ),
})
