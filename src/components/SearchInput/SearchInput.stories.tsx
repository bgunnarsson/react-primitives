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

const styles = (
  <style>{`
    .search-input-story-input { border: 0; outline: 0; flex: 1; padding: 4px; }
    .search-input-story-icon { color: #6b7280; }
    .search-input-story-clear { border: 0; background: transparent; cursor: pointer; color: #6b7280; }
  `}</style>
)

export const Default: Story = {
  render: () => (
    <>
      {styles}
      <SearchInput
        placeholder="Search…"
        icon="🔍"
        style={wrapStyle}
        inputClassName="search-input-story-input"
        iconClassName="search-input-story-icon"
        clearClassName="search-input-story-clear"
      />
    </>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState('hello')
    return (
      <div>
        {styles}
        <SearchInput
          value={value}
          onValueChange={setValue}
          placeholder="Search…"
          icon="🔍"
          style={wrapStyle}
          inputClassName="search-input-story-input"
          iconClassName="search-input-story-icon"
          clearClassName="search-input-story-clear"
        />
        <p style={{ marginTop: 8, fontSize: 12, color: '#6b7280' }}>Value: {JSON.stringify(value)}</p>
      </div>
    )
  },
}
