import React__default from 'react'
import { OTPInputProps } from 'input-otp'
export { REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'

type InputOTPProps = OTPInputProps
declare const InputOTP: React__default.ForwardRefExoticComponent<
  OTPInputProps & React__default.RefAttributes<HTMLInputElement>
>
interface InputOTPGroupProps extends React__default.HTMLAttributes<HTMLDivElement> {}
declare const InputOTPGroup: React__default.ForwardRefExoticComponent<
  InputOTPGroupProps & React__default.RefAttributes<HTMLDivElement>
>
interface InputOTPSlotProps extends React__default.HTMLAttributes<HTMLDivElement> {
  index: number
}
declare const InputOTPSlot: React__default.ForwardRefExoticComponent<
  InputOTPSlotProps & React__default.RefAttributes<HTMLDivElement>
>
interface InputOTPSeparatorProps extends React__default.HTMLAttributes<HTMLDivElement> {}
declare const InputOTPSeparator: React__default.ForwardRefExoticComponent<
  InputOTPSeparatorProps & React__default.RefAttributes<HTMLDivElement>
>

export {
  InputOTP,
  InputOTPGroup,
  type InputOTPGroupProps,
  type InputOTPProps,
  InputOTPSeparator,
  type InputOTPSeparatorProps,
  InputOTPSlot,
  type InputOTPSlotProps,
}
