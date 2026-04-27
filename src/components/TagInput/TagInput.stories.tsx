import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TagInput } from './TagInput'

const meta = {
  title: 'Primitives/TagInput',
  component: TagInput,
  tags: ['autodocs'],
} satisfies Meta<typeof TagInput>

export default meta
type Story = StoryObj<typeof meta>

const rootStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 4,
  padding: 6,
  border: '1px solid #d1d5db',
  borderRadius: 6,
  background: 'white',
  minWidth: 320,
}
const inputStyle: React.CSSProperties = {
  flex: 1,
  minWidth: 120,
  border: 'none',
  outline: 'none',
  fontSize: 14,
  padding: 4,
}

export const Default: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>(['react', 'typescript'])
    return (
      <div>
        <TagInput
          value={tags}
          onValueChange={setTags}
          placeholder="Add tags (Enter or comma)"
          style={rootStyle}
          inputStyle={inputStyle}
          renderTag={(tag, _i, remove) => (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '2px 4px 2px 8px',
                borderRadius: 4,
                background: '#eef2ff',
                color: '#3730a3',
                fontSize: 12,
              }}
            >
              {tag}
              <button
                type="button"
                aria-label={`Remove ${tag}`}
                onClick={remove}
                style={{
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  color: '#3730a3',
                  padding: '0 4px',
                  fontSize: 14,
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </span>
          )}
        />
        <p style={{ marginTop: 8, fontSize: 12, color: '#6b7280' }}>Tags: {tags.join(', ') || '—'}</p>
      </div>
    )
  },
}

export const MaxTags: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>([])
    return (
      <div>
        <TagInput
          value={tags}
          onValueChange={setTags}
          maxTags={3}
          placeholder="Up to 3 tags"
          style={rootStyle}
          inputStyle={inputStyle}
        />
        <p style={{ marginTop: 8, fontSize: 12, color: '#6b7280' }}>{tags.length}/3</p>
      </div>
    )
  },
}
