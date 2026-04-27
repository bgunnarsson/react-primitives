import type { Meta, StoryObj } from '@storybook/react'
import { VirtualList, type VirtualListProps } from './VirtualList'

interface Row {
  id: number
  label: string
}

const rows: Row[] = Array.from({ length: 10_000 }, (_, i) => ({ id: i, label: `Row ${i + 1}` }))

const VirtualListRow = (props: VirtualListProps<Row>) => <VirtualList<Row> {...props} />

const meta = {
  title: 'Primitives/VirtualList',
  component: VirtualListRow,
  tags: ['autodocs'],
} satisfies Meta<typeof VirtualListRow>

export default meta
type Story = StoryObj<typeof meta>

export const FixedHeight: Story = {
  args: {
    items: rows,
    itemSize: 32,
    height: 320,
    getItemKey: (r) => r.id,
    style: { border: '1px solid #ddd', borderRadius: 8 },
    children: ({ item, style }) => (
      <div
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          padding: '0 12px',
          borderBottom: '1px solid #f0f0f0',
          fontSize: 14,
        }}
      >
        {item.label}
      </div>
    ),
  },
}

export const VariableHeight: Story = {
  args: {
    items: rows,
    itemSize: (i: number) => 28 + (i % 5) * 8,
    height: 320,
    getItemKey: (r) => r.id,
    style: { border: '1px solid #ddd', borderRadius: 8 },
    children: ({ item, index, style }) => (
      <div
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          padding: '0 12px',
          background: index % 2 ? '#fafafa' : '#fff',
          fontSize: 14,
        }}
      >
        {item.label}
      </div>
    ),
  },
}

export const Horizontal: Story = {
  args: {
    items: rows.slice(0, 1000),
    itemSize: 120,
    orientation: 'horizontal',
    height: 120,
    getItemKey: (r) => r.id,
    style: { border: '1px solid #ddd', borderRadius: 8 },
    children: ({ item, style }) => (
      <div
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRight: '1px solid #f0f0f0',
          fontSize: 14,
        }}
      >
        {item.label}
      </div>
    ),
  },
}
