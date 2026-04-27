import type { Meta, StoryObj } from '@storybook/react'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from './Select'

const meta = {
  title: 'Primitives/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const styles = `
  .sb-select-trigger {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    width: 220px;
    padding: 8px 12px;
    background: #ffffff;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font: 500 14px ui-sans-serif, system-ui, sans-serif;
    color: #111827;
    cursor: pointer;
    outline: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    transition: background 120ms ease, box-shadow 120ms ease;
  }
  .sb-select-trigger:hover { background: #f9fafb; }
  .sb-select-trigger:focus-visible { box-shadow: 0 0 0 2px #3b82f6; }
  .sb-select-trigger[data-placeholder] { color: #9ca3af; font-weight: 400; }
  .sb-select-trigger[data-state="open"] { background: #f3f4f6; }
  .sb-select-trigger svg { color: #6b7280; width: 12px; height: 12px; }

  .sb-select-content {
    min-width: 220px;
    padding: 4px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
    font: 400 14px ui-sans-serif, system-ui, sans-serif;
    color: #111827;
    animation: sb-select-in 120ms ease;
  }
  @keyframes sb-select-in {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .sb-select-item {
    display: flex;
    align-items: center;
    padding: 7px 10px 7px 28px;
    border-radius: 6px;
    cursor: pointer;
    outline: none;
    user-select: none;
    position: relative;
  }
  .sb-select-item[data-highlighted] { background: #eff6ff; color: #1d4ed8; }
  .sb-select-item[data-disabled] { color: #9ca3af; pointer-events: none; }
  .sb-select-item[data-state="checked"]::before {
    content: "✓";
    position: absolute;
    left: 10px;
    font-weight: 600;
    color: #2563eb;
  }

  .sb-select-label {
    padding: 6px 10px 4px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #6b7280;
  }
  .sb-select-separator { height: 1px; margin: 4px -2px; background: #e5e7eb; }
`

export const Default: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <Select>
        <SelectTrigger className="sb-select-trigger">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent className="sb-select-content">
          <SelectItem value="apple" className="sb-select-item">
            Apple
          </SelectItem>
          <SelectItem value="banana" className="sb-select-item">
            Banana
          </SelectItem>
          <SelectItem value="cherry" className="sb-select-item">
            Cherry
          </SelectItem>
        </SelectContent>
      </Select>
    </>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <Select>
        <SelectTrigger className="sb-select-trigger">
          <SelectValue placeholder="Select a food" />
        </SelectTrigger>
        <SelectContent className="sb-select-content">
          <SelectGroup>
            <SelectLabel className="sb-select-label">Fruits</SelectLabel>
            <SelectItem value="apple" className="sb-select-item">
              Apple
            </SelectItem>
            <SelectItem value="banana" className="sb-select-item">
              Banana
            </SelectItem>
          </SelectGroup>
          <SelectSeparator className="sb-select-separator" />
          <SelectGroup>
            <SelectLabel className="sb-select-label">Vegetables</SelectLabel>
            <SelectItem value="carrot" className="sb-select-item">
              Carrot
            </SelectItem>
            <SelectItem value="potato" className="sb-select-item">
              Potato
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  ),
}

export const WithDisabledItem: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <Select>
        <SelectTrigger className="sb-select-trigger">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent className="sb-select-content">
          <SelectItem value="available" className="sb-select-item">
            Available
          </SelectItem>
          <SelectItem value="unavailable" disabled className="sb-select-item">
            Unavailable
          </SelectItem>
          <SelectItem value="coming-soon" disabled className="sb-select-item">
            Coming soon
          </SelectItem>
        </SelectContent>
      </Select>
    </>
  ),
}
