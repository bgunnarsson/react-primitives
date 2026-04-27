import type React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
} from './ContextMenu'

const meta = {
  title: 'Primitives/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

const menuStyle: React.CSSProperties = {
  background: 'white',
  border: '1px solid #e5e7eb',
  borderRadius: 8,
  padding: '4px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
  minWidth: 180,
  fontSize: 14,
}
const itemStyle: React.CSSProperties = { padding: '7px 12px', borderRadius: 5, cursor: 'pointer', outline: 'none' }
const labelStyle: React.CSSProperties = { padding: '6px 12px', fontSize: 12, fontWeight: 600, color: '#6b7280' }
const separatorStyle: React.CSSProperties = { height: 1, background: '#e5e7eb', margin: '4px 0' }

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div
          style={{
            border: '2px dashed #d1d5db',
            borderRadius: 8,
            padding: 32,
            textAlign: 'center',
            fontSize: 14,
            color: '#6b7280',
            cursor: 'context-menu',
          }}
        >
          Right-click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent style={menuStyle}>
        <ContextMenuLabel style={labelStyle}>Actions</ContextMenuLabel>
        <ContextMenuItem style={itemStyle}>Edit</ContextMenuItem>
        <ContextMenuItem style={itemStyle}>Duplicate</ContextMenuItem>
        <ContextMenuSeparator style={separatorStyle} />
        <ContextMenuItem style={{ ...itemStyle, color: '#b91c1c' }}>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
