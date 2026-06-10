import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { Label } from '../Label'

const meta = {
  title: 'Primitives/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

const styles = (
  <style>{`
    .input-story-field { width: 320px; }
    .input-story-stack { width: 320px; display: flex; flex-direction: column; }
    .input-story-label { display: block; font-size: 13px; font-weight: 500; color: #374151; margin-bottom: 4px; }
    .input-story-wrapper { display: block; position: relative; width: 100%; }
    .input-story-input { display: block; width: 100%; padding: 8px 12px; font-size: 14px; border-radius: 6px; border: 1px solid #d1d5db; outline: none; background: white; color: #111827; box-sizing: border-box; }
    .input-story-placeholder { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #6b7280; font-size: 14px; pointer-events: none; transition: transform 150ms ease, color 150ms ease; }
    .input-story-wrapper:focus-within .input-story-placeholder { transform: translateY(-140%) scale(0.85); color: #2563eb; }
    .input-story-input:disabled { opacity: 0.5; cursor: not-allowed; background: #f9fafb; }
    .input-story-input:disabled + .input-story-placeholder { opacity: 0.5; }
  `}</style>
)

export const Default: Story = {
  render: (args) => (
    <div className="input-story-field">
      {styles}
      <Input
        className="input-story-wrapper"
        inputClassName="input-story-input"
        placeholderClassName="input-story-placeholder"
        placeholder="Enter text..."
        {...args}
      />
    </div>
  ),
}

export const WithLabel: Story = {
  render: (args) => (
    <div className="input-story-stack">
      {styles}
      <Label htmlFor="input-with-label" className="input-story-label">
        Email address
      </Label>
      <Input
        id="input-with-label"
        type="email"
        placeholder="you@example.com"
        className="input-story-wrapper"
        inputClassName="input-story-input"
        placeholderClassName="input-story-placeholder"
        {...args}
      />
    </div>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <div className="input-story-field">
      {styles}
      <Input
        className="input-story-wrapper"
        inputClassName="input-story-input"
        placeholderClassName="input-story-placeholder"
        placeholder="Disabled input"
        disabled
        {...args}
      />
    </div>
  ),
}
