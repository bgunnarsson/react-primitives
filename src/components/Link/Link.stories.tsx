import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta = {
  title: 'Primitives/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    href: { control: 'text' },
    target: { control: 'select', options: ['_self', '_blank', '_parent', '_top'] },
    title: { control: 'text' },
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

const styles = `
  .sb-body {
    font: 400 15px ui-sans-serif, system-ui, sans-serif;
    color: #111827;
    line-height: 1.6;
    max-width: 520px;
  }
  .sb-link {
    color: #2563eb;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
    transition: color 120ms ease;
  }
  .sb-link:hover { color: #1d4ed8; }
  .sb-link:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
    border-radius: 2px;
  }
  .sb-link--external::after {
    content: "↗";
    display: inline-block;
    margin-left: 3px;
    font-size: 0.9em;
    color: #6b7280;
  }
`

export const Default: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <p className="sb-body">
        Read our <Link {...args} className="sb-link" /> for the full spec.
      </p>
    </>
  ),
  args: { children: 'documentation', href: '#' },
}

export const External: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <p className="sb-body">
        Source is on <Link {...args} className="sb-link sb-link--external" />.
      </p>
    </>
  ),
  args: { children: 'GitHub', href: '#', target: '_blank' },
}
