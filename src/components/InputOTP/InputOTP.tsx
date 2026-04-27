import React from 'react'
import { OTPInput, OTPInputContext, type OTPInputProps } from 'input-otp'

export type InputOTPProps = OTPInputProps

export const InputOTP = React.forwardRef<HTMLInputElement, InputOTPProps>((props, ref) => (
  <OTPInput ref={ref} {...props} />
))
InputOTP.displayName = 'InputOTP'

export interface InputOTPGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export const InputOTPGroup = React.forwardRef<HTMLDivElement, InputOTPGroupProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
))
InputOTPGroup.displayName = 'InputOTPGroup'

export interface InputOTPSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number
}

export const InputOTPSlot = React.forwardRef<HTMLDivElement, InputOTPSlotProps>(
  ({ index, className, ...props }, ref) => {
    const context = React.useContext(OTPInputContext)
    const slot = context.slots[index]
    if (!slot) return null
    const { char, hasFakeCaret, isActive } = slot
    return (
      <div ref={ref} data-active={isActive ? '' : undefined} className={className} {...props}>
        {char}
        {hasFakeCaret ? <span data-fake-caret="" /> : null}
      </div>
    )
  }
)
InputOTPSlot.displayName = 'InputOTPSlot'

export interface InputOTPSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export const InputOTPSeparator = React.forwardRef<HTMLDivElement, InputOTPSeparatorProps>(
  ({ className, children = '-', ...props }, ref) => (
    <div ref={ref} role="separator" className={className} {...props}>
      {children}
    </div>
  )
)
InputOTPSeparator.displayName = 'InputOTPSeparator'

export { REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
