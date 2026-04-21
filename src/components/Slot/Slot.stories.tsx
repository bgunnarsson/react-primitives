import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Slot } from './Slot'

const meta = {
  title: 'Primitives/Slot',
  component: Slot,
  tags: ['autodocs'],
} satisfies Meta<typeof Slot>

export default meta
type Story = StoryObj<typeof meta>

const MyButton = ({ children, asChild, ...props }: { children: React.ReactNode; asChild?: boolean } & React.ComponentPropsWithoutRef<'button'>) => {
  const Comp: React.ElementType = asChild ? Slot : 'button'
  return <Comp {...props}>{children}</Comp>
}

export const AsChild: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <MyButton>Native button</MyButton>
      <MyButton asChild>
        <a href="https://example.com">Renders as an anchor</a>
      </MyButton>
    </div>
  ),
}
