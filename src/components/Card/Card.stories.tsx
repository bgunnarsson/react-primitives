import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent } from './Card'

const meta = {
  title: 'Primitives/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

const cardStyle: React.CSSProperties = { border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', background: 'white' }

export const ArticleCard: Story = {
  render: () => (
    <Card style={{ ...cardStyle, width: 320 }}>
      <div style={{ height: 160, background: '#e5e7eb' }} />
      <CardContent style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 12, color: '#6b7280', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Technology</span>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: '#111827', lineHeight: 1.4 }}>How to build great UI primitives</h3>
        <p style={{ margin: 0, fontSize: 14, color: '#6b7280', lineHeight: 1.5 }}>A short intro to the article content that gives the reader a sense of what to expect.</p>
        <span style={{ fontSize: 12, color: '#9ca3af' }}>March 22, 2026</span>
      </CardContent>
    </Card>
  ),
}

export const UserCard: Story = {
  render: () => (
    <Card style={{ ...cardStyle, width: 260, padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, color: '#3b82f6', fontWeight: 700 }}>JD</div>
      <CardContent style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: '#111827' }}>Jane Doe</span>
        <span style={{ fontSize: 13, color: '#6b7280' }}>Senior Designer</span>
        <span style={{ fontSize: 12, color: '#9ca3af' }}>jane@example.com</span>
      </CardContent>
    </Card>
  ),
}

export const ProductCard: Story = {
  render: () => (
    <Card style={{ ...cardStyle, width: 280 }}>
      <div style={{ height: 200, background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: 14 }}>Product image</div>
      <CardContent style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: '#111827' }}>Running Shoes Pro</span>
        <span style={{ fontSize: 13, color: '#6b7280' }}>Lightweight and durable</span>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: '#111827' }}>$129</span>
          <button style={{ padding: '7px 14px', borderRadius: 8, border: 'none', background: '#3b82f6', color: 'white', fontSize: 13, cursor: 'pointer', fontWeight: 500 }}>Add to cart</button>
        </div>
      </CardContent>
    </Card>
  ),
}
