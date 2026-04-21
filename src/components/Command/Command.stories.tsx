import React, { useState, useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
  CommandEmpty,
  CommandSeparator,
} from './Command'

const meta = {
  title: 'Primitives/Command',
  component: Command,
  tags: ['autodocs'],
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

const rootStyle: React.CSSProperties = { width: 420, maxWidth: '100%', borderRadius: 12, border: '1px solid #e5e7eb', background: 'white', overflow: 'hidden' }
const inputStyle: React.CSSProperties = { width: '100%', border: 'none', borderBottom: '1px solid #f3f4f6', padding: 12, fontSize: 14, outline: 'none' }
const listStyle: React.CSSProperties = { maxHeight: 320, overflow: 'auto', padding: 4 }
const itemStyle: React.CSSProperties = { padding: '8px 10px', borderRadius: 6, fontSize: 13, cursor: 'pointer', outline: 'none' }
const groupLabelStyle: React.CSSProperties = { padding: '8px 10px 4px', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', color: '#6b7280' }
const emptyStyle: React.CSSProperties = { padding: 16, fontSize: 13, color: '#6b7280', textAlign: 'center' }

export const Inline: Story = {
  render: () => (
    <Command style={rootStyle}>
      <CommandInput placeholder="Type to search…" style={inputStyle} />
      <CommandList style={listStyle}>
        <CommandEmpty style={emptyStyle}>No results.</CommandEmpty>
        <CommandGroup heading={<div style={groupLabelStyle}>Actions</div>}>
          <CommandItem style={itemStyle}>New file</CommandItem>
          <CommandItem style={itemStyle}>New folder</CommandItem>
          <CommandItem style={itemStyle}>Open recent</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={<div style={groupLabelStyle}>Navigation</div>}>
          <CommandItem style={itemStyle}>Go to file</CommandItem>
          <CommandItem style={itemStyle}>Go to symbol</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const AsDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    useEffect(() => {
      const onKey = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault()
          setOpen((v) => !v)
        }
      }
      window.addEventListener('keydown', onKey)
      return () => window.removeEventListener('keydown', onKey)
    }, [])
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          style={{ padding: '8px 14px', border: '1px solid #e5e7eb', borderRadius: 6, background: 'white', cursor: 'pointer' }}
        >
          Open command palette (⌘K)
        </button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command…" style={inputStyle} />
          <CommandList style={listStyle}>
            <CommandEmpty style={emptyStyle}>No results.</CommandEmpty>
            <CommandItem style={itemStyle}>Invite a team member</CommandItem>
            <CommandItem style={itemStyle}>Toggle theme</CommandItem>
            <CommandItem style={itemStyle}>Sign out</CommandItem>
          </CommandList>
        </CommandDialog>
      </>
    )
  },
}
