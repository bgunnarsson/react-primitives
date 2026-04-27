import React from 'react'

export interface RatingProps {
  value?: number
  defaultValue?: number
  onValueChange?: (value: number) => void
  max?: number
  disabled?: boolean
  readOnly?: boolean
  name?: string
  className?: string
  style?: React.CSSProperties
  renderItem?: (state: { index: number; filled: boolean; active: boolean }) => React.ReactNode
  'aria-label'?: string
}

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      value: valueProp,
      defaultValue = 0,
      onValueChange,
      max = 5,
      disabled,
      readOnly,
      name,
      className,
      style,
      renderItem,
      'aria-label': ariaLabel = 'Rating',
    },
    ref
  ) => {
    const [uncontrolled, setUncontrolled] = React.useState(defaultValue)
    const [hover, setHover] = React.useState<number | null>(null)
    const controlled = valueProp !== undefined
    const value = controlled ? valueProp! : uncontrolled

    const setValue = (next: number) => {
      if (disabled || readOnly) return
      if (!controlled) setUncontrolled(next)
      onValueChange?.(next)
    }

    const display = hover ?? value

    return (
      <div
        ref={ref}
        role="radiogroup"
        aria-label={ariaLabel}
        aria-disabled={disabled || undefined}
        aria-readonly={readOnly || undefined}
        className={className}
        style={style}
        onMouseLeave={() => setHover(null)}
      >
        {Array.from({ length: max }, (_, i) => {
          const starValue = i + 1
          const filled = display >= starValue
          const active = value === starValue
          return (
            <label
              key={starValue}
              onMouseEnter={() => !disabled && !readOnly && setHover(starValue)}
              data-filled={filled ? '' : undefined}
              data-active={active ? '' : undefined}
              style={{ cursor: disabled || readOnly ? 'default' : 'pointer' }}
            >
              <input
                type="radio"
                name={name}
                value={starValue}
                checked={active}
                disabled={disabled}
                readOnly={readOnly}
                onChange={() => setValue(starValue)}
                style={{
                  position: 'absolute',
                  width: 1,
                  height: 1,
                  padding: 0,
                  margin: -1,
                  overflow: 'hidden',
                  clip: 'rect(0,0,0,0)',
                  border: 0,
                }}
              />
              {renderItem ? renderItem({ index: i, filled, active }) : filled ? '★' : '☆'}
            </label>
          )
        })}
      </div>
    )
  }
)
Rating.displayName = 'Rating'
