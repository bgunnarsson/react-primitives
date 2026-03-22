import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FormField, FormLabel, FormControl, FormMessage } from './Form'
import { Input } from '../Input'

const meta = {
  title: 'Primitives/Form',
  component: FormField,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'text' },
  },
} satisfies Meta<typeof FormField>

export default meta
type Story = StoryObj<typeof meta>

const fieldStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 4, width: 320 }
const labelStyle: React.CSSProperties = { fontSize: 13, fontWeight: 500, color: '#374151' }
const inputStyle: React.CSSProperties = { padding: '8px 12px', fontSize: 14, borderRadius: 6, border: '1px solid #d1d5db', outline: 'none', background: 'white', color: '#111827' }
const inputErrorStyle: React.CSSProperties = { ...inputStyle, borderColor: '#ef4444' }
const messageStyle: React.CSSProperties = { fontSize: 12, color: '#ef4444', margin: 0 }

export const Default: Story = {
  render: () => (
    <FormField style={fieldStyle}>
      <FormLabel style={labelStyle}>Email</FormLabel>
      <FormControl>
        <Input type="email" placeholder="you@example.com" style={inputStyle} />
      </FormControl>
    </FormField>
  ),
}

export const WithError: Story = {
  render: () => (
    <FormField error="Email is required" style={fieldStyle}>
      <FormLabel style={labelStyle}>Email</FormLabel>
      <FormControl>
        <Input type="email" placeholder="you@example.com" style={inputErrorStyle} />
      </FormControl>
      <FormMessage style={messageStyle} />
    </FormField>
  ),
}
