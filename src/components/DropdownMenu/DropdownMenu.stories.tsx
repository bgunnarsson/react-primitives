import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel,
} from './DropdownMenu'

const meta = {
  title: 'Primitives/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

const menuStyle: React.CSSProperties = { background: 'white', border: '1px solid #e5e7eb', borderRadius: 8, padding: '4px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', minWidth: 180, fontSize: 14 }
const itemStyle: React.CSSProperties = { padding: '7px 12px', borderRadius: 5, cursor: 'pointer', outline: 'none' }
const labelStyle: React.CSSProperties = { padding: '6px 12px', fontSize: 12, fontWeight: 600, color: '#6b7280' }
const separatorStyle: React.CSSProperties = { height: 1, background: '#e5e7eb', margin: '4px 0' }

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #e5e7eb', cursor: 'pointer' }}>
          Open menu
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent style={menuStyle}>
        <DropdownMenuLabel style={labelStyle}>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator style={separatorStyle} />
        <DropdownMenuItem style={itemStyle}>Profile</DropdownMenuItem>
        <DropdownMenuItem style={itemStyle}>Settings</DropdownMenuItem>
        <DropdownMenuSeparator style={separatorStyle} />
        <DropdownMenuItem style={{ ...itemStyle, color: '#b91c1c' }}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
