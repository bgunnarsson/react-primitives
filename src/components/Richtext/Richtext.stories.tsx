import type { Meta, StoryObj } from '@storybook/react'
import { Richtext } from './Richtext'

const meta = {
  title: 'Primitives/Richtext',
  component: Richtext,
  tags: ['autodocs'],
  argTypes: {
    html: { control: 'text' },
  },
} satisfies Meta<typeof Richtext>

export default meta
type Story = StoryObj<typeof meta>

const styles = `
  .sb-prose {
    max-width: 640px;
    font: 400 16px/1.65 ui-sans-serif, system-ui, sans-serif;
    color: #1f2937;
  }
  .sb-prose h1, .sb-prose h2, .sb-prose h3 {
    margin: 1.4em 0 0.5em;
    color: #111827;
    font-weight: 600;
    line-height: 1.25;
  }
  .sb-prose h1 { font-size: 28px; }
  .sb-prose h2 { font-size: 22px; }
  .sb-prose h3 { font-size: 18px; }
  .sb-prose p { margin: 0 0 1em; }
  .sb-prose a { color: #2563eb; text-decoration: underline; text-underline-offset: 2px; }
  .sb-prose a:hover { color: #1d4ed8; }
  .sb-prose strong { color: #111827; font-weight: 600; }
  .sb-prose em { font-style: italic; }
  .sb-prose ul, .sb-prose ol { margin: 0 0 1em; padding-left: 1.4em; }
  .sb-prose li { margin: 0.25em 0; }
  .sb-prose blockquote {
    margin: 1em 0;
    padding: 0.5em 1em;
    border-left: 3px solid #d1d5db;
    color: #4b5563;
    background: #f9fafb;
    border-radius: 0 6px 6px 0;
  }
  .sb-prose code {
    padding: 2px 6px;
    background: #f3f4f6;
    border-radius: 4px;
    font: 0.9em ui-monospace, Menlo, monospace;
    color: #1f2937;
  }
`

export const Default: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <Richtext {...args} className="sb-prose" />
    </>
  ),
  args: {
    html:
      '<p>This is <strong>rich text</strong> content from a CMS. It can contain <a href="#">links</a>, <em>emphasis</em>, and inline <code>code</code>.</p><ul><li>List item one</li><li>List item two</li></ul>',
  },
}

export const LongForm: Story = {
  render: (args) => (
    <>
      <style>{styles}</style>
      <Richtext {...args} className="sb-prose" />
    </>
  ),
  args: {
    html: `
      <h2>Introduction</h2>
      <p>Welcome to the <strong>Unstyled React Primitives</strong> library. It ships zero CSS by default so you can style every component with Tailwind, CSS Modules, or plain CSS.</p>
      <h3>Why unstyled?</h3>
      <p>Design systems are opinionated. A library that ships its own visual opinions forces teams to fight the defaults. By staying unstyled we get out of the way.</p>
      <blockquote>Small surface area, full control.</blockquote>
      <ul>
        <li>Accessible by default (built on Radix)</li>
        <li>Composable — each part accepts <code>className</code></li>
        <li>Zero runtime style cost</li>
      </ul>
    `,
  },
}
