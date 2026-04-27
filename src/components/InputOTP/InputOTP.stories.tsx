import type React from 'react'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator, REGEXP_ONLY_DIGITS } from './InputOTP'

const meta: Meta<typeof InputOTP> = {
  title: 'Primitives/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InputOTP>

const groupStyle: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: 4 }
const slotStyle: React.CSSProperties = {
  width: 40,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #d1d5db',
  borderRadius: 6,
  fontSize: 18,
  fontVariantNumeric: 'tabular-nums',
  background: 'white',
}
const sepStyle: React.CSSProperties = { color: '#9ca3af', padding: '0 4px' }

export const SixDigitCode: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div>
        <InputOTP maxLength={6} value={value} onChange={setValue} pattern={REGEXP_ONLY_DIGITS}>
          <InputOTPGroup style={groupStyle}>
            <InputOTPSlot index={0} style={slotStyle} />
            <InputOTPSlot index={1} style={slotStyle} />
            <InputOTPSlot index={2} style={slotStyle} />
            <InputOTPSeparator style={sepStyle} />
            <InputOTPSlot index={3} style={slotStyle} />
            <InputOTPSlot index={4} style={slotStyle} />
            <InputOTPSlot index={5} style={slotStyle} />
          </InputOTPGroup>
        </InputOTP>
        <p style={{ fontSize: 12, color: '#6b7280', marginTop: 8 }}>Value: {value || '—'}</p>
      </div>
    )
  },
}
