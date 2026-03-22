import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'

const meta = {
  title: 'Primitives/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Container style={{ maxWidth: 800, margin: '0 auto', padding: '0 16px', background: '#f9fafb', border: '1px dashed #d1d5db' }}>
      <p style={{ margin: 0, padding: '16px 0', color: '#6b7280', fontSize: 14 }}>Container content</p>
    </Container>
  ),
}

export const Centered: Story = {
  render: () => (
    <div style={{ background: '#e5e7eb', padding: 32 }}>
      <Container style={{ maxWidth: 640, margin: '0 auto', padding: '24px 32px', background: '#ffffff', borderRadius: 8 }}>
        <p style={{ margin: 0, fontSize: 14, color: '#374151' }}>Centered page container with max-width</p>
      </Container>
    </div>
  ),
}
