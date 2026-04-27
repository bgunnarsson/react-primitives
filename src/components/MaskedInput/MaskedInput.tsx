import React from 'react'

const PLACEHOLDERS = {
  '9': /[0-9]/,
  a: /[A-Za-z]/,
  '*': /[A-Za-z0-9]/,
} as const

type PlaceholderKey = keyof typeof PLACEHOLDERS

const isPlaceholder = (ch: string): ch is PlaceholderKey => ch in PLACEHOLDERS

export interface MaskedInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange'> {
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

const applyMask = (raw: string, mask: string, maskChar?: string) => {
  let masked = ''
  let rawIndex = 0
  let lastFilled = -1

  for (let i = 0; i < mask.length; i++) {
    const m = mask[i]
    if (isPlaceholder(m)) {
      const ch = raw[rawIndex]
      if (ch !== undefined && PLACEHOLDERS[m].test(ch)) {
        masked += ch
        rawIndex++
        lastFilled = i
      } else if (maskChar) {
        masked += maskChar
      } else {
        break
      }
    } else {
      masked += m
      if (rawIndex > 0 && lastFilled === i - 1) {
        lastFilled = i
      }
    }
  }

  return { masked, caret: lastFilled + 1 }
}

const extractRaw = (input: string, mask: string) => {
  let raw = ''
  let i = 0
  let j = 0
  while (i < mask.length && j < input.length) {
    const m = mask[i]
    const ch = input[j]
    if (isPlaceholder(m)) {
      if (PLACEHOLDERS[m].test(ch)) {
        raw += ch
        i++
        j++
      } else {
        j++
      }
    } else {
      if (ch === m) {
        i++
      }
      j++
    }
  }
  return raw
}

export const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  (
    { mask, value: valueProp, defaultValue, onValueChange, maskChar, className, style, disabled, ...inputProps },
    ref
  ) => {
    const controlled = valueProp !== undefined
    const [uncontrolled, setUncontrolled] = React.useState(defaultValue ?? '')
    const raw = controlled ? (valueProp as string) : uncontrolled
    const innerRef = React.useRef<HTMLInputElement>(null)
    React.useImperativeHandle(ref, () => innerRef.current as HTMLInputElement, [])
    const pendingCaret = React.useRef<number | null>(null)

    React.useEffect(() => {
      if (pendingCaret.current !== null && innerRef.current) {
        const pos = pendingCaret.current
        innerRef.current.setSelectionRange(pos, pos)
        pendingCaret.current = null
      }
    })

    const { masked } = applyMask(raw, mask, maskChar)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextRaw = extractRaw(e.target.value, mask)
      const next = applyMask(nextRaw, mask, maskChar)
      pendingCaret.current = next.caret
      if (!controlled) {
        setUncontrolled(nextRaw)
      }
      onValueChange?.(nextRaw, next.masked)
    }

    return (
      <input
        ref={innerRef}
        type="text"
        value={masked}
        onChange={handleChange}
        disabled={disabled}
        className={className}
        style={style}
        {...inputProps}
      />
    )
  }
)
MaskedInput.displayName = 'MaskedInput'
