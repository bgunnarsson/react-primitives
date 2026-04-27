import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

const meta = {
  title: 'Primitives/Footer',
  component: Footer,
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Footer
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        height: 64,
        background: '#f9fafb',
        borderTop: '1px solid #e5e7eb',
        fontSize: 14,
        color: '#6b7280',
      }}
    >
      <span>© 2026 Acme Inc.</span>
      <nav style={{ display: 'flex', gap: 24 }}>
        <a href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>
          Privacy
        </a>
        <a href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>
          Terms
        </a>
      </nav>
    </Footer>
  ),
}
