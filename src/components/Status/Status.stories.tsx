import type React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Status, StatusIndicator, StatusLabel } from './Status'

const meta = {
  title: 'Primitives/Status',
  component: Status,
  tags: ['autodocs'],
} satisfies Meta<typeof Status>

export default meta
type Story = StoryObj<typeof meta>

const colors: Record<string, string> = {
  online: '#10b981',
  offline: '#9ca3af',
  busy: '#ef4444',
  away: '#f59e0b',
  idle: '#3b82f6',
}

const dotStyle = (status: string): React.CSSProperties => ({
  display: 'inline-block',
  width: 8,
  height: 8,
  borderRadius: 999,
  background: colors[status] ?? '#9ca3af',
  marginRight: 6,
})

const containerStyle: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: 0, fontSize: 14 }

export const Online: Story = {
  render: () => (
    <Status value="online" showLabel style={containerStyle}>
      <StatusIndicator style={dotStyle('online')} />
      <StatusLabel>Online</StatusLabel>
    </Status>
  ),
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {(['online', 'busy', 'away', 'idle', 'offline'] as const).map((s) => (
        <Status key={s} value={s} showLabel style={containerStyle}>
          <StatusIndicator style={dotStyle(s)} />
          <StatusLabel>{s.charAt(0).toUpperCase() + s.slice(1)}</StatusLabel>
        </Status>
      ))}
    </div>
  ),
}

export const DotOnly: Story = {
  render: () => (
    <Status value="online" label="User is online" style={containerStyle}>
      <StatusIndicator style={dotStyle('online')} />
    </Status>
  ),
}
