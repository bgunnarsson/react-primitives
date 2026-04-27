// src/components/Rating/Rating.tsx
import React from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
var Rating = React.forwardRef(
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
    const [hover, setHover] = React.useState(null)
    const controlled = valueProp !== void 0
    const value = controlled ? valueProp : uncontrolled
    const setValue = (next) => {
      if (disabled || readOnly) return
      if (!controlled) setUncontrolled(next)
      onValueChange?.(next)
    }
    const display = hover ?? value
    return /* @__PURE__ */ jsx('div', {
      ref,
      role: 'radiogroup',
      'aria-label': ariaLabel,
      'aria-disabled': disabled || void 0,
      'aria-readonly': readOnly || void 0,
      className,
      style,
      onMouseLeave: () => setHover(null),
      children: Array.from({ length: max }, (_, i) => {
        const starValue = i + 1
        const filled = display >= starValue
        const active = value === starValue
        return /* @__PURE__ */ jsxs(
          'label',
          {
            onMouseEnter: () => !disabled && !readOnly && setHover(starValue),
            'data-filled': filled ? '' : void 0,
            'data-active': active ? '' : void 0,
            style: { cursor: disabled || readOnly ? 'default' : 'pointer' },
            children: [
              /* @__PURE__ */ jsx('input', {
                type: 'radio',
                name,
                value: starValue,
                checked: active,
                disabled,
                readOnly,
                onChange: () => setValue(starValue),
                style: {
                  position: 'absolute',
                  width: 1,
                  height: 1,
                  padding: 0,
                  margin: -1,
                  overflow: 'hidden',
                  clip: 'rect(0,0,0,0)',
                  border: 0,
                },
              }),
              renderItem ? renderItem({ index: i, filled, active }) : filled ? '\u2605' : '\u2606',
            ],
          },
          starValue
        )
      }),
    })
  }
)
Rating.displayName = 'Rating'

export { Rating }
