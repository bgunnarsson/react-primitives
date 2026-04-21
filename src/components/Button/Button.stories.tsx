import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
    title: { control: 'text' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

const styles = `
  .sb-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 16px;
    font: 500 14px ui-sans-serif, system-ui, sans-serif;
    border-radius: 8px;
    border: 1px solid transparent;
    cursor: pointer;
    outline: none;
    transition: background 120ms ease, box-shadow 120ms ease, transform 120ms ease;
  }
  .sb-btn:focus-visible { box-shadow: 0 0 0 2px #3b82f6; }
  .sb-btn:disabled { cursor: not-allowed; opacity: 0.5; }
  .sb-btn:not(:disabled):active { transform: translateY(1px); }

  .sb-btn--primary   { background: #2563eb; color: #ffffff; }
  .sb-btn--primary:hover:not(:disabled)   { background: #1d4ed8; }

  .sb-btn--secondary { background: #ffffff; color: #111827; border-color: #d1d5db; }
  .sb-btn--secondary:hover:not(:disabled) { background: #f9fafb; }

  .sb-btn--ghost     { background: transparent; color: #111827; }
  .sb-btn--ghost:hover:not(:disabled)     { background: #f3f4f6; }

  .sb-btn--danger    { background: #dc2626; color: #ffffff; }
  .sb-btn--danger:hover:not(:disabled)    { background: #b91c1c; }

  .sb-row { display: flex; flex-wrap: wrap; gap: 12px; }
`

export const Default: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <Button {...args} className="sb-btn sb-btn--primary" />
    </>
  ),
  args: { children: 'Button' },
}

export const Disabled: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <Button {...args} className="sb-btn sb-btn--primary" />
    </>
  ),
  args: { children: 'Button', disabled: true },
}

export const Variants: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <div className="sb-row">
        <Button className="sb-btn sb-btn--primary">Primary</Button>
        <Button className="sb-btn sb-btn--secondary">Secondary</Button>
        <Button className="sb-btn sb-btn--ghost">Ghost</Button>
        <Button className="sb-btn sb-btn--danger">Delete</Button>
      </div>
    </>
  ),
}
