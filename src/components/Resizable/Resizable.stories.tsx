import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './Resizable'

const meta = {
  title: 'Primitives/Resizable',
  component: ResizablePanelGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

const groupStyle: React.CSSProperties = {
  width: 600,
  height: 300,
  border: '1px solid #e5e7eb',
  borderRadius: 8,
  overflow: 'hidden',
}
const panelStyle: React.CSSProperties = {
  padding: 16,
  background: '#fafafa',
  fontSize: 14,
  overflow: 'auto',
}
const handleStyle: React.CSSProperties = {
  width: 4,
  background: '#e5e7eb',
  cursor: 'col-resize',
}

export const HorizontalSplit: Story = {
  render: () => (
    <ResizablePanelGroup orientation="horizontal" style={groupStyle}>
      <ResizablePanel defaultSize={30} minSize={15} style={panelStyle}>
        Sidebar
      </ResizablePanel>
      <ResizableHandle style={handleStyle} />
      <ResizablePanel defaultSize={70} style={panelStyle}>
        Main content — drag the divider to resize.
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

const vertGroupStyle: React.CSSProperties = { ...groupStyle, height: 360 }
const vertHandleStyle: React.CSSProperties = { height: 4, background: '#e5e7eb', cursor: 'row-resize' }

export const VerticalThreePanel: Story = {
  render: () => (
    <ResizablePanelGroup orientation="vertical" style={vertGroupStyle}>
      <ResizablePanel defaultSize={25} style={panelStyle}>
        Top
      </ResizablePanel>
      <ResizableHandle style={vertHandleStyle} />
      <ResizablePanel defaultSize={50} style={panelStyle}>
        Middle
      </ResizablePanel>
      <ResizableHandle style={vertHandleStyle} />
      <ResizablePanel defaultSize={25} style={panelStyle}>
        Bottom
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}
