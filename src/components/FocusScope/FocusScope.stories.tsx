import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FocusScope } from './FocusScope'

const meta = {
  title: 'Primitives/FocusScope',
  component: FocusScope,
  tags: ['autodocs'],
} satisfies Meta<typeof FocusScope>

export default meta
type Story = StoryObj<typeof meta>

const panel: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 16,
  border: '1px solid #d1d5db',
  borderRadius: 8,
  width: 320,
}

export const Trapped: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <button type="button" onClick={() => setOpen(true)}>
          Open trapped scope
        </button>
        <input placeholder="Outside input" />
        {open && (
          <FocusScope style={panel}>
            <p style={{ margin: 0, fontSize: 14 }}>
              Tab cycles between fields. Outside elements are unreachable until you close.
            </p>
            <input placeholder="First field" />
            <input placeholder="Second field" />
            <button type="button" onClick={() => setOpen(false)}>
              Close
            </button>
          </FocusScope>
        )}
      </div>
    )
  },
}

export const NoTrap: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <input placeholder="Above" />
      <FocusScope trapped={false} style={panel}>
        <p style={{ margin: 0, fontSize: 14 }}>autoFocus only — Tab leaves the scope normally.</p>
        <input placeholder="Inside A" />
        <input placeholder="Inside B" />
      </FocusScope>
      <input placeholder="Below" />
    </div>
  ),
}
