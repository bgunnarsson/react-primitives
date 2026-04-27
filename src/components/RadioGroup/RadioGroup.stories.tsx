import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from './RadioGroup'
import { Label } from '../Label'

const meta = {
  title: 'Primitives/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const radioStyles = `
  [data-radix-radio-group-item] {
    width: 18px; height: 18px; border-radius: 50%;
    border: 2px solid #d1d5db; background: white; cursor: pointer; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
  }
  [data-radix-radio-group-item][data-state=checked] { border-color: #3b82f6; }
  [data-radix-radio-group-item][data-disabled] { opacity: 0.5; pointer-events: none; }
  [data-radix-radio-group-indicator] {
    width: 8px; height: 8px; border-radius: 50%; background: #3b82f6;
  }
`

export const Default: Story = {
  render: () => (
    <>
      <style>{radioStyles}</style>
      <RadioGroup name="demo" defaultValue="option-1" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {['option-1', 'option-2', 'option-3'].map((val, i) => (
          <div key={val} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <RadioGroupItem value={val} id={`rg-${val}`} />
            <Label htmlFor={`rg-${val}`} style={{ fontSize: 14, cursor: 'pointer' }}>
              Option {i + 1}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </>
  ),
}
