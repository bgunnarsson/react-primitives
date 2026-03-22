import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './Progress'

const meta = {
  title: 'Primitives/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100 } },
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

const progressStyles = `
  [data-radix-progress-root] { position: relative; height: 8px; background: #e5e7eb; border-radius: 9999px; overflow: hidden; width: 300px; }
  [data-radix-progress-indicator] { height: 100%; background: #3b82f6; border-radius: 9999px; transition: transform 300ms ease; }
`

export const Default: Story = {
  render: (args) => (
    <>
      <style>{progressStyles}</style>
      <Progress {...args} />
    </>
  ),
  args: { value: 60 },
}

export const Empty: Story = {
  render: (args) => (
    <>
      <style>{progressStyles}</style>
      <Progress {...args} />
    </>
  ),
  args: { value: 0 },
}

export const Full: Story = {
  render: (args) => (
    <>
      <style>{progressStyles}</style>
      <Progress {...args} />
    </>
  ),
  args: { value: 100 },
}
