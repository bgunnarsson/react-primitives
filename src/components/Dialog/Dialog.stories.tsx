import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from './Dialog'

const meta = {
  title: 'Primitives/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

const overlayStyle: React.CSSProperties = { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)' }
const contentStyle: React.CSSProperties = { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 8px 32px rgba(0,0,0,0.16)', minWidth: 320, display: 'flex', flexDirection: 'column', gap: 12 }
const triggerStyle: React.CSSProperties = { padding: '8px 16px', borderRadius: 6, border: 'none', background: '#3b82f6', color: 'white', fontSize: 14, cursor: 'pointer', fontWeight: 500 }
const closeStyle: React.CSSProperties = { padding: '7px 14px', borderRadius: 6, border: '1px solid #e5e7eb', background: 'white', fontSize: 13, cursor: 'pointer', alignSelf: 'flex-end' }

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <button style={triggerStyle} onClick={() => setOpen(true)}>Open dialog</button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent style={contentStyle} overlayStyle={overlayStyle}>
            <DialogTitle style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Dialog title</DialogTitle>
            <DialogDescription style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>Dialog description goes here.</DialogDescription>
            <DialogClose style={closeStyle}>Close</DialogClose>
          </DialogContent>
        </Dialog>
      </>
    )
  },
}
