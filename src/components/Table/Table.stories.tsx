import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from './Table'

const meta = {
  title: 'Primitives/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', fontSize: 14 }
const headStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '8px 12px',
  borderBottom: '2px solid #e5e7eb',
  fontWeight: 600,
  color: '#374151',
}
const cellStyle: React.CSSProperties = { padding: '8px 12px', borderBottom: '1px solid #f3f4f6', color: '#111827' }
const captionStyle: React.CSSProperties = { padding: '8px 0', fontSize: 12, color: '#9ca3af', textAlign: 'left' }

export const Default: Story = {
  render: () => (
    <Table style={tableStyle}>
      <TableCaption style={captionStyle}>A list of users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead style={headStyle}>Name</TableHead>
          <TableHead style={headStyle}>Email</TableHead>
          <TableHead style={headStyle}>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { name: 'Alice', email: 'alice@example.com', role: 'Admin' },
          { name: 'Bob', email: 'bob@example.com', role: 'Editor' },
          { name: 'Carol', email: 'carol@example.com', role: 'Viewer' },
        ].map((row) => (
          <TableRow key={row.name}>
            <TableCell style={cellStyle}>{row.name}</TableCell>
            <TableCell style={cellStyle}>{row.email}</TableCell>
            <TableCell style={cellStyle}>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}
