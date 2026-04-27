import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Stepper, StepperItem, StepperIndicator, StepperTitle, StepperDescription, StepperSeparator } from './Stepper'

const meta = {
  title: 'Primitives/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  args: {
    value: 2,
    orientation: 'horizontal' as const,
  },
  argTypes: {
    value: { control: { type: 'number', min: 1, max: 3 } },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
} satisfies Meta<typeof Stepper>

export default meta
type Story = StoryObj<typeof meta>

const steps = [
  { step: 1, title: 'Account', description: 'Create your account' },
  { step: 2, title: 'Profile', description: 'Set up your profile' },
  { step: 3, title: 'Done', description: 'All finished' },
]

export const Default: Story = {
  render: (args) => (
    <Stepper {...args} style={{ display: 'flex', gap: 0, listStyle: 'none', padding: 0, margin: 0 }}>
      {steps.map(({ step, title, description }, i) => (
        <React.Fragment key={step}>
          <StepperItem step={step} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <StepperIndicator
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#e5e7eb',
                fontSize: 13,
                fontWeight: 600,
              }}
            />
            <div>
              <StepperTitle style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>{title}</StepperTitle>
              <StepperDescription style={{ margin: 0, fontSize: 12, color: '#6b7280' }}>
                {description}
              </StepperDescription>
            </div>
          </StepperItem>
          {i < steps.length - 1 && (
            <StepperSeparator
              style={{ flex: 1, height: 1, background: '#e5e7eb', margin: '0 8px', alignSelf: 'center' }}
            />
          )}
        </React.Fragment>
      ))}
    </Stepper>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [step, setStep] = useState(1)
    return (
      <div>
        <Stepper value={step} style={{ display: 'flex', gap: 0, listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
          {steps.map(({ step: s, title }, i) => (
            <React.Fragment key={s}>
              <StepperItem step={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <StepperIndicator
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#e5e7eb',
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                />
                <StepperTitle style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>{title}</StepperTitle>
              </StepperItem>
              {i < steps.length - 1 && (
                <StepperSeparator
                  style={{ flex: 1, height: 1, background: '#e5e7eb', margin: '0 8px', alignSelf: 'center' }}
                />
              )}
            </React.Fragment>
          ))}
        </Stepper>
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="button" onClick={() => setStep((s) => Math.max(1, s - 1))} disabled={step === 1}>
            Back
          </button>
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(steps.length + 1, s + 1))}
            disabled={step > steps.length}
          >
            {step > steps.length ? 'Done' : step === steps.length ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    )
  },
}
