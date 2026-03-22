import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta = {
  title: 'Primitives/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Paragraph: Story = {
  args: {
    as: 'p',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}

export const Heading1: Story = {
  args: {
    as: 'h1',
    children: 'Heading 1',
  },
}

export const Heading2: Story = {
  args: {
    as: 'h2',
    children: 'Heading 2',
  },
}

export const Span: Story = {
  args: {
    as: 'span',
    children: 'Inline text',
  },
}
