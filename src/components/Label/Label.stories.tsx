import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './Label'
import { Input } from '../Input/Input'

const meta = {
  title: 'Primitives/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    htmlFor: { control: 'text' },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

const styles = `
  .sb-field { display: flex; flex-direction: column; gap: 6px; width: 260px; }
  .sb-label {
    font: 500 13px ui-sans-serif, system-ui, sans-serif;
    color: #374151;
    user-select: none;
  }
  .sb-required { color: #dc2626; margin-left: 2px; }
  .sb-input {
    padding: 8px 10px;
    font: 400 14px ui-sans-serif, system-ui, sans-serif;
    color: #111827;
    background: #ffffff;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    outline: none;
    transition: border-color 120ms ease, box-shadow 120ms ease;
  }
  .sb-input:focus-visible { border-color: #2563eb; box-shadow: 0 0 0 2px #bfdbfe; }
`

export const Default: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <div className="sb-field">
        <Label className="sb-label" htmlFor="email">
          Email address
        </Label>
        <Input id="email" type="email" placeholder="you@example.com" className="sb-input" />
      </div>
    </>
  ),
}

export const Required: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <div className="sb-field">
        <Label className="sb-label" htmlFor="fullname">
          Full name
          <span className="sb-required" aria-hidden>
            *
          </span>
        </Label>
        <Input id="fullname" required placeholder="Jane Doe" className="sb-input" />
      </div>
    </>
  ),
}
