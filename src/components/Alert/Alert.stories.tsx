import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta = {
  title: 'Primitives/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    heading: 'Heads up',
    description: 'Something needs attention.',
    as: 'h5' as const,
  },
  argTypes: {
    role: { control: 'select', options: ['alert', 'status', 'none'] },
    as: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    heading: { control: 'text' },
    description: { control: 'text' },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
