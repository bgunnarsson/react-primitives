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

var _chunkC4ZQ67NWcjs = require('./chunk-C4ZQ67NW.cjs')

var _chunkNAWND3SKcjs = require('./chunk-NAWND3SK.cjs')

// src/components/CheckboxGroup/CheckboxGroup.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _jsxruntime = require('react/jsx-runtime')
var CheckboxGroupContext = _react2.default.createContext(null)
function useCheckboxGroup() {
  const ctx = _react2.default.useContext(CheckboxGroupContext)
  if (!ctx) throw new Error('CheckboxGroupItem must be used within CheckboxGroup')
  return ctx
}
var CheckboxGroup = ({ name, value, onValueChange, disabled, children, ...props }) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CheckboxGroupContext.Provider, {
    value: { name, value, onValueChange, disabled },
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'div', { role: 'group', ...props, children }),
  })
var CheckboxGroupItem = ({ value, disabled, children, ...props }) => {
  const ctx = useCheckboxGroup()
  const id = `${ctx.name}-${value}`
  const isDisabled = _nullishCoalesce(disabled, () => ctx.disabled)
  const checked = ctx.value.includes(value)
  const handleCheckedChange = (checkedState) => {
    if (checkedState === true) {
      ctx.onValueChange([...ctx.value, value])
    } else {
      ctx.onValueChange(ctx.value.filter((v) => v !== value))
    }
  }
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 'div', {
    ...props,
    children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _chunkNAWND3SKcjs.Checkbox, {
        id,
        name: ctx.name,
        value,
        checked,
        onCheckedChange: handleCheckedChange,
        disabled: isDisabled,
      }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _chunkC4ZQ67NWcjs.Label, { htmlFor: id, children }),
    ],
  })
}

exports.CheckboxGroup = CheckboxGroup
exports.CheckboxGroupItem = CheckboxGroupItem
