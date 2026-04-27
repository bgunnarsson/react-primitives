import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { NumberInput } from './NumberInput'

const meta = {
  title: 'Primitives/NumberInput',
  component: NumberInput,
  tags: ['autodocs'],
  args: {
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
  },
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof NumberInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(0)
    return (
      <NumberInput
        {...args}
        value={value}
        onChange={setValue}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
      />
    )
  },
}
