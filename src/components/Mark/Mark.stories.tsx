import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Mark } from './Mark'

const meta = {
  title: 'Primitives/Mark',
  component: Mark,
  tags: ['autodocs'],
} satisfies Meta<typeof Mark>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <p>
      Search results for <Mark>relevant matches</Mark> will be highlighted.
    </p>
  ),
}

export const HighlightQuery: Story = {
  render: () => (
    <p>
      <Mark text="The quick brown fox jumps over the lazy dog" query="quick" />
    </p>
  ),
}

export const MultipleQueries: Story = {
  render: () => (
    <p>
      <Mark text="React, Vue, and Svelte are popular frontend frameworks" query={['React', 'Vue', 'Svelte']} />
    </p>
  ),
}

export const CustomHighlight: Story = {
  render: () => (
    <p>
      <Mark
        text="Find me in this sentence"
        query="me"
        highlight={(match) => <strong style={{ background: '#fef08a', padding: '0 2px' }}>{match}</strong>}
      />
    </p>
  ),
}
