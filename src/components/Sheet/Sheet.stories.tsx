import type React from 'react'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetClose } from './Sheet'

const meta = {
  title: 'Primitives/Sheet',
  component: Sheet,
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

const overlayStyle: React.CSSProperties = { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)' }
const panelBase: React.CSSProperties = {
  position: 'fixed',
  background: 'white',
  padding: 24,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
}
const triggerStyle: React.CSSProperties = {
  padding: '8px 16px',
  borderRadius: 6,
  border: 'none',
  background: '#3b82f6',
  color: 'white',
  fontSize: 14,
  cursor: 'pointer',
  fontWeight: 500,
}
const closeStyle: React.CSSProperties = {
  padding: '7px 14px',
  borderRadius: 6,
  border: '1px solid #e5e7eb',
  background: 'white',
  fontSize: 13,
  cursor: 'pointer',
  alignSelf: 'flex-start',
}

const sides: Record<string, React.CSSProperties> = {
  right: { ...panelBase, top: 0, right: 0, bottom: 0, width: 320, boxShadow: '-4px 0 24px rgba(0,0,0,0.12)' },
  left: { ...panelBase, top: 0, left: 0, bottom: 0, width: 320, boxShadow: '4px 0 24px rgba(0,0,0,0.12)' },
  bottom: { ...panelBase, left: 0, right: 0, bottom: 0, height: 320, boxShadow: '0 -4px 24px rgba(0,0,0,0.12)' },
  top: { ...panelBase, left: 0, right: 0, top: 0, height: 320, boxShadow: '0 4px 24px rgba(0,0,0,0.12)' },
}

function StorySheet({ side }: { side: 'right' | 'left' | 'bottom' | 'top' }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button type="button" style={triggerStyle} onClick={() => setOpen(true)}>
        Open ({side})
      </button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side={side} style={sides[side]} overlayStyle={overlayStyle}>
          <SheetTitle style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Sheet title</SheetTitle>
          <SheetDescription style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>
            Sheet description goes here.
          </SheetDescription>
          <SheetClose style={closeStyle}>Close</SheetClose>
        </SheetContent>
      </Sheet>
    </>
  )
}

export const Right: Story = { render: () => <StorySheet side="right" /> }
export const Left: Story = { render: () => <StorySheet side="left" /> }
export const Bottom: Story = { render: () => <StorySheet side="bottom" /> }
export const Top: Story = { render: () => <StorySheet side="top" /> }
