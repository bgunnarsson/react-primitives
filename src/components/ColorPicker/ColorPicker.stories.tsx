import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ColorPicker, ColorPickerInput, ColorPickerWithAlpha } from './ColorPicker'

const meta: Meta<typeof ColorPicker> = {
  title: 'Primitives/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ColorPicker>

export const Hex: Story = {
  render: () => {
    const [color, setColor] = useState('#3b82f6')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 220 }}>
        <ColorPicker color={color} onChange={setColor} />
        <ColorPickerInput color={color} onChange={setColor} prefixed style={{ padding: 8, border: '1px solid #e5e7eb', borderRadius: 6, fontFamily: 'monospace' }} />
        <div style={{ width: '100%', height: 48, background: color, borderRadius: 6, border: '1px solid #e5e7eb' }} />
      </div>
    )
  },
}

export const HexWithAlpha: Story = {
  render: () => {
    const [color, setColor] = useState('#3b82f6cc')
    return (
      <div style={{ width: 220 }}>
        <ColorPickerWithAlpha color={color} onChange={setColor} />
        <p style={{ fontFamily: 'monospace', fontSize: 12, color: '#6b7280' }}>{color}</p>
      </div>
    )
  },
}
