import React from 'react'

export interface PasswordInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  visible?: boolean
  defaultVisible?: boolean
  onVisibilityChange?: (visible: boolean) => void
  toggleLabel?: (visible: boolean) => React.ReactNode
  toggleAriaLabel?: (visible: boolean) => string
  inputClassName?: string
  inputStyle?: React.CSSProperties
  toggleClassName?: string
  toggleStyle?: React.CSSProperties
  className?: string
  style?: React.CSSProperties
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      visible: visibleProp,
      defaultVisible = false,
      onVisibilityChange,
      toggleLabel,
      toggleAriaLabel,
      inputClassName,
      inputStyle,
      toggleClassName,
      toggleStyle,
      className,
      style,
      disabled,
      ...inputProps
    },
    ref,
  ) => {
    const [uncontrolled, setUncontrolled] = React.useState(defaultVisible)
    const controlled = visibleProp !== undefined
    const visible = controlled ? !!visibleProp : uncontrolled

    const setVisible = (v: boolean) => {
      if (!controlled) setUncontrolled(v)
      onVisibilityChange?.(v)
    }

    const label = toggleLabel ? toggleLabel(visible) : visible ? 'Hide' : 'Show'
    const ariaLabel = toggleAriaLabel ? toggleAriaLabel(visible) : visible ? 'Hide password' : 'Show password'

    return (
      <div data-disabled={disabled || undefined} className={className} style={style}>
        <input
          ref={ref}
          type={visible ? 'text' : 'password'}
          disabled={disabled}
          className={inputClassName}
          style={inputStyle}
          {...inputProps}
        />
        <button
          type="button"
          aria-label={ariaLabel}
          aria-pressed={visible}
          data-state={visible ? 'visible' : 'hidden'}
          onClick={() => setVisible(!visible)}
          disabled={disabled}
          tabIndex={-1}
          className={toggleClassName}
          style={toggleStyle}
        >
          {label}
        </button>
      </div>
    )
  },
)
PasswordInput.displayName = 'PasswordInput'
