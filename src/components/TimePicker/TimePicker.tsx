import React from 'react'

export interface TimeValue {
  hours: number
  minutes: number
}

export interface TimePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  value?: TimeValue
  defaultValue?: TimeValue
  onValueChange?: (value: TimeValue) => void
  step?: number
  hour12?: boolean
  disabled?: boolean
  name?: string
  inputClassName?: string
  inputStyle?: React.CSSProperties
  'aria-label'?: string
}

const pad = (n: number) => String(n).padStart(2, '0')

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max)

const parse = (str: string, hour12: boolean): TimeValue | null => {
  const trimmed = str.trim().toLowerCase()
  const ampm = /\s*(am|pm)$/.exec(trimmed)
  const raw = ampm ? trimmed.replace(/\s*(am|pm)$/, '') : trimmed
  const [hStr, mStr] = raw.split(':')
  if (hStr === undefined || mStr === undefined) return null
  let hours = parseInt(hStr, 10)
  const minutes = parseInt(mStr, 10)
  if (Number.isNaN(hours) || Number.isNaN(minutes)) return null
  if (hour12 && ampm) {
    const suffix = ampm[1]
    if (suffix === 'pm' && hours < 12) hours += 12
    if (suffix === 'am' && hours === 12) hours = 0
  }
  return {
    hours: clamp(hours, 0, 23),
    minutes: clamp(minutes, 0, 59),
  }
}

const format = (value: TimeValue, hour12: boolean) => {
  if (hour12) {
    const suffix = value.hours >= 12 ? 'PM' : 'AM'
    const h12 = value.hours % 12 === 0 ? 12 : value.hours % 12
    return `${pad(h12)}:${pad(value.minutes)} ${suffix}`
  }
  return `${pad(value.hours)}:${pad(value.minutes)}`
}

export const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  (
    {
      value: valueProp,
      defaultValue,
      onValueChange,
      step = 1,
      hour12 = false,
      disabled,
      name,
      inputClassName,
      inputStyle,
      className,
      style,
      'aria-label': ariaLabel = 'Time',
      ...rest
    },
    ref,
  ) => {
    const [uncontrolled, setUncontrolled] = React.useState<TimeValue>(
      defaultValue ?? { hours: 0, minutes: 0 },
    )
    const controlled = valueProp !== undefined
    const value = controlled ? valueProp! : uncontrolled
    const [draft, setDraft] = React.useState<string | null>(null)

    const commit = (next: TimeValue) => {
      if (!controlled) setUncontrolled(next)
      onValueChange?.(next)
    }

    const displayValue = draft ?? format(value, hour12)

    return (
      <div ref={ref} className={className} style={style} {...rest}>
        <input
          type="text"
          name={name}
          value={displayValue}
          disabled={disabled}
          aria-label={ariaLabel}
          inputMode="numeric"
          className={inputClassName}
          style={inputStyle}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={() => {
            if (draft == null) return
            const parsed = parse(draft, hour12)
            if (parsed) commit(parsed)
            setDraft(null)
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
              e.preventDefault()
              const direction = e.key === 'ArrowUp' ? 1 : -1
              const total = value.hours * 60 + value.minutes + direction * step
              const wrapped = ((total % 1440) + 1440) % 1440
              commit({ hours: Math.floor(wrapped / 60), minutes: wrapped % 60 })
              setDraft(null)
            } else if (e.key === 'Enter') {
              e.preventDefault()
              ;(e.currentTarget as HTMLInputElement).blur()
            }
          }}
        />
      </div>
    )
  },
)
TimePicker.displayName = 'TimePicker'
