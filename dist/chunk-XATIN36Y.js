// src/components/SearchInput/SearchInput.tsx
import React from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
var SearchInput = React.forwardRef(
  (
    {
      value: valueProp,
      defaultValue,
      onValueChange,
      onClear,
      icon,
      clearLabel = '\xD7',
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
    const controlled = valueProp !== void 0
    const value = controlled ? valueProp : uncontrolled
    const innerRef = React.useRef(null)
    React.useImperativeHandle(ref, () => innerRef.current, [])
    const setValue = (next) => {
      if (!controlled) setUncontrolled(next)
      onValueChange?.(next)
    }
    const handleClear = () => {
      setValue('')
      onClear?.()
      innerRef.current?.focus()
    }
    const showClear = value.length > 0 || !hideClearWhenEmpty
    return /* @__PURE__ */ jsxs('div', {
      'data-disabled': disabled || void 0,
      className,
      style,
      children: [
        icon
          ? /* @__PURE__ */ jsx('span', {
              'aria-hidden': 'true',
              className: iconClassName,
              style: iconStyle,
              children: icon,
            })
          : null,
        /* @__PURE__ */ jsx('input', {
          ref: innerRef,
          type: 'search',
          role: 'searchbox',
          value,
          onChange: (e) => setValue(e.target.value),
          disabled,
          className: inputClassName,
          style: inputStyle,
          ...inputProps,
        }),
        showClear
          ? /* @__PURE__ */ jsx('button', {
              type: 'button',
              'aria-label': clearAriaLabel,
              onClick: handleClear,
              disabled: disabled || value.length === 0,
              tabIndex: -1,
              className: clearClassName,
              style: clearStyle,
              children: clearLabel,
            })
          : null,
      ],
    })
  }
)
SearchInput.displayName = 'SearchInput'

export { SearchInput }
