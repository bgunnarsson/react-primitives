import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertIcon, AlertTitle, AlertDescription, AlertActions } from './Alert'

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
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: start;
    column-gap: 12px;
    row-gap: 4px;
    max-width: 560px;
    padding: 14px 16px;
    border-radius: 8px;
    border: 1px solid transparent;
    font: 400 14px ui-sans-serif, system-ui, sans-serif;
  }
  .sb-alert [data-part="icon"] { grid-row: 1 / span 2; font-size: 18px; line-height: 1; }
  .sb-alert [data-part="title"] { margin: 0; font-size: 14px; font-weight: 600; }
  .sb-alert [data-part="description"] { margin: 0; grid-column: 2; font-size: 13px; line-height: 1.5; opacity: 0.85; }
  .sb-alert [data-part="actions"] { grid-row: 1 / span 2; grid-column: 3; display: flex; gap: 8px; }
  .sb-alert [data-part="actions"] button {
    background: transparent; border: 1px solid currentColor; color: inherit;
    font: 600 12px ui-sans-serif, system-ui, sans-serif;
    padding: 4px 10px; border-radius: 6px; cursor: pointer;
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

export const WithIcon: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <Alert className="sb-alert sb-alert--success">
        <AlertIcon>✅</AlertIcon>
        <AlertTitle>Saved</AlertTitle>
        <AlertDescription>Your changes were saved successfully.</AlertDescription>
      </Alert>
    </>
  ),
}

export const WithActions: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <Alert className="sb-alert sb-alert--warning">
        <AlertIcon>⚠️</AlertIcon>
        <AlertTitle>Session expiring</AlertTitle>
        <AlertDescription>You'll be signed out in 5 minutes.</AlertDescription>
        <AlertActions>
          <button type="button">Stay signed in</button>
        </AlertActions>
      </Alert>
    </>
  ),
}

export const Variants: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <div className="sb-stack">
        <Alert className="sb-alert sb-alert--info">
          <AlertIcon>ℹ️</AlertIcon>
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>A new version is available.</AlertDescription>
        </Alert>
        <Alert className="sb-alert sb-alert--success">
          <AlertIcon>✅</AlertIcon>
          <AlertTitle>Saved</AlertTitle>
          <AlertDescription>Your changes were saved successfully.</AlertDescription>
        </Alert>
        <Alert className="sb-alert sb-alert--warning">
          <AlertIcon>⚠️</AlertIcon>
          <AlertTitle>Session expiring</AlertTitle>
          <AlertDescription>You'll be signed out in 5 minutes.</AlertDescription>
          <AlertActions>
            <button type="button">Stay signed in</button>
          </AlertActions>
        </Alert>
        <Alert className="sb-alert sb-alert--danger">
          <AlertIcon>⛔</AlertIcon>
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>We couldn't save your changes. Please try again.</AlertDescription>
          <AlertActions>
            <button type="button">Retry</button>
          </AlertActions>
        </Alert>
      </div>
    </>
  ),
}
