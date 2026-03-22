import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'

const meta = {
  title: 'Primitives/Slider',
  component: Slider,
  tags: ['autodocs'],
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
  },
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

const sliderStyles = `
  .story-slider { position: relative; display: flex; align-items: center; width: 100%; height: 20px; touch-action: none; user-select: none; cursor: pointer; }
  .story-slider[data-disabled] { opacity: 0.5; pointer-events: none; }
  .story-slider > span:first-child { position: relative; flex-grow: 1; height: 6px; background: #e5e7eb; border-radius: 9999px; }
  .story-slider > span:first-child > span { position: absolute; top: 0; height: 100%; background: #3b82f6; border-radius: 9999px; }
  .story-slider > span + span { display: block; width: 18px; height: 18px; background: white; border: 2px solid #3b82f6; border-radius: 50%; box-shadow: 0 1px 4px rgba(0,0,0,0.15); outline: none; cursor: grab; }
  .story-slider > span + span:focus-visible { box-shadow: 0 0 0 3px rgba(59,130,246,0.35); }
  .story-slider > span + span:active { cursor: grabbing; }
`

const labelStyle: React.CSSProperties = { fontSize: 13, fontWeight: 500, color: '#374151' }
const valueStyle: React.CSSProperties = { fontSize: 13, fontWeight: 600, color: '#3b82f6' }

function SliderRow({ label, value, children }: { label: string; value: string; children: React.ReactNode }) {
  return (
    <div style={{ width: 320 }}>
      <style>{sliderStyles}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
        <span style={labelStyle}>{label}</span>
        <span style={valueStyle}>{value}</span>
      </div>
      {children}
    </div>
  )
}

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState([50])
    return (
      <SliderRow label="Volume" value={`${value[0]}`}>
        <Slider {...args} className="story-slider" value={value} onValueChange={setValue} />
      </SliderRow>
    )
  },
}

export const Range: Story = {
  render: () => {
    const [value, setValue] = useState([20, 80])
    return (
      <SliderRow label="Price range" value={`$${value[0]} – $${value[1]}`}>
        <Slider className="story-slider" value={value} onValueChange={setValue} min={0} max={100} />
      </SliderRow>
    )
  },
}

export const Steps: Story = {
  render: () => {
    const [value, setValue] = useState([3])
    const labels = ['XS', 'S', 'M', 'L', 'XL']
    return (
      <SliderRow label="Size" value={labels[value[0] - 1]}>
        <Slider className="story-slider" value={value} onValueChange={setValue} min={1} max={5} step={1} />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
          {labels.map((l) => (
            <span key={l} style={{ fontSize: 11, color: '#9ca3af' }}>{l}</span>
          ))}
        </div>
      </SliderRow>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <SliderRow label="Disabled" value="40">
      <Slider className="story-slider" defaultValue={[40]} disabled />
    </SliderRow>
  ),
}
