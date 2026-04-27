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
} // src/components/FileInput/FileInput.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _jsxruntime = require('react/jsx-runtime')
var FileInput = _react2.default.forwardRef(
  ({ accept, multiple, disabled, onFilesChange, children, className, ...props }, ref) => {
    const inputRef = _react2.default.useRef(null)
    const [isDragging, setIsDragging] = _react2.default.useState(false)
    _react2.default.useImperativeHandle(ref, () => inputRef.current)
    const handleFiles = (files) => {
      if (!files) return
      _optionalChain([onFilesChange, 'optionalCall', (_) => _(Array.from(files))])
    }
    const handleDragOver = (e) => {
      e.preventDefault()
      if (!disabled) setIsDragging(true)
    }
    const handleDragLeave = () => setIsDragging(false)
    const handleDrop = (e) => {
      e.preventDefault()
      setIsDragging(false)
      if (!disabled) handleFiles(e.dataTransfer.files)
    }
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 'div', {
      'data-dragging': isDragging || void 0,
      'data-disabled': disabled || void 0,
      className,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
      ...props,
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'input', {
          ref: inputRef,
          type: 'file',
          accept,
          multiple,
          disabled,
          style: { display: 'none' },
          onChange: (e) => handleFiles(e.target.files),
        }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'button', {
          type: 'button',
          disabled,
          onClick: () =>
            _optionalChain([
              inputRef,
              'access',
              (_2) => _2.current,
              'optionalAccess',
              (_3) => _3.click,
              'call',
              (_4) => _4(),
            ]),
          children: _nullishCoalesce(children, () => 'Choose file'),
        }),
      ],
    })
  }
)
FileInput.displayName = 'FileInput'

exports.FileInput = FileInput
