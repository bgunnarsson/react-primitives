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
        {/* The native placeholder attribute MUST stay on the input: it is the only
            CSS hook for value detection (:placeholder-shown) — filled-state styling
            and keeping a floating label up depend on it. Consumers rendering the
            custom placeholder span hide the native one via placeholder:text-transparent. */}
        <input
          ref={ref}
          className={inputClassName}
          placeholder={placeholder}
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
