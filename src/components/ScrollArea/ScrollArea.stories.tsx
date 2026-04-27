import type { Meta, StoryObj } from '@storybook/react'
import { ScrollArea } from './ScrollArea'

const meta = {
  title: 'Primitives/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const scrollAreaStyles = `
  [data-radix-scroll-area-viewport] { width: 100%; height: 100%; }
  [data-radix-scroll-area-scrollbar] { display: flex; user-select: none; touch-action: none; padding: 2px; background: #f3f4f6; border-radius: 9999px; transition: background 150ms; }
  [data-radix-scroll-area-scrollbar][data-orientation=vertical] { width: 8px; }
  [data-radix-scroll-area-scrollbar][data-orientation=horizontal] { height: 8px; flex-direction: column; }
  [data-radix-scroll-area-thumb] { flex: 1; background: #d1d5db; border-radius: 9999px; position: relative; }
  [data-radix-scroll-area-thumb]::before { content: ''; position: absolute; inset: -4px; }
`

export const Default: Story = {
  render: () => (
    <>
      <style>{scrollAreaStyles}</style>
      <ScrollArea style={{ height: 200, width: 300, border: '1px solid #e5e7eb', borderRadius: 8, padding: '0 8px' }}>
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} style={{ padding: '8px 0', borderBottom: '1px solid #f3f4f6', fontSize: 14 }}>
            Item {i + 1}
          </div>
        ))}
      </ScrollArea>
    </>
  ),
}
