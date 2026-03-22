import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta = {
  title: 'Primitives/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 8, max: 96, step: 4 } },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

const spinStyle: React.CSSProperties = {
  color: '#3b82f6',
  animation: 'spin 1s linear infinite',
}

export const Default: Story = {
  render: (args) => (
    <>
      <style>{`@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }`}</style>
      <Spinner {...args} style={spinStyle} />
    </>
  ),
  args: { size: 24 },
}

export const Large: Story = {
  render: (args) => (
    <>
      <style>{`@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }`}</style>
      <Spinner {...args} style={spinStyle} />
    </>
  ),
  args: { size: 48 },
}
