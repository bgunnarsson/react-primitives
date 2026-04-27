import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta = {
  title: 'Primitives/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        height: 64,
        background: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <span style={{ fontWeight: 600, fontSize: 16 }}>Logo</span>
      <nav style={{ display: 'flex', gap: 24, fontSize: 14, color: '#6b7280' }}>
        <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          Home
        </a>
        <a href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
          About
        </a>
        <a href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
          Contact
        </a>
      </nav>
    </Header>
  ),
}
