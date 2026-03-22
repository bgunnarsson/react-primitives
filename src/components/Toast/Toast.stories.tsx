import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Toaster, toast } from './Toast'

const meta = {
  title: 'Primitives/Toast',
  component: Toaster,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
    },
    theme: { control: 'radio', options: ['light', 'dark', 'system'] },
  },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
      <Toaster />
      <button onClick={() => toast('Event has been created.')}>Default</button>
    </>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <>
      <Toaster />
      <button onClick={() => toast('Event created', { description: 'Monday, January 3rd at 6:00pm' })}>
        With description
      </button>
    </>
  ),
}

export const Success: Story = {
  render: () => (
    <>
      <Toaster />
      <button onClick={() => toast.success('Changes saved successfully.')}>Success</button>
    </>
  ),
}

export const Error: Story = {
  render: () => (
    <>
      <Toaster />
      <button onClick={() => toast.error('Something went wrong.')}>Error</button>
    </>
  ),
}

export const Warning: Story = {
  render: () => (
    <>
      <Toaster />
      <button onClick={() => toast.warning('Your session is about to expire.')}>Warning</button>
    </>
  ),
}
