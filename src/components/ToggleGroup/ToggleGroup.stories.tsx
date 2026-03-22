import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ToggleGroup, ToggleGroupItem } from './ToggleGroup'

const meta = {
  title: 'Primitives/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  args: { type: 'single' as const },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

const styles = `
  .story-tg { display: inline-flex; border-radius: 6px; border: 1px solid #e5e7eb; overflow: hidden; }
  .story-tg-item { padding: 6px 14px; border: none; border-left: 1px solid #e5e7eb; background: white; cursor: pointer; font-size: 14px; font-weight: 500; color: #374151; }
  .story-tg-item:first-child { border-left: none; }
  .story-tg-item[data-state=on] { background: #eff6ff; color: #1d4ed8; }
  .story-tg-item[data-disabled] { opacity: 0.5; pointer-events: none; }
`

export const Single: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <ToggleGroup type="single" defaultValue="center" className="story-tg">
        <ToggleGroupItem value="left" className="story-tg-item">Left</ToggleGroupItem>
        <ToggleGroupItem value="center" className="story-tg-item">Center</ToggleGroupItem>
        <ToggleGroupItem value="right" className="story-tg-item">Right</ToggleGroupItem>
      </ToggleGroup>
    </>
  ),
}

export const Multiple: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <ToggleGroup type="multiple" className="story-tg">
        <ToggleGroupItem value="bold" className="story-tg-item">Bold</ToggleGroupItem>
        <ToggleGroupItem value="italic" className="story-tg-item">Italic</ToggleGroupItem>
        <ToggleGroupItem value="underline" className="story-tg-item">Underline</ToggleGroupItem>
      </ToggleGroup>
    </>
  ),
}
