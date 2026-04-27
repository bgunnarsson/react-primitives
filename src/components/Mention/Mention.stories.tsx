import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Mention } from './Mention'

const meta: Meta = {
  title: 'Primitives/Mention',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const USERS = [
  { id: '1', username: 'ada' },
  { id: '2', username: 'grace' },
  { id: '3', username: 'linus' },
  { id: '4', username: 'donald' },
  { id: '5', username: 'alan' },
]

const containerStyle: React.CSSProperties = { position: 'relative', display: 'inline-block', width: 320 }
const textareaStyle: React.CSSProperties = { width: '100%', minHeight: 80, padding: 8, fontFamily: 'inherit' }
const listStyle: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  margin: 0,
  padding: 4,
  listStyle: 'none',
  background: '#fff',
  border: '1px solid #d1d5db',
  borderRadius: 6,
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  zIndex: 10,
}
const itemStyle = (active: boolean): React.CSSProperties => ({
  padding: '6px 8px',
  borderRadius: 4,
  cursor: 'pointer',
  background: active ? '#eff6ff' : 'transparent',
  fontSize: 14,
})

export const Textarea: Story = {
  render: () => {
    const [value, setValue] = React.useState('Try typing @ada or @grace ')
    const [query, setQuery] = React.useState('')
    const filtered = USERS.filter((u) => u.username.toLowerCase().startsWith(query.toLowerCase()))
    return (
      <div style={containerStyle}>
        <Mention
          trigger="@"
          value={value}
          onValueChange={setValue}
          onQueryChange={setQuery}
          items={filtered}
          format={(u) => `@${u.username}`}
        >
          {({ open, activeIndex, getInputProps, getListProps, getItemProps }) => (
            <>
              <textarea {...getInputProps()} style={textareaStyle} placeholder="Mention someone with @" />
              {open && (
                <ul {...getListProps()} style={listStyle}>
                  {filtered.map((u, i) => (
                    <li key={u.id} {...getItemProps({ index: i, item: u })} style={itemStyle(i === activeIndex)}>
                      @{u.username}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </Mention>
      </div>
    )
  },
}

export const HashTrigger: Story = {
  render: () => {
    const tags = [
      { id: '1', name: 'react' },
      { id: '2', name: 'design' },
      { id: '3', name: 'a11y' },
      { id: '4', name: 'typescript' },
    ]
    const [value, setValue] = React.useState('')
    const [query, setQuery] = React.useState('')
    const filtered = tags.filter((t) => t.name.toLowerCase().startsWith(query.toLowerCase()))
    return (
      <div style={containerStyle}>
        <Mention
          trigger="#"
          value={value}
          onValueChange={setValue}
          onQueryChange={setQuery}
          items={filtered}
          format={(t) => `#${t.name}`}
        >
          {({ open, activeIndex, getInputProps, getListProps, getItemProps }) => (
            <>
              <input {...getInputProps()} style={{ width: '100%', padding: 8 }} placeholder="Tag with #" />
              {open && (
                <ul {...getListProps()} style={listStyle}>
                  {filtered.map((t, i) => (
                    <li key={t.id} {...getItemProps({ index: i, item: t })} style={itemStyle(i === activeIndex)}>
                      #{t.name}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </Mention>
      </div>
    )
  },
}
