import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta = {
  title: 'Primitives/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

const switchStyles = `
  .story-switch {
    position: relative; display: inline-flex; align-items: center;
    width: 44px; height: 24px; border-radius: 9999px; border: none; cursor: pointer;
    background: #e5e7eb; transition: background 150ms; flex-shrink: 0; padding: 0;
  }
  .story-switch[data-state=checked] { background: #3b82f6; }
  .story-switch[data-disabled] { opacity: 0.5; pointer-events: none; }
  .story-switch > span {
    display: block; width: 18px; height: 18px; border-radius: 50%;
    background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transform: translateX(3px); transition: transform 150ms;
  }
  .story-switch > span[data-state=checked] { transform: translateX(23px); }
`

const labelStyle: React.CSSProperties = { fontSize: 14, cursor: 'pointer', color: '#111827' }

export const Default: Story = {
  render: (args) => (
    <>
      <style>{switchStyles}</style>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Switch id="switch-default" className="story-switch" {...args} />
        <label htmlFor="switch-default" style={labelStyle}>Airplane mode</label>
      </div>
    </>
  ),
}

export const Checked: Story = {
  render: () => (
    <>
      <style>{switchStyles}</style>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Switch id="switch-checked" className="story-switch" defaultChecked />
        <label htmlFor="switch-checked" style={labelStyle}>Airplane mode</label>
      </div>
    </>
  ),
}

export const Disabled: Story = {
  render: () => (
    <>
      <style>{switchStyles}</style>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Switch id="switch-disabled-off" className="story-switch" disabled />
          <label htmlFor="switch-disabled-off" style={{ ...labelStyle, opacity: 0.5 }}>Disabled (off)</label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Switch id="switch-disabled-on" className="story-switch" disabled defaultChecked />
          <label htmlFor="switch-disabled-on" style={{ ...labelStyle, opacity: 0.5 }}>Disabled (on)</label>
        </div>
      </div>
    </>
  ),
}

export const Group: Story = {
  render: () => (
    <>
      <style>{switchStyles}</style>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 280 }}>
        {[
          { id: 'notif-email', label: 'Email notifications', defaultChecked: true },
          { id: 'notif-push', label: 'Push notifications', defaultChecked: false },
          { id: 'notif-sms', label: 'SMS alerts', defaultChecked: true },
        ].map(({ id, label, defaultChecked }) => (
          <div key={id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <label htmlFor={id} style={labelStyle}>{label}</label>
            <Switch id={id} className="story-switch" defaultChecked={defaultChecked} />
          </div>
        ))}
      </div>
    </>
  ),
}
