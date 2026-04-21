import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TreeView, TreeItem } from './TreeView'

const meta = {
  title: 'Primitives/TreeView',
  component: TreeView,
  tags: ['autodocs'],
} satisfies Meta<typeof TreeView>

export default meta
type Story = StoryObj<typeof meta>

const rootStyle: React.CSSProperties = { listStyle: 'none', margin: 0, padding: 0, fontSize: 14, width: 280 }
const labelStyle: React.CSSProperties = {
  padding: '4px 8px',
  borderRadius: 4,
  cursor: 'pointer',
  userSelect: 'none',
  outline: 'none',
}

export const FileTree: Story = {
  render: () => {
    const [selected, setSelected] = useState<string>()
    return (
      <TreeView
        defaultExpanded={['src']}
        selected={selected}
        onSelectedChange={setSelected}
        style={rootStyle}
      >
        <style>{`
          [role="treeitem"] > [role="group"] { list-style: none; padding-left: 16px; margin: 0; }
          [role="treeitem"] [data-selected] { background: #dbeafe; color: #1e40af; }
          [role="treeitem"] [role="button"]:hover { background: #f3f4f6; }
          [role="treeitem"] [data-selected]:hover { background: #dbeafe; }
        `}</style>
        <TreeItem id="src" label="📁 src" labelStyle={labelStyle}>
          <TreeItem id="src/components" label="📁 components" labelStyle={labelStyle}>
            <TreeItem id="src/components/Button.tsx" label="📄 Button.tsx" labelStyle={labelStyle} />
            <TreeItem id="src/components/Dialog.tsx" label="📄 Dialog.tsx" labelStyle={labelStyle} />
          </TreeItem>
          <TreeItem id="src/index.ts" label="📄 index.ts" labelStyle={labelStyle} />
        </TreeItem>
        <TreeItem id="package.json" label="📄 package.json" labelStyle={labelStyle} />
        <TreeItem id="README.md" label="📄 README.md" labelStyle={labelStyle} />
      </TreeView>
    )
  },
}
