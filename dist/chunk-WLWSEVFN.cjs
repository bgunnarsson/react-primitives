'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}
function _nullishCoalesce(lhs, rhsFn) {
  if (lhs != null) {
    return lhs
  } else {
    return rhsFn()
  }
}
function _optionalChain(ops) {
  let lastAccessLHS = undefined
  let value = ops[0]
  let i = 1
  while (i < ops.length) {
    const op = ops[i]
    const fn = ops[i + 1]
    i += 2
    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined
    }
    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value
      value = fn(value)
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn((...args) => value.call(lastAccessLHS, ...args))
      lastAccessLHS = undefined
    }
  }
  return value
} // src/components/SearchInput/SearchInput.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _jsxruntime = require('react/jsx-runtime')
var SearchInput = _react2.default.forwardRef(
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
    const [uncontrolled, setUncontrolled] = _react2.default.useState(_nullishCoalesce(defaultValue, () => ''))
    const controlled = valueProp !== void 0
    const value = controlled ? valueProp : uncontrolled
    const innerRef = _react2.default.useRef(null)
    _react2.default.useImperativeHandle(ref, () => innerRef.current, [])
    const setValue = (next) => {
      if (!controlled) setUncontrolled(next)
      _optionalChain([onValueChange, 'optionalCall', (_) => _(next)])
    }
    const handleClear = () => {
      setValue('')
      _optionalChain([onClear, 'optionalCall', (_2) => _2()])
      _optionalChain([innerRef, 'access', (_3) => _3.current, 'optionalAccess', (_4) => _4.focus, 'call', (_5) => _5()])
    }
    const showClear = value.length > 0 || !hideClearWhenEmpty
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 'div', {
      'data-disabled': disabled || void 0,
      className,
      style,
      children: [
        icon
          ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'span', {
              'aria-hidden': 'true',
              className: iconClassName,
              style: iconStyle,
              children: icon,
            })
          : null,
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'input', {
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
          ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'button', {
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

exports.SearchInput = SearchInput
