import type { Meta, StoryObj } from '@storybook/react'
import { Portal } from './Portal'

const meta = {
  title: 'Primitives/Portal',
  component: Portal,
  tags: ['autodocs'],
} satisfies Meta<typeof Portal>

export default meta
type Story = StoryObj<typeof meta>

export const IntoBody: Story = {
  render: () => (
    <div style={{ padding: 24, border: '1px dashed #9ca3af', position: 'relative' }}>
      <p style={{ margin: 0 }}>This text lives inside the story root.</p>
      <Portal>
        <div style={{ position: 'fixed', bottom: 16, right: 16, padding: 12, background: '#111827', color: 'white', borderRadius: 8 }}>
          Rendered into document.body via Portal
        </div>
      </Portal>
    </div>
  ),
}
