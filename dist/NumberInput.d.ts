import React__default from 'react'

interface NumberInputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  value?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
}
declare const NumberInput: React__default.ForwardRefExoticComponent<
  NumberInputProps & React__default.RefAttributes<HTMLInputElement>
>

export { NumberInput, type NumberInputProps }
