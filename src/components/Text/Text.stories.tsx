import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta = {
  title: 'Primitives/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

const styles = `
  .sb-text { color: #1f2937; font-family: ui-sans-serif, system-ui, sans-serif; }
  .sb-text--h1 { font-size: 36px; font-weight: 700; line-height: 1.15; letter-spacing: -0.02em; margin: 0; }
  .sb-text--h2 { font-size: 28px; font-weight: 600; line-height: 1.2; letter-spacing: -0.015em; margin: 0; }
  .sb-text--h3 { font-size: 22px; font-weight: 600; line-height: 1.3; margin: 0; }
  .sb-text--p  { font-size: 16px; line-height: 1.6; margin: 0; }
  .sb-text--span { font-size: 14px; color: #4b5563; }
  .sb-text--muted { color: #6b7280; }

  .sb-stack { display: flex; flex-direction: column; gap: 12px; max-width: 560px; }
`

export const Paragraph: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <Text {...args} className="sb-text sb-text--p" />
    </>
  ),
  args: { as: 'p', children: 'The quick brown fox jumps over the lazy dog.' },
}

export const Heading1: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <Text {...args} className="sb-text sb-text--h1" />
    </>
  ),
  args: { as: 'h1', children: 'Heading 1' },
}

export const Heading2: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <Text {...args} className="sb-text sb-text--h2" />
    </>
  ),
  args: { as: 'h2', children: 'Heading 2' },
}

export const Span: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <Text {...args} className="sb-text sb-text--span sb-text--muted" />
    </>
  ),
  args: { as: 'span', children: 'Inline muted text' },
}

export const Scale: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <div className="sb-stack">
        <Text as="h1" className="sb-text sb-text--h1">
          Display heading
        </Text>
        <Text as="h2" className="sb-text sb-text--h2">
          Section heading
        </Text>
        <Text as="h3" className="sb-text sb-text--h3">
          Subsection heading
        </Text>
        <Text as="p" className="sb-text sb-text--p">
          Body paragraph. Primitives ship unstyled so you bring the typographic scale.
        </Text>
        <Text as="span" className="sb-text sb-text--span sb-text--muted">
          Small muted caption
        </Text>
      </div>
    </>
  ),
}
