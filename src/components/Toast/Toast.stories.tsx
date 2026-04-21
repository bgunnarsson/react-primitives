import type { Meta, StoryObj } from '@storybook/react'
import { Toaster, toast } from './Toast'

const meta = {
  title: 'Primitives/Toast',
  component: Toaster,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
    },
    theme: { control: 'radio', options: ['light', 'dark', 'system'] },
  },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

const styles = `
  .sb-toast-trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 14px;
    font: 500 14px ui-sans-serif, system-ui, sans-serif;
    background: #111827;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 120ms ease;
  }
  .sb-toast-trigger:hover { background: #1f2937; }
  .sb-toast-trigger:focus-visible { outline: 2px solid #3b82f6; outline-offset: 2px; }

  .sb-toast-trigger--success { background: #059669; }
  .sb-toast-trigger--success:hover { background: #047857; }
  .sb-toast-trigger--danger  { background: #dc2626; }
  .sb-toast-trigger--danger:hover  { background: #b91c1c; }
  .sb-toast-trigger--warning { background: #d97706; }
  .sb-toast-trigger--warning:hover { background: #b45309; }

  .sb-toast-row { display: flex; flex-wrap: wrap; gap: 10px; }
`

export const Default: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <Toaster richColors />
      <button className="sb-toast-trigger" onClick={() => toast('Event has been created.')}>Default</button>
    </>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <Toaster richColors />
      <button
        className="sb-toast-trigger"
        onClick={() => toast('Event created', { description: 'Monday, January 3rd at 6:00pm' })}
      >
        With description
      </button>
    </>
  ),
}

export const Success: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <Toaster richColors />
      <button className="sb-toast-trigger sb-toast-trigger--success" onClick={() => toast.success('Changes saved successfully.')}>
        Success
      </button>
    </>
  ),
}

export const Error: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <Toaster richColors />
      <button className="sb-toast-trigger sb-toast-trigger--danger" onClick={() => toast.error('Something went wrong.')}>
        Error
      </button>
    </>
  ),
}

export const Warning: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <Toaster richColors />
      <button className="sb-toast-trigger sb-toast-trigger--warning" onClick={() => toast.warning('Your session is about to expire.')}>
        Warning
      </button>
    </>
  ),
}

export const Gallery: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <Toaster richColors />
      <div className="sb-toast-row">
        <button className="sb-toast-trigger" onClick={() => toast('Event has been created.')}>Default</button>
        <button className="sb-toast-trigger sb-toast-trigger--success" onClick={() => toast.success('Changes saved successfully.')}>Success</button>
        <button className="sb-toast-trigger sb-toast-trigger--danger" onClick={() => toast.error('Something went wrong.')}>Error</button>
        <button className="sb-toast-trigger sb-toast-trigger--warning" onClick={() => toast.warning('Your session is about to expire.')}>Warning</button>
      </div>
    </>
  ),
}
