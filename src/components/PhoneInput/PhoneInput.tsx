import React from 'react'
import { DEFAULT_COUNTRIES, type PhoneCountry } from './countries'

export type { PhoneCountry }

export interface PhoneInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'defaultValue' | 'onChange'> {
  /** Controlled E.164 value (e.g. `+15551234567`). */
  value?: string
  /** Uncontrolled initial E.164 value. */
  defaultValue?: string
  /** Called with the E.164-formatted value (or empty string when cleared). */
  onValueChange?: (value: string, country: PhoneCountry) => void
  /** Default country ISO code when no value is supplied. */
  defaultCountry?: string
  /** List of countries to render in the selector. */
  countries?: PhoneCountry[]
  /** Custom national-number formatter (digits → display string). */
  formatNational?: (digits: string, country: PhoneCountry) => string
  selectClassName?: string
  selectStyle?: React.CSSProperties
  inputClassName?: string
  inputStyle?: React.CSSProperties
}

const onlyDigits = (s: string) => s.replace(/\D+/g, '')

const findCountryFromValue = (value: string, countries: PhoneCountry[]): PhoneCountry | undefined => {
  if (!value.startsWith('+')) {
    return undefined
  }
  const digits = value.slice(1)
  return [...countries].sort((a, b) => b.dialCode.length - a.dialCode.length).find((c) => digits.startsWith(c.dialCode))
}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      value: valueProp,
      defaultValue,
      onValueChange,
      defaultCountry = 'US',
      countries = DEFAULT_COUNTRIES,
      formatNational,
      selectClassName,
      selectStyle,
      inputClassName,
      inputStyle,
      className,
      style,
      disabled,
      placeholder,
      ...inputProps
    },
    ref
  ) => {
    const controlled = valueProp !== undefined

    const initialCountry =
      findCountryFromValue(controlled ? (valueProp as string) : (defaultValue ?? ''), countries) ??
      countries.find((c) => c.code === defaultCountry) ??
      countries[0]

    const initialDigits = (() => {
      const v = controlled ? (valueProp as string) : (defaultValue ?? '')
      if (!v.startsWith('+') || !initialCountry) {
        return ''
      }
      return v.slice(1 + initialCountry.dialCode.length)
    })()

    const [country, setCountry] = React.useState<PhoneCountry>(initialCountry)
    const [nationalDigits, setNationalDigits] = React.useState(initialDigits)

    React.useEffect(() => {
      if (!controlled) {
        return
      }
      const next = findCountryFromValue(valueProp as string, countries)
      if (next) {
        setCountry(next)
        setNationalDigits(valueProp?.slice(1 + next.dialCode.length))
      } else if (!valueProp) {
        setNationalDigits('')
      }
    }, [valueProp, controlled, countries])

    const buildE164 = (c: PhoneCountry, digits: string) => (digits ? `+${c.dialCode}${digits}` : '')

    const emit = (c: PhoneCountry, digits: string) => {
      onValueChange?.(buildE164(c, digits), c)
    }

    const handleCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const next = countries.find((c) => c.code === e.target.value)
      if (!next) {
        return
      }
      setCountry(next)
      emit(next, nationalDigits)
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const digits = onlyDigits(e.target.value)
      setNationalDigits(digits)
      emit(country, digits)
    }

    const display = formatNational ? formatNational(nationalDigits, country) : nationalDigits

    return (
      <div data-disabled={disabled || undefined} className={className} style={style}>
        <select
          aria-label="Country"
          value={country.code}
          onChange={handleCountry}
          disabled={disabled}
          className={selectClassName}
          style={selectStyle}
        >
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.flag} {c.name} (+{c.dialCode})
            </option>
          ))}
        </select>
        <input
          ref={ref}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          value={display}
          onChange={handleInput}
          disabled={disabled}
          placeholder={placeholder}
          className={inputClassName}
          style={inputStyle}
          {...inputProps}
        />
      </div>
    )
  }
)
PhoneInput.displayName = 'PhoneInput'
