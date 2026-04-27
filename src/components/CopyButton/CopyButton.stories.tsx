import type { Meta, StoryObj } from '@storybook/react'
import { CopyButton } from './CopyButton'

const meta = {
  title: 'Primitives/CopyButton',
  component: CopyButton,
  tags: ['autodocs'],
  args: {
    value: 'npm install @bgunnarsson/react-primitives',
    resetMs: 2000,
    disabled: false,
  },
  argTypes: {
    value: { control: 'text' },
    resetMs: { control: 'number' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof CopyButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <CopyButton {...args} />,
}

export const RenderProp: Story = {
  render: (args) => (
    <CopyButton {...args}>{({ copied }) => (copied ? '✓ Copied to clipboard' : '⧉ Copy command')}</CopyButton>
  ),
}

export const Async: Story = {
  args: { value: undefined },
  render: () => (
    <CopyButton
      getValue={async () => {
        await new Promise((r) => setTimeout(r, 200))
        return `Generated at ${new Date().toISOString()}`
      }}
    >
      {({ copied }) => (copied ? 'Copied!' : 'Copy timestamp')}
    </CopyButton>
  ),
}
