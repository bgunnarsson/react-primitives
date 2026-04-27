import React from 'react'

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'value' | 'defaultValue'> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  onClear?: () => void
  icon?: React.ReactNode
  clearLabel?: React.ReactNode
  clearAriaLabel?: string
  hideClearWhenEmpty?: boolean
  inputClassName?: string
  inputStyle?: React.CSSProperties
  iconClassName?: string
  iconStyle?: React.CSSProperties
  clearClassName?: string
  clearStyle?: React.CSSProperties
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      value: valueProp,
      defaultValue,
      onValueChange,
      onClear,
      icon,
      clearLabel = '×',
      clearAriaLabel = 'Clear search',
      hideClearWhenEmpty = true,
      inputClassName,
      inputStyle,
      iconClassName,
      iconStyle,
      clearClassName,
      clearStyle,
      className,
      style,
      disabled,
      ...inputProps
    },
    ref
  ) => {
    const [uncontrolled, setUncontrolled] = React.useState(defaultValue ?? '')
    const controlled = valueProp !== undefined
    const value = controlled ? (valueProp as string) : uncontrolled
    const innerRef = React.useRef<HTMLInputElement>(null)
    React.useImperativeHandle(ref, () => innerRef.current as HTMLInputElement, [])

    const setValue = (next: string) => {
      if (!controlled) {
        setUncontrolled(next)
      }
      onValueChange?.(next)
    }

    const handleClear = () => {
      setValue('')
      onClear?.()
      innerRef.current?.focus()
    }

    const showClear = value.length > 0 || !hideClearWhenEmpty

    return (
      <div data-disabled={disabled || undefined} className={className} style={style}>
        {icon ? (
          <span aria-hidden="true" className={iconClassName} style={iconStyle}>
            {icon}
          </span>
        ) : null}
        <input
          ref={innerRef}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={disabled}
          className={inputClassName}
          style={inputStyle}
          {...inputProps}
        />
        {showClear ? (
          <button
            type="button"
            aria-label={clearAriaLabel}
            onClick={handleClear}
            disabled={disabled || value.length === 0}
            tabIndex={-1}
            className={clearClassName}
            style={clearStyle}
          >
            {clearLabel}
          </button>
        ) : null}
      </div>
    )
  }
)
SearchInput.displayName = 'SearchInput'
