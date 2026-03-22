import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CodeBlock } from './CodeBlock'

const meta = {
  title: 'Primitives/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

const containerStyle: React.CSSProperties = {
  background: '#1a1a1a',
  borderRadius: 8,
  overflow: 'hidden',
  fontFamily: 'monospace',
}

const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 16px',
  borderBottom: '1px solid #2a2a2a',
  color: '#9ca3af',
  fontSize: 13,
}

const preStyle: React.CSSProperties = {
  margin: 0,
  padding: 24,
  overflowX: 'auto',
  color: '#e5e7eb',
  fontSize: 13,
  lineHeight: 1.7,
}

const buttonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#9ca3af',
  padding: 0,
  display: 'flex',
}

const exampleCode = `import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}`

export const Default: Story = {
  render: () => (
    <CodeBlock
      code={exampleCode}
      title="Counter.tsx"
      style={containerStyle}
      data-header-style={JSON.stringify(headerStyle)}
    >
      <span style={{ color: '#e5e7eb' }}>{exampleCode}</span>
    </CodeBlock>
  ),
}

export const Styled: Story = {
  render: () => (
    <>
      <style>{`
        .cb { background: #1a1a1a; border-radius: 8px; overflow: hidden; font-family: monospace; }
        .cb [data-slot="header"] { display: flex; align-items: center; justify-content: space-between; padding: 10px 16px; border-bottom: 1px solid #2a2a2a; color: #9ca3af; font-size: 13px; }
        .cb [data-slot="copy"] { background: none; border: none; cursor: pointer; color: #9ca3af; padding: 0; display: flex; }
        .cb [data-slot="pre"] { margin: 0; padding: 24px; overflow-x: auto; color: #e5e7eb; font-size: 13px; line-height: 1.7; }
        .cb [data-slot="code"] { display: block; }
      `}</style>
      <CodeBlock code={exampleCode} title="Counter.tsx" className="cb">
        {exampleCode}
      </CodeBlock>
    </>
  ),
}

export const NoTitle: Story = {
  render: () => (
    <>
      <style>{`
        .cb2 { background: #1a1a1a; border-radius: 8px; overflow: hidden; font-family: monospace; }
        .cb2 [data-slot="header"] { display: flex; align-items: center; justify-content: flex-end; padding: 10px 16px; border-bottom: 1px solid #2a2a2a; }
        .cb2 [data-slot="copy"] { background: none; border: none; cursor: pointer; color: #9ca3af; padding: 0; display: flex; }
        .cb2 [data-slot="pre"] { margin: 0; padding: 24px; overflow-x: auto; color: #e5e7eb; font-size: 13px; line-height: 1.7; }
      `}</style>
      <CodeBlock code={exampleCode} className="cb2">
        {exampleCode}
      </CodeBlock>
    </>
  ),
}
