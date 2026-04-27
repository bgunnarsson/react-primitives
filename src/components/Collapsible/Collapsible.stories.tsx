import type { Meta, StoryObj } from '@storybook/react'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './Collapsible'

const meta = {
  title: 'Primitives/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

const styles = `
  .sb-collapsible {
    width: 320px;
    font: 400 14px ui-sans-serif, system-ui, sans-serif;
    color: #111827;
  }
  .sb-collapsible-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 14px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    outline: none;
    transition: background 120ms ease;
  }
  .sb-collapsible-trigger:hover { background: #f9fafb; }
  .sb-collapsible-trigger:focus-visible { box-shadow: 0 0 0 2px #3b82f6; }
  .sb-collapsible-trigger[data-state="open"] {
    background: #eff6ff;
    color: #1d4ed8;
    border-color: #bfdbfe;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .sb-collapsible-chevron {
    transition: transform 160ms ease;
  }
  .sb-collapsible-trigger[data-state="open"] .sb-collapsible-chevron { transform: rotate(180deg); }

  .sb-collapsible-content {
    padding: 12px 14px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-top: none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #374151;
    line-height: 1.5;
  }
  .sb-collapsible-content p { margin: 0; }
`

const Chevron = () => (
  <svg className="sb-collapsible-chevron" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Default: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <Collapsible className="sb-collapsible">
        <CollapsibleTrigger asChild>
          <button className="sb-collapsible-trigger" type="button">
            <span>What's new in v2?</span>
            <Chevron />
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent className="sb-collapsible-content">
          <p>
            New primitives shipped this week: Calendar, Combobox, and TimePicker. Each component accepts a{' '}
            <code>className</code> prop so you can style them however you like.
          </p>
        </CollapsibleContent>
      </Collapsible>
    </>
  ),
}
