import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion'

const meta = {
  title: 'Primitives/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  args: { type: 'single' as const, collapsible: true },
  argTypes: {
    type: { control: 'radio', options: ['single', 'multiple'] },
    collapsible: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const accordionStyles = `
  .story-accordion h3 {
    margin: 0;
  }
  .story-accordion button:hover {
    background: #f9fafb;
  }
  .story-accordion button[data-state=open]::after {
    transform: rotate(180deg);
  }
  @keyframes accordion-down {
    from { height: 0; opacity: 0; }
    to { height: var(--radix-accordion-content-height); opacity: 1; }
  }
  @keyframes accordion-up {
    from { height: var(--radix-accordion-content-height); opacity: 1; }
    to { height: 0; opacity: 0; }
  }
  .story-accordion [data-state=open][data-radix-accordion-content] {
    animation: accordion-down 0.2s ease-out;
  }
  .story-accordion [data-state=closed][data-radix-accordion-content] {
    animation: accordion-up 0.2s ease-out;
  }
`

const triggerStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '14px 16px',
  fontSize: 14,
  fontWeight: 500,
  color: '#111827',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'left',
}

const items = [
  { value: 'item-1', trigger: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
  {
    value: 'item-2',
    trigger: 'Is it styled?',
    content: 'No. It is unstyled by default, styled via className in your project.',
  },
  {
    value: 'item-3',
    trigger: 'Is it animated?',
    content: "Yes. It uses Radix's built-in height CSS variable for smooth open/close animation.",
  },
]

export const Default: Story = {
  render: (args) => (
    <>
      <style>{accordionStyles}</style>
      <Accordion
        {...(args as any)}
        className="story-accordion"
        style={{ width: 480, border: '1px solid #e5e7eb', borderRadius: 10, overflow: 'hidden' }}
      >
        {items.map((item, i) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            style={{ borderTop: i === 0 ? 'none' : '1px solid #e5e7eb' }}
          >
            <AccordionTrigger style={triggerStyle}>
              {item.trigger}
              <span style={{ fontSize: 12, color: '#6b7280', transition: 'transform 0.2s', display: 'inline-block' }}>
                ▾
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div style={{ padding: '0 16px 14px', fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>
                {item.content}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  ),
}
