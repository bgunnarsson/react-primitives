import type React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { Label } from '../Label'

const meta = {
  title: 'Primitives/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

const inputStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '8px 12px',
  fontSize: 14,
  borderRadius: 6,
  border: '1px solid #d1d5db',
  outline: 'none',
  background: 'white',
  color: '#111827',
  boxSizing: 'border-box',
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
    <div style={{ width: 320 }}>
      <Input style={inputStyle} placeholder="Enter text..." {...args} />
    </div>
  ),
}

export const WithLabel: Story = {
  render: (args) => (
    <div style={{ width: 320, display: 'flex', flexDirection: 'column' }}>
      <Label htmlFor="input-with-label" style={labelStyle}>
        Email address
      </Label>
      <Input id="input-with-label" type="email" placeholder="you@example.com" style={inputStyle} {...args} />
    </div>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <div style={{ width: 320 }}>
      <Input
        style={{ ...inputStyle, opacity: 0.5, cursor: 'not-allowed', background: '#f9fafb' }}
        placeholder="Disabled input"
        disabled
        {...args}
      />
    </div>
  ),
}
