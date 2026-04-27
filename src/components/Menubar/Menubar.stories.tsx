import type React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarPortal,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from './Menubar'

const meta = {
  title: 'Primitives/Menubar',
  component: Menubar,
  tags: ['autodocs'],
} satisfies Meta<typeof Menubar>

export default meta
type Story = StoryObj<typeof meta>

const barStyle: React.CSSProperties = {
  display: 'inline-flex',
  gap: 2,
  padding: 4,
  borderRadius: 8,
  background: 'white',
  border: '1px solid #e5e7eb',
}
const triggerStyle: React.CSSProperties = {
  padding: '6px 10px',
  borderRadius: 6,
  background: 'transparent',
  border: 'none',
  fontSize: 13,
  cursor: 'pointer',
}
const contentStyle: React.CSSProperties = {
  minWidth: 180,
  padding: 4,
  borderRadius: 8,
  background: 'white',
  border: '1px solid #e5e7eb',
  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
}
const itemStyle: React.CSSProperties = {
  padding: '6px 8px',
  borderRadius: 4,
  fontSize: 13,
  cursor: 'pointer',
  outline: 'none',
}
const sepStyle: React.CSSProperties = { height: 1, background: '#e5e7eb', margin: '4px 0' }

export const AppMenu: Story = {
  render: () => (
    <Menubar style={barStyle}>
      <MenubarMenu>
        <MenubarTrigger style={triggerStyle}>File</MenubarTrigger>
        <MenubarPortal>
          <MenubarContent style={contentStyle}>
            <MenubarItem style={itemStyle}>New</MenubarItem>
            <MenubarItem style={itemStyle}>Open</MenubarItem>
            <MenubarSeparator style={sepStyle} />
            <MenubarItem style={itemStyle}>Save</MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger style={triggerStyle}>Edit</MenubarTrigger>
        <MenubarPortal>
          <MenubarContent style={contentStyle}>
            <MenubarItem style={itemStyle}>Undo</MenubarItem>
            <MenubarItem style={itemStyle}>Redo</MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger style={triggerStyle}>View</MenubarTrigger>
        <MenubarPortal>
          <MenubarContent style={contentStyle}>
            <MenubarItem style={itemStyle}>Zoom in</MenubarItem>
            <MenubarItem style={itemStyle}>Zoom out</MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>
    </Menubar>
  ),
}
