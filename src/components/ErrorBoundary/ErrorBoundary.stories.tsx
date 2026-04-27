import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ErrorBoundary } from './ErrorBoundary'

const meta = {
  title: 'Primitives/ErrorBoundary',
  component: ErrorBoundary,
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorBoundary>

export default meta
type Story = StoryObj<typeof meta>

const Bomb = ({ explode }: { explode: boolean }) => {
  if (explode) {
    throw new Error('Boom — descendant threw during render.')
  }
  return <p style={{ color: 'green' }}>All good — no error.</p>
}

export const StaticFallback: Story = {
  render: () => (
    <ErrorBoundary fallback={<p style={{ color: 'crimson' }}>Something went wrong.</p>}>
      <Bomb explode={true} />
    </ErrorBoundary>
  ),
}

export const RenderPropFallback: Story = {
  render: () => {
    const [key, setKey] = useState(0)
    return (
      <ErrorBoundary
        key={key}
        fallback={({ error, reset }) => (
          <div style={{ border: '1px solid crimson', padding: 12, borderRadius: 6 }}>
            <strong>Error:</strong> {error.message}
            <div style={{ marginTop: 8 }}>
              <button type="button" onClick={reset} style={{ marginRight: 8 }}>
                Reset boundary
              </button>
              <button type="button" onClick={() => setKey(k => k + 1)}>
                Remount tree
              </button>
            </div>
          </div>
        )}
      >
        <Bomb explode={true} />
      </ErrorBoundary>
    )
  },
}

export const ResetKeys: Story = {
  render: () => {
    const [explode, setExplode] = useState(true)
    return (
      <div>
        <button
          type="button"
          onClick={() => setExplode(e => !e)}
          style={{ marginBottom: 12 }}
        >
          Toggle explode (currently {String(explode)})
        </button>
        <ErrorBoundary
          resetKeys={[explode]}
          fallback={({ error }) => (
            <p style={{ color: 'crimson' }}>{error.message}</p>
          )}
        >
          <Bomb explode={explode} />
        </ErrorBoundary>
      </div>
    )
  },
}

export const NoError: Story = {
  render: () => (
    <ErrorBoundary fallback={<p>Something went wrong.</p>}>
      <Bomb explode={false} />
    </ErrorBoundary>
  ),
}
