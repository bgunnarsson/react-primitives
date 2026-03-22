import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './Textarea'
import { Label } from '../Label'

const meta = {
  title: 'Primitives/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    rows: { control: { type: 'number', min: 1, max: 20 } },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

const textareaStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '10px 12px',
  fontSize: 14,
  lineHeight: 1.6,
  borderRadius: 6,
  border: '1px solid #d1d5db',
  outline: 'none',
  background: 'white',
  color: '#111827',
  resize: 'vertical',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 13,
  fontWeight: 500,
  color: '#374151',
  marginBottom: 4,
}

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 360 }}>
      <Textarea style={textareaStyle} placeholder="Enter text..." rows={4} {...args} />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div style={{ width: 360, display: 'flex', flexDirection: 'column' }}>
      <Label htmlFor="textarea-label" style={labelStyle}>Message</Label>
      <Textarea id="textarea-label" style={textareaStyle} placeholder="Write your message here..." rows={4} />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <Textarea
        style={{ ...textareaStyle, opacity: 0.5, cursor: 'not-allowed', background: '#f9fafb' }}
        placeholder="Disabled textarea"
        rows={4}
        disabled
      />
    </div>
  ),
}
