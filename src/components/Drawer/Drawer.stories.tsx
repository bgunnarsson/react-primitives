import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHandle,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerPortal,
} from './Drawer'

const meta = {
  title: 'Primitives/Drawer',
  component: Drawer,
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

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

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <button style={triggerStyle} onClick={() => setOpen(true)}>
          Open drawer
        </button>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerPortal>
            <DrawerOverlay style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
            <DrawerContent
              style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'white',
                borderRadius: '12px 12px 0 0',
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                boxShadow: '0 -4px 24px rgba(0,0,0,0.12)',
              }}
            >
              <DrawerHandle
                style={{ width: 40, height: 4, background: '#e5e7eb', borderRadius: 2, margin: '0 auto 8px' }}
              />
              <DrawerTitle style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Drawer title</DrawerTitle>
              <DrawerDescription style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>
                Drag down or click outside to dismiss.
              </DrawerDescription>
              <DrawerClose style={closeStyle}>Close</DrawerClose>
            </DrawerContent>
          </DrawerPortal>
        </Drawer>
      </>
    )
  },
}
