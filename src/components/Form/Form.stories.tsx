import type React from 'react'
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
const messageStyle: React.CSSProperties = { fontSize: 12, color: '#ef4444', margin: 0 }
const styles = (
  <style>{`
    .form-story-input { padding: 8px 12px; font-size: 14px; border-radius: 6px; border: 1px solid #d1d5db; outline: 0; background: white; color: #111827; }
    .form-story-input-error { border-color: #ef4444; }
  `}</style>
)

export const Default: Story = {
  render: () => (
    <FormField style={fieldStyle}>
      {styles}
      <FormLabel style={labelStyle}>Email</FormLabel>
      <FormControl>
        <Input type="email" placeholder="you@example.com" inputClassName="form-story-input" />
      </FormControl>
    </FormField>
  ),
}

export const WithError: Story = {
  render: () => (
    <FormField error="Email is required" style={fieldStyle}>
      {styles}
      <FormLabel style={labelStyle}>Email</FormLabel>
      <FormControl>
        <Input type="email" placeholder="you@example.com" inputClassName="form-story-input form-story-input-error" />
      </FormControl>
      <FormMessage style={messageStyle} />
    </FormField>
  ),
}
