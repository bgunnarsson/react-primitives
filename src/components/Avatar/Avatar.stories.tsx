import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarImage, AvatarFallback } from './Avatar'

const meta = {
  title: 'Primitives/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

const styles = `
  .sb-avatar {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    overflow: hidden;
    border-radius: 9999px;
    background: #e5e7eb;
    vertical-align: middle;
    user-select: none;
  }
  .sb-avatar img { width: 100%; height: 100%; object-fit: cover; border-radius: inherit; }
  .sb-avatar-fallback {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font: 600 13px ui-sans-serif, system-ui, sans-serif;
    color: #374151;
    background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
  }
  .sb-avatar--sm { width: 28px; height: 28px; }
  .sb-avatar--sm .sb-avatar-fallback { font-size: 11px; }
  .sb-avatar--lg { width: 64px; height: 64px; }
  .sb-avatar--lg .sb-avatar-fallback { font-size: 18px; }

  .sb-row { display: flex; align-items: center; gap: 16px; }
`

export const Default: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <Avatar className="sb-avatar">
        <AvatarImage src="https://placehold.co/88" alt="John Doe" />
        <AvatarFallback className="sb-avatar-fallback">JD</AvatarFallback>
      </Avatar>
    </>
  ),
}

export const FallbackOnly: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <Avatar className="sb-avatar">
        <AvatarImage src="" alt="" />
        <AvatarFallback className="sb-avatar-fallback">AB</AvatarFallback>
      </Avatar>
    </>
  ),
}

export const Sizes: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <div className="sb-row">
        <Avatar className="sb-avatar sb-avatar--sm">
          <AvatarImage src="https://placehold.co/56" alt="" />
          <AvatarFallback className="sb-avatar-fallback">SM</AvatarFallback>
        </Avatar>
        <Avatar className="sb-avatar">
          <AvatarImage src="https://placehold.co/88" alt="" />
          <AvatarFallback className="sb-avatar-fallback">MD</AvatarFallback>
        </Avatar>
        <Avatar className="sb-avatar sb-avatar--lg">
          <AvatarImage src="https://placehold.co/128" alt="" />
          <AvatarFallback className="sb-avatar-fallback">LG</AvatarFallback>
        </Avatar>
      </div>
    </>
  ),
}
