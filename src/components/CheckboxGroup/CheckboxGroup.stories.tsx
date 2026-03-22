import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxGroup, CheckboxGroupItem } from './CheckboxGroup'

const meta = {
  title: 'Primitives/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  args: {
    name: 'fruits',
    value: [],
    onValueChange: () => {},
    disabled: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof CheckboxGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string[]>(['banana'])
    return (
      <CheckboxGroup
        {...args}
        value={selected}
        onValueChange={setSelected}
        style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
      >
        <CheckboxGroupItem value="apple" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          Apple
        </CheckboxGroupItem>
        <CheckboxGroupItem value="banana" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          Banana
        </CheckboxGroupItem>
        <CheckboxGroupItem value="cherry" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          Cherry
        </CheckboxGroupItem>
        <CheckboxGroupItem value="durian" disabled style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          Durian (disabled)
        </CheckboxGroupItem>
      </CheckboxGroup>
    )
  },
}
