import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PasswordInput } from './PasswordInput'

const meta = {
  title: 'Primitives/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <PasswordInput
      placeholder="Enter password"
      style={{ display: 'inline-flex', border: '1px solid #d1d5db', borderRadius: 6, overflow: 'hidden' }}
      inputStyle={{ border: 'none', outline: 'none', padding: '8px 12px' }}
      toggleStyle={{ border: 'none', background: '#f9fafb', padding: '0 12px', cursor: 'pointer' }}
    />
  ),
}

export const Controlled: Story = {
  render: () => {
    const [visible, setVisible] = React.useState(false)
    return (
      <PasswordInput
        visible={visible}
        onVisibilityChange={setVisible}
        defaultValue="hunter2"
        style={{ display: 'inline-flex', border: '1px solid #d1d5db', borderRadius: 6, overflow: 'hidden' }}
        inputStyle={{ border: 'none', outline: 'none', padding: '8px 12px' }}
        toggleStyle={{ border: 'none', background: '#f9fafb', padding: '0 12px', cursor: 'pointer' }}
      />
    )
  },
}

export const CustomToggle: Story = {
  render: () => (
    <PasswordInput
      placeholder="Enter password"
      toggleLabel={(v) => (v ? '🙈' : '👁')}
      style={{ display: 'inline-flex', border: '1px solid #d1d5db', borderRadius: 6, overflow: 'hidden' }}
      inputStyle={{ border: 'none', outline: 'none', padding: '8px 12px' }}
      toggleStyle={{ border: 'none', background: '#f9fafb', padding: '0 12px', cursor: 'pointer' }}
    />
  ),
}
