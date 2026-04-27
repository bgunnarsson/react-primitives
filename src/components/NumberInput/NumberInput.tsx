import React from 'react'

export interface NumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  value?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  ({ value, onChange, min, max, step = 1, disabled, className, ...props }, ref) => {
    const clamp = (n: number) => {
      let v = n
      if (min !== undefined) v = Math.max(min, v)
      if (max !== undefined) v = Math.min(max, v)
      return v
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const n = parseFloat(e.target.value)
      if (!isNaN(n)) onChange?.(clamp(n))
    }

    const increment = () => onChange?.(clamp((value ?? 0) + step))
    const decrement = () => onChange?.(clamp((value ?? 0) - step))

    return (
      <div data-disabled={disabled || undefined} className={className}>
        <button
          type="button"
          onClick={decrement}
          disabled={disabled || (min !== undefined && (value ?? 0) <= min)}
          tabIndex={-1}
        >
          −
        </button>
        <input
          ref={ref}
          type="number"
          value={value ?? ''}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          {...props}
        />
        <button
          type="button"
          onClick={increment}
          disabled={disabled || (max !== undefined && (value ?? 0) >= max)}
          tabIndex={-1}
        >
          +
        </button>
      </div>
    )
  }
)
NumberInput.displayName = 'NumberInput'
