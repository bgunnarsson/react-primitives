import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Timeline,
  TimelineItem,
  TimelineIndicator,
  TimelineConnector,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
} from './Timeline'

const meta = {
  title: 'Primitives/Timeline',
  component: Timeline,
  tags: ['autodocs'],
} satisfies Meta<typeof Timeline>

export default meta
type Story = StoryObj<typeof meta>

const dotStyle = (state: string): React.CSSProperties => ({
  display: 'inline-block',
  width: 10,
  height: 10,
  borderRadius: 999,
  background: state === 'past' ? '#3b82f6' : state === 'current' ? '#10b981' : '#d1d5db',
})

const lineStyle: React.CSSProperties = {
  display: 'block',
  width: 2,
  background: '#e5e7eb',
  flex: 1,
}

const itemRow: React.CSSProperties = { display: 'flex', gap: 12, padding: '0 0 16px' }
const indicatorCol: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 4,
}

export const Vertical: Story = {
  render: () => (
    <Timeline style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {[
        { state: 'past' as const, title: 'Order placed', time: 'Apr 24, 09:12' },
        { state: 'past' as const, title: 'Packed', time: 'Apr 24, 14:00' },
        { state: 'current' as const, title: 'Out for delivery', time: 'Apr 25, 08:30' },
        { state: 'future' as const, title: 'Delivered', time: 'Today' },
      ].map((e, i, arr) => (
        <TimelineItem key={i} state={e.state} style={itemRow}>
          <div style={indicatorCol}>
            <TimelineIndicator style={dotStyle(e.state)} />
            {i < arr.length - 1 && <TimelineConnector style={lineStyle} />}
          </div>
          <TimelineContent>
            <TimelineTitle as="h4" style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>
              {e.title}
            </TimelineTitle>
            <TimelineTime style={{ fontSize: 12, color: '#6b7280' }}>{e.time}</TimelineTime>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  ),
}

export const WithDescriptions: Story = {
  render: () => (
    <Timeline style={{ listStyle: 'none', padding: 0, margin: 0, maxWidth: 420 }}>
      <TimelineItem state="past" style={itemRow}>
        <div style={indicatorCol}>
          <TimelineIndicator style={dotStyle('past')} />
          <TimelineConnector style={lineStyle} />
        </div>
        <TimelineContent>
          <TimelineTitle as="h4" style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>
            Signed up
          </TimelineTitle>
          <TimelineDescription style={{ margin: '4px 0', fontSize: 13, color: '#374151' }}>
            Created an account and verified email.
          </TimelineDescription>
          <TimelineTime style={{ fontSize: 12, color: '#6b7280' }}>March 2</TimelineTime>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem state="current" style={itemRow}>
        <div style={indicatorCol}>
          <TimelineIndicator style={dotStyle('current')} />
        </div>
        <TimelineContent>
          <TimelineTitle as="h4" style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>
            Onboarding in progress
          </TimelineTitle>
          <TimelineDescription style={{ margin: '4px 0', fontSize: 13, color: '#374151' }}>
            3 of 5 steps complete.
          </TimelineDescription>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
}
