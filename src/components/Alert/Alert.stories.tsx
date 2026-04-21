import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta = {
  title: 'Primitives/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    heading: 'Heads up',
    description: 'Something needs attention.',
    as: 'h5' as const,
  },
  argTypes: {
    role: { control: 'select', options: ['alert', 'status', 'none'] },
    as: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    heading: { control: 'text' },
    description: { control: 'text' },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

const styles = `
  .sb-alert {
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-width: 480px;
    padding: 14px 16px;
    border-radius: 8px;
    border: 1px solid transparent;
    font: 400 14px ui-sans-serif, system-ui, sans-serif;
  }
  .sb-alert > *:first-child {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
  }
  .sb-alert > *:nth-child(2) {
    margin: 0;
    font-size: 13px;
    line-height: 1.5;
    opacity: 0.85;
  }
  .sb-alert--info    { background: #eff6ff; border-color: #bfdbfe; color: #1e40af; }
  .sb-alert--success { background: #ecfdf5; border-color: #a7f3d0; color: #065f46; }
  .sb-alert--warning { background: #fffbeb; border-color: #fde68a; color: #92400e; }
  .sb-alert--danger  { background: #fef2f2; border-color: #fecaca; color: #991b1b; }

  .sb-stack { display: flex; flex-direction: column; gap: 12px; }
`

export const Default: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <Alert {...args} className="sb-alert sb-alert--info" />
    </>
  ),
}

export const Variants: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <div className="sb-stack">
        <Alert className="sb-alert sb-alert--info" heading="Heads up" description="A new version is available." />
        <Alert className="sb-alert sb-alert--success" heading="Saved" description="Your changes were saved successfully." />
        <Alert className="sb-alert sb-alert--warning" heading="Session expiring" description="You'll be signed out in 5 minutes." />
        <Alert className="sb-alert sb-alert--danger" heading="Something went wrong" description="We couldn't save your changes. Please try again." />
      </div>
    </>
  ),
}
