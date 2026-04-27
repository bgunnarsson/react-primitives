import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PhoneInput } from './PhoneInput'

const meta = {
  title: 'Primitives/PhoneInput',
  component: PhoneInput,
  tags: ['autodocs'],
  args: {
    defaultCountry: 'US',
    placeholder: '555 123 4567',
    disabled: false,
  },
  argTypes: {
    defaultCountry: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof PhoneInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <div>
        <PhoneInput {...args} value={value} onValueChange={setValue} />
        <p style={{ marginTop: 8, fontSize: 14, fontFamily: 'monospace' }}>{value || '—'}</p>
      </div>
    )
  },
}

export const Prefilled: Story = {
  render: (args) => {
    const [value, setValue] = useState('+442071234567')
    return (
      <div>
        <PhoneInput {...args} value={value} onValueChange={setValue} />
        <p style={{ marginTop: 8, fontSize: 14, fontFamily: 'monospace' }}>{value}</p>
      </div>
    )
  },
}
