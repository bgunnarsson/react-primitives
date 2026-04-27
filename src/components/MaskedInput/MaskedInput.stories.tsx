import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MaskedInput } from './MaskedInput'

const meta = {
  title: 'Primitives/MaskedInput',
  component: MaskedInput,
  tags: ['autodocs'],
  args: {
    mask: '9999 9999 9999 9999',
    placeholder: '0000 0000 0000 0000',
    disabled: false,
  },
  argTypes: {
    mask: { control: 'text' },
    maskChar: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof MaskedInput>

export default meta
type Story = StoryObj<typeof meta>

export const CreditCard: Story = {
  render: (args) => {
    const [raw, setRaw] = useState('')
    return (
      <div>
        <MaskedInput {...args} value={raw} onValueChange={setRaw} />
        <p style={{ marginTop: 8, fontSize: 14, fontFamily: 'monospace' }}>raw: {raw || '—'}</p>
      </div>
    )
  },
}

export const Ssn: Story = {
  args: { mask: '999-99-9999', placeholder: '000-00-0000' },
  render: (args) => {
    const [raw, setRaw] = useState('')
    return (
      <div>
        <MaskedInput {...args} value={raw} onValueChange={setRaw} />
        <p style={{ marginTop: 8, fontSize: 14, fontFamily: 'monospace' }}>raw: {raw || '—'}</p>
      </div>
    )
  },
}

export const LicensePlate: Story = {
  args: { mask: 'aaa-9999', placeholder: 'ABC-1234' },
  render: (args) => {
    const [raw, setRaw] = useState('')
    return (
      <div>
        <MaskedInput {...args} value={raw} onValueChange={setRaw} />
        <p style={{ marginTop: 8, fontSize: 14, fontFamily: 'monospace' }}>raw: {raw || '—'}</p>
      </div>
    )
  },
}
