import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Toolbar, ToolbarButton, ToolbarSeparator, ToolbarToggleGroup, ToolbarToggleItem, ToolbarLink } from './Toolbar'

const meta = {
  title: 'Primitives/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Toolbar>

export default meta
type Story = StoryObj<typeof meta>

const barStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
  padding: 6,
  border: '1px solid #e5e7eb',
  borderRadius: 8,
  background: 'white',
}
const btnStyle: React.CSSProperties = {
  padding: '6px 10px',
  borderRadius: 6,
  border: 'none',
  background: 'transparent',
  fontSize: 13,
  cursor: 'pointer',
}
const sepStyle: React.CSSProperties = { width: 1, alignSelf: 'stretch', background: '#e5e7eb', margin: '0 4px' }
const toggleStyle: React.CSSProperties = { ...btnStyle, fontWeight: 600 }

export const FormattingBar: Story = {
  render: () => (
    <Toolbar style={barStyle} aria-label="Formatting">
      <ToolbarToggleGroup type="multiple" aria-label="Text formatting">
        <ToolbarToggleItem value="bold" style={toggleStyle}>
          B
        </ToolbarToggleItem>
        <ToolbarToggleItem value="italic" style={{ ...toggleStyle, fontStyle: 'italic' }}>
          I
        </ToolbarToggleItem>
        <ToolbarToggleItem value="underline" style={{ ...toggleStyle, textDecoration: 'underline' }}>
          U
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator style={sepStyle} />
      <ToolbarToggleGroup type="single" defaultValue="left" aria-label="Alignment">
        <ToolbarToggleItem value="left" style={toggleStyle}>
          Left
        </ToolbarToggleItem>
        <ToolbarToggleItem value="center" style={toggleStyle}>
          Center
        </ToolbarToggleItem>
        <ToolbarToggleItem value="right" style={toggleStyle}>
          Right
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator style={sepStyle} />
      <ToolbarLink href="#" style={{ ...btnStyle, color: '#3b82f6' }}>
        Help
      </ToolbarLink>
      <ToolbarButton style={btnStyle}>Share</ToolbarButton>
    </Toolbar>
  ),
}
