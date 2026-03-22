import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta = {
  title: 'Primitives/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    href: { control: 'text' },
    target: { control: 'select', options: ['_self', '_blank', '_parent', '_top'] },
    title: { control: 'text' },
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Click here',
    href: '#',
  },
}

export const External: Story = {
  args: {
    children: 'Open in new tab',
    href: '#',
    target: '_blank',
  },
}
