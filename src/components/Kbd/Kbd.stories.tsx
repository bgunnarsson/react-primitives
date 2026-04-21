import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Kbd } from './Kbd'

const meta = {
  title: 'Primitives/Kbd',
  component: Kbd,
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

const keyStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 20,
  height: 22,
  padding: '0 6px',
  border: '1px solid #e5e7eb',
  borderBottomWidth: 2,
  borderRadius: 4,
  background: '#f9fafb',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  fontSize: 11,
  color: '#374151',
}

export const Shortcut: Story = {
  render: () => (
    <p style={{ fontSize: 14, color: '#374151', display: 'flex', alignItems: 'center', gap: 6 }}>
      Press <Kbd style={keyStyle}>⌘</Kbd> + <Kbd style={keyStyle}>K</Kbd> to open the command palette.
    </p>
  ),
}
