import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from './Toggle'

const meta = {
  title: 'Primitives/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    defaultPressed: { control: 'boolean' },
    disabled: { control: 'boolean' },
    title: { control: 'text' },
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

const toggleStyles = `
  .story-toggle {
    padding: 6px 14px; border-radius: 6px; border: 1px solid #e5e7eb;
    background: white; cursor: pointer; font-size: 14px; font-weight: 500;
    color: #374151; transition: background 120ms, border-color 120ms, color 120ms;
  }
  .story-toggle[data-state=on] {
    background: #eff6ff; border-color: #3b82f6; color: #1d4ed8;
  }
  .story-toggle[data-disabled] { opacity: 0.5; pointer-events: none; }
`

export const Default: Story = {
  render: (args) => (
    <>
      <style>{toggleStyles}</style>
      <Toggle className="story-toggle" {...args} />
    </>
  ),
  args: { children: 'Bold' },
}

export const Pressed: Story = {
  render: (args) => (
    <>
      <style>{toggleStyles}</style>
      <Toggle className="story-toggle" defaultPressed {...args} />
    </>
  ),
  args: { children: 'Bold' },
}

export const Disabled: Story = {
  render: (args) => (
    <>
      <style>{toggleStyles}</style>
      <Toggle className="story-toggle" disabled {...args} />
    </>
  ),
  args: { children: 'Bold', disabled: true },
}

export const Toolbar: Story = {
  render: () => (
    <>
      <style>{toggleStyles}</style>
      <div style={{ display: 'flex', gap: 4 }}>
        {['Bold', 'Italic', 'Underline'].map((label) => (
          <Toggle key={label} className="story-toggle">
            {label}
          </Toggle>
        ))}
      </div>
    </>
  ),
}
