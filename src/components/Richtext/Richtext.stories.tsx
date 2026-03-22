import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Richtext } from './Richtext'

const meta = {
  title: 'Primitives/Richtext',
  component: Richtext,
  tags: ['autodocs'],
  argTypes: {
    html: { control: 'text' },
  },
} satisfies Meta<typeof Richtext>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    html: '<p>This is <strong>rich text</strong> content from a CMS. It can contain <a href="#">links</a>, <em>emphasis</em>, and other inline elements.</p><ul><li>List item one</li><li>List item two</li></ul>',
  },
}
