import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from './AlertDialog'

const meta = {
  title: 'Primitives/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
} satisfies Meta<typeof AlertDialog>

export default meta
type Story = StoryObj<typeof meta>

const overlayStyle: React.CSSProperties = { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)' }
const contentStyle: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  background: 'white',
  borderRadius: 12,
  padding: 24,
  boxShadow: '0 8px 32px rgba(0,0,0,0.16)',
  minWidth: 320,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
}
const triggerStyle: React.CSSProperties = {
  padding: '8px 16px',
  borderRadius: 6,
  border: 'none',
  background: '#ef4444',
  color: 'white',
  fontSize: 14,
  cursor: 'pointer',
  fontWeight: 500,
}
const cancelStyle: React.CSSProperties = {
  padding: '7px 14px',
  borderRadius: 6,
  border: '1px solid #e5e7eb',
  background: 'white',
  fontSize: 13,
  cursor: 'pointer',
}
const actionStyle: React.CSSProperties = {
  padding: '7px 14px',
  borderRadius: 6,
  border: 'none',
  background: '#ef4444',
  color: 'white',
  fontSize: 13,
  cursor: 'pointer',
  fontWeight: 500,
}

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <button style={triggerStyle} onClick={() => setOpen(true)}>
          Delete item
        </button>
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent style={contentStyle} overlayStyle={overlayStyle}>
            <AlertDialogTitle style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>
              This action cannot be undone.
            </AlertDialogDescription>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <AlertDialogCancel style={cancelStyle}>Cancel</AlertDialogCancel>
              <AlertDialogAction style={actionStyle}>Delete</AlertDialogAction>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      </>
    )
  },
}
