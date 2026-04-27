import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Editable, EditablePreview, EditableInput, EditableTextarea, EditableControls } from './Editable'

const meta = {
  title: 'Primitives/Editable',
  component: Editable,
  tags: ['autodocs'],
} satisfies Meta<typeof Editable>

export default meta
type Story = StoryObj<typeof meta>

const previewStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '4px 8px',
  borderRadius: 4,
  cursor: 'text',
  minWidth: 120,
}
const inputStyle: React.CSSProperties = { padding: '4px 8px', borderRadius: 4, border: '1px solid #d1d5db' }

export const Default: Story = {
  render: () => (
    <Editable defaultValue="Click me to edit" placeholder="Untitled">
      <EditablePreview style={previewStyle} />
      <EditableInput style={inputStyle} />
    </Editable>
  ),
}

export const WithControls: Story = {
  render: () => (
    <Editable defaultValue="A title">
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <EditablePreview style={previewStyle} />
        <EditableInput style={inputStyle} />
        <EditableControls>
          {({ editing, startEdit, submit, cancel }) =>
            editing ? (
              <>
                <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={submit}>
                  Save
                </button>
                <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={cancel}>
                  Cancel
                </button>
              </>
            ) : (
              <button type="button" onClick={startEdit}>
                Edit
              </button>
            )
          }
        </EditableControls>
      </div>
    </Editable>
  ),
}

export const Multiline: Story = {
  render: () => (
    <Editable defaultValue="A longer note that wraps onto multiple lines." submitOnEnter={false}>
      <EditablePreview style={{ ...previewStyle, display: 'block', minWidth: 320 }} />
      <EditableTextarea style={{ ...inputStyle, width: 320, minHeight: 80, fontFamily: 'inherit' }} />
    </Editable>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState('Controlled value')
    return (
      <div>
        <Editable value={value} onValueChange={setValue}>
          <EditablePreview style={previewStyle} />
          <EditableInput style={inputStyle} />
        </Editable>
        <p style={{ marginTop: 8, fontSize: 12, color: '#6b7280' }}>Value: {JSON.stringify(value)}</p>
      </div>
    )
  },
}
