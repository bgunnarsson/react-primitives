import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipTrigger, TooltipContent } from './Tooltip'

const meta = {
  title: 'Primitives/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    delayDuration: { control: { type: 'number', min: 0, max: 2000, step: 100 } },
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

const tooltipContentStyle: React.CSSProperties = {
  background: '#111827',
  color: 'white',
  fontSize: 12,
  padding: '4px 10px',
  borderRadius: 4,
  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
}

const btnStyle: React.CSSProperties = {
  padding: '6px 14px',
  borderRadius: 6,
  border: '1px solid #e5e7eb',
  background: 'white',
  cursor: 'pointer',
  fontSize: 13,
}

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button style={btnStyle}>Hover me</button>
      </TooltipTrigger>
      <TooltipContent style={tooltipContentStyle}>Tooltip text</TooltipContent>
    </Tooltip>
  ),
}

export const Sides: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center', padding: 48 }}>
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <button style={btnStyle}>{side}</button>
          </TooltipTrigger>
          <TooltipContent side={side} style={tooltipContentStyle}>
            Appears on the {side}
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
}

export const Instant: Story = {
  render: () => (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <button style={btnStyle}>No delay</button>
      </TooltipTrigger>
      <TooltipContent style={tooltipContentStyle}>Appears instantly</TooltipContent>
    </Tooltip>
  ),
}

export const OnDisabledButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <span style={{ display: 'inline-block' }}>
          <button disabled style={{ ...btnStyle, opacity: 0.5, cursor: 'not-allowed', pointerEvents: 'none' }}>
            Publish
          </button>
        </span>
      </TooltipTrigger>
      <TooltipContent style={tooltipContentStyle}>You need editor permissions to publish</TooltipContent>
    </Tooltip>
  ),
}

export const IconButton: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      {[
        { label: 'Copy', icon: '⎘' },
        { label: 'Edit', icon: '✎' },
        { label: 'Delete', icon: '✕' },
      ].map(({ label, icon }) => (
        <Tooltip key={label}>
          <TooltipTrigger asChild>
            <button style={{ width: 34, height: 34, borderRadius: 6, border: '1px solid #e5e7eb', background: 'white', cursor: 'pointer', fontSize: 15 }}>
              {icon}
            </button>
          </TooltipTrigger>
          <TooltipContent style={tooltipContentStyle}>{label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
}
