import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Primitives/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    title: { control: 'text' },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

const checkboxStyles = `
  [data-radix-checkbox-root] {
    width: 18px; height: 18px; border-radius: 4px;
    border: 2px solid #d1d5db; background: white; cursor: pointer;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  [data-radix-checkbox-root][data-state=checked] { background: #3b82f6; border-color: #3b82f6; color: white; }
  [data-radix-checkbox-root][data-state=indeterminate] { background: #3b82f6; border-color: #3b82f6; color: white; }
  [data-radix-checkbox-root][data-disabled] { opacity: 0.5; pointer-events: none; }
`

function Row({ id, label, ...props }: React.ComponentProps<typeof Checkbox> & { id: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Checkbox id={id} {...props} />
      <label htmlFor={id} style={{ fontSize: 14, cursor: 'pointer' }}>{label}</label>
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <>
      <style>{checkboxStyles}</style>
      <Row id="cb-default" label="Accept terms" />
    </>
  ),
}

export const Checked: Story = {
  render: () => (
    <>
      <style>{checkboxStyles}</style>
      <Row id="cb-checked" label="Accept terms" defaultChecked />
    </>
  ),
}

export const Disabled: Story = {
  render: () => (
    <>
      <style>{checkboxStyles}</style>
      <Row id="cb-disabled" label="Accept terms" disabled />
    </>
  ),
}
