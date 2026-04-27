import React__default from 'react'

interface MaskedInputProps
  extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange'> {
  /** Mask string. `9` = digit, `a` = letter, `*` = alphanumeric, anything else = literal. */
  mask: string
  /** Controlled raw value (unmasked characters only). */
  value?: string
  /** Uncontrolled initial raw value. */
  defaultValue?: string
  /** Called with the raw unmasked value, plus the masked display string. */
  onValueChange?: (raw: string, masked: string) => void
  /** Character displayed for unfilled placeholder slots. When unset, slots collapse. */
  maskChar?: string
}
declare const MaskedInput: React__default.ForwardRefExoticComponent<
  MaskedInputProps & React__default.RefAttributes<HTMLInputElement>
>

export { MaskedInput, type MaskedInputProps }
