import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Stat, StatLabel, StatValue, StatHelpText } from './Stat'

const meta = {
  title: 'Primitives/Stat',
  component: Stat,
  tags: ['autodocs'],
} satisfies Meta<typeof Stat>

export default meta
type Story = StoryObj<typeof meta>

const statStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: '20px 24px',
  border: '1px solid #e5e7eb',
  borderRadius: 12,
  background: 'white',
  minWidth: 160,
}
const labelStyle: React.CSSProperties = { margin: 0, fontSize: 13, color: '#6b7280', fontWeight: 500 }
const valueStyle: React.CSSProperties = { margin: 0, fontSize: 28, fontWeight: 700, color: '#111827', lineHeight: 1.2 }
const helpStyle: React.CSSProperties = { margin: 0, fontSize: 12, color: '#16a34a' }

export const Default: Story = {
  render: () => (
    <Stat style={statStyle}>
      <StatLabel style={labelStyle}>Total revenue</StatLabel>
      <StatValue style={valueStyle}>$12,450</StatValue>
      <StatHelpText style={helpStyle}>+4.5% from last month</StatHelpText>
    </Stat>
  ),
}

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      {[
        { label: 'Total revenue', value: '$12,450', help: '+4.5%', helpColor: '#16a34a' },
        { label: 'Active users', value: '1,284', help: '+12%', helpColor: '#16a34a' },
        { label: 'Conversion rate', value: '3.6%', help: '-0.2%', helpColor: '#dc2626' },
      ].map((s) => (
        <Stat key={s.label} style={statStyle}>
          <StatLabel style={labelStyle}>{s.label}</StatLabel>
          <StatValue style={valueStyle}>{s.value}</StatValue>
          <StatHelpText style={{ ...helpStyle, color: s.helpColor }}>{s.help}</StatHelpText>
        </Stat>
      ))}
    </div>
  ),
}
