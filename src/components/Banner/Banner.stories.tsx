import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Banner, BannerIcon, BannerTitle, BannerDescription, BannerActions, BannerClose } from './Banner'

const meta = {
  title: 'Primitives/Banner',
  component: Banner,
  tags: ['autodocs'],
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

const wrap = (variant: string): React.CSSProperties => {
  const palette: Record<string, [string, string, string]> = {
    info: ['#eff6ff', '#bfdbfe', '#1e3a8a'],
    success: ['#ecfdf5', '#a7f3d0', '#065f46'],
    warning: ['#fffbeb', '#fde68a', '#78350f'],
    error: ['#fef2f2', '#fecaca', '#7f1d1d'],
  }
  const [bg, border, fg] = palette[variant] ?? palette.info
  return {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '12px 16px',
    background: bg,
    border: `1px solid ${border}`,
    color: fg,
    borderRadius: 8,
  }
}

export const Info: Story = {
  render: () => (
    <Banner variant="info" style={wrap('info')}>
      <BannerIcon>ℹ️</BannerIcon>
      <BannerTitle as="strong" style={{ fontSize: 14 }}>
        Scheduled maintenance
      </BannerTitle>
      <BannerDescription style={{ margin: 0, fontSize: 14, flex: 1 }}>
        We'll be down for 30 minutes starting at 02:00 UTC.
      </BannerDescription>
      <BannerClose style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 18 }} />
    </Banner>
  ),
}

export const WithActions: Story = {
  render: () => (
    <Banner variant="warning" style={wrap('warning')}>
      <BannerIcon>⚠️</BannerIcon>
      <BannerDescription style={{ margin: 0, fontSize: 14, flex: 1 }}>
        Your trial expires in 3 days.
      </BannerDescription>
      <BannerActions style={{ display: 'flex', gap: 8 }}>
        <button type="button">Upgrade</button>
        <BannerClose style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 18 }} />
      </BannerActions>
    </Banner>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true)
    return (
      <div>
        <Banner open={open} onOpenChange={setOpen} variant="success" style={wrap('success')}>
          <BannerIcon>✅</BannerIcon>
          <BannerDescription style={{ margin: 0, fontSize: 14, flex: 1 }}>
            Settings saved successfully.
          </BannerDescription>
          <BannerClose style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 18 }} />
        </Banner>
        {!open && (
          <button type="button" onClick={() => setOpen(true)} style={{ marginTop: 12 }}>
            Show again
          </button>
        )}
      </div>
    )
  },
}
