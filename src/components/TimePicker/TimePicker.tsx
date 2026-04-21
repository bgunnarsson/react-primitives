import React from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '../Popover'

export interface TimeValue {
  hours: number
  minutes: number
}

export interface TimePickerProps {
  value?: TimeValue
  defaultValue?: TimeValue
  onValueChange?: (value: TimeValue) => void
  step?: number
  hour12?: boolean
  disabled?: boolean
  name?: string
  placeholder?: string
  'aria-label'?: string
  triggerClassName?: string
  contentClassName?: string
  columnClassName?: string
  itemClassName?: string
  itemSelectedClassName?: string
}

const pad = (n: number) => String(n).padStart(2, '0')

const formatDisplay = (value: TimeValue | undefined, hour12: boolean, placeholder: string) => {
  if (!value) return placeholder
  if (hour12) {
    const suffix = value.hours >= 12 ? 'PM' : 'AM'
    const h12 = value.hours % 12 === 0 ? 12 : value.hours % 12
    return `${pad(h12)}:${pad(value.minutes)} ${suffix}`
  }
  return `${pad(value.hours)}:${pad(value.minutes)}`
}

const toHour12 = (h24: number) => ({
  hour: h24 % 12 === 0 ? 12 : h24 % 12,
  period: (h24 >= 12 ? 'PM' : 'AM') as 'AM' | 'PM',
})

const fromHour12 = (hour: number, period: 'AM' | 'PM') => {
  if (period === 'AM') return hour === 12 ? 0 : hour
  return hour === 12 ? 12 : hour + 12
}

export const TimePicker = ({
  value: valueProp,
  defaultValue,
  onValueChange,
  step = 1,
  hour12 = false,
  disabled,
  name,
  placeholder = 'Pick a time',
  'aria-label': ariaLabel,
  triggerClassName,
  contentClassName,
  columnClassName,
  itemClassName,
  itemSelectedClassName,
}: TimePickerProps) => {
  const [open, setOpen] = React.useState(false)
  const [uncontrolled, setUncontrolled] = React.useState<TimeValue | undefined>(defaultValue)
  const controlled = valueProp !== undefined
  const value = controlled ? valueProp : uncontrolled
  const current = value ?? { hours: 0, minutes: 0 }
  const h12 = toHour12(current.hours)

  const commit = (next: TimeValue) => {
    if (!controlled) setUncontrolled(next)
    onValueChange?.(next)
  }

  const safeStep = Math.max(1, step)
  const hourList = hour12 ? [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] : Array.from({ length: 24 }, (_, i) => i)
  const minuteList = Array.from({ length: Math.ceil(60 / safeStep) }, (_, i) => i * safeStep).filter((m) => m < 60)

  const hoursRef = React.useRef<HTMLDivElement>(null)
  const minutesRef = React.useRef<HTMLDivElement>(null)
  const periodRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!open) return
    const id = requestAnimationFrame(() => {
      for (const ref of [hoursRef, minutesRef, periodRef]) {
        const el = ref.current?.querySelector<HTMLElement>('[data-selected="true"]')
        el?.scrollIntoView({ block: 'center' })
      }
    })
    return () => cancelAnimationFrame(id)
  }, [open])

  const itemClass = (selected: boolean) => {
    if (selected && itemSelectedClassName) {
      return [itemClassName, itemSelectedClassName].filter(Boolean).join(' ')
    }
    return itemClassName
  }

  const selectHour = (h: number) => {
    if (hour12) commit({ hours: fromHour12(h, h12.period), minutes: current.minutes })
    else commit({ hours: h, minutes: current.minutes })
  }
  const selectMinute = (m: number) => commit({ hours: current.hours, minutes: m })
  const selectPeriod = (p: 'AM' | 'PM') => commit({ hours: fromHour12(h12.hour, p), minutes: current.minutes })

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger disabled={disabled} className={triggerClassName} aria-label={ariaLabel}>
          {formatDisplay(value, hour12, placeholder)}
        </PopoverTrigger>
        <PopoverContent className={contentClassName}>
          <div ref={hoursRef} className={columnClassName} role="listbox" aria-label="Hours">
            {hourList.map((h) => {
              const selected = hour12 ? h === h12.hour : h === current.hours
              return (
                <button
                  key={h}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  data-selected={selected}
                  className={itemClass(selected)}
                  onClick={() => selectHour(h)}
                >
                  {hour12 ? String(h) : pad(h)}
                </button>
              )
            })}
          </div>
          <div ref={minutesRef} className={columnClassName} role="listbox" aria-label="Minutes">
            {minuteList.map((m) => {
              const selected = m === current.minutes
              return (
                <button
                  key={m}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  data-selected={selected}
                  className={itemClass(selected)}
                  onClick={() => selectMinute(m)}
                >
                  {pad(m)}
                </button>
              )
            })}
          </div>
          {hour12 && (
            <div ref={periodRef} className={columnClassName} role="listbox" aria-label="AM or PM">
              {(['AM', 'PM'] as const).map((p) => {
                const selected = p === h12.period
                return (
                  <button
                    key={p}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    data-selected={selected}
                    className={itemClass(selected)}
                    onClick={() => selectPeriod(p)}
                  >
                    {p}
                  </button>
                )
              })}
            </div>
          )}
        </PopoverContent>
      </Popover>
      {name && (
        <input
          type="hidden"
          name={name}
          value={value ? `${pad(current.hours)}:${pad(current.minutes)}` : ''}
        />
      )}
    </>
  )
}
