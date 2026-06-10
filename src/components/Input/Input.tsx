import React from 'react'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  inputClassName?: string
  placeholderClassName?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputClassName, placeholderClassName, placeholder, ...props }, ref) => {
    const hasAccessibleName = props['aria-label'] || props['aria-labelledby'] || props.id

    return (
      <span className={className}>
        <input
          ref={ref}
          className={inputClassName}
          {...props}
          aria-label={!hasAccessibleName && placeholder ? placeholder : props['aria-label']}
        />
        {placeholder ? (
          <span aria-hidden="true" className={placeholderClassName}>
            {placeholder}
          </span>
        ) : null}
      </span>
    )
  }
)
Input.displayName = 'Input'
