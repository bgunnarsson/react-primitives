import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from './SearchInput'

const meta = {
  title: 'Primitives/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

const wrapStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  border: '1px solid #d1d5db',
  borderRadius: 6,
  padding: '4px 8px',
  width: 280,
}
const inputStyle: React.CSSProperties = { border: 'none', outline: 'none', flex: 1, padding: 4 }
const iconStyle: React.CSSProperties = { color: '#6b7280' }
const clearStyle: React.CSSProperties = { border: 'none', background: 'transparent', cursor: 'pointer', color: '#6b7280' }

export const Default: Story = {
  render: () => (
    <SearchInput
      placeholder="Search…"
      icon="🔍"
      style={wrapStyle}
      inputStyle={inputStyle}
      iconStyle={iconStyle}
      clearStyle={clearStyle}
    />
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState('hello')
    return (
      <div>
        <SearchInput
          value={value}
          onValueChange={setValue}
          placeholder="Search…"
          icon="🔍"
          style={wrapStyle}
          inputStyle={inputStyle}
          iconStyle={iconStyle}
          clearStyle={clearStyle}
        />
        <p style={{ marginTop: 8, fontSize: 12, color: '#6b7280' }}>Value: {JSON.stringify(value)}</p>
      </div>
    )
  },
}
