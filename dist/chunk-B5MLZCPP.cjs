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
} // src/components/TagInput/TagInput.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _jsxruntime = require('react/jsx-runtime')
var TagInput = _react2.default.forwardRef(
  (
    {
      value: valueProp,
      defaultValue,
      onValueChange,
      placeholder,
      disabled,
      addOnKeys = ['Enter', ','],
      allowDuplicates = false,
      maxTags,
      inputClassName,
      inputStyle,
      renderTag,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const [uncontrolled, setUncontrolled] = _react2.default.useState(_nullishCoalesce(defaultValue, () => []))
    const controlled = valueProp !== void 0
    const tags = controlled ? valueProp : uncontrolled
    const [draft, setDraft] = _react2.default.useState('')
    const inputRef = _react2.default.useRef(null)
    const setTags = (next) => {
      if (!controlled) setUncontrolled(next)
      _optionalChain([onValueChange, 'optionalCall', (_2) => _2(next)])
    }
    const addTag = (raw) => {
      const tag = raw.trim()
      if (!tag) return
      if (!allowDuplicates && tags.includes(tag)) return
      if (maxTags !== void 0 && tags.length >= maxTags) return
      setTags([...tags, tag])
    }
    const removeAt = (i) => {
      setTags(tags.filter((_, idx) => idx !== i))
    }
    const onKeyDown = (e) => {
      if (addOnKeys.includes(e.key)) {
        if (draft.trim()) {
          e.preventDefault()
          addTag(draft)
          setDraft('')
        }
        return
      }
      if (e.key === 'Backspace' && draft === '' && tags.length > 0) {
        e.preventDefault()
        removeAt(tags.length - 1)
      }
    }
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 'div', {
      ref,
      className,
      style,
      'data-disabled': disabled || void 0,
      onClick: () =>
        _optionalChain([
          inputRef,
          'access',
          (_3) => _3.current,
          'optionalAccess',
          (_4) => _4.focus,
          'call',
          (_5) => _5(),
        ]),
      ...rest,
      children: [
        tags.map((tag, i) => {
          const remove = () => removeAt(i)
          if (renderTag)
            return /* @__PURE__ */ _jsxruntime.jsx.call(
              void 0,
              _react2.default.Fragment,
              { children: renderTag(tag, i, remove) },
              `${tag}-${i}`
            )
          return /* @__PURE__ */ _jsxruntime.jsxs.call(
            void 0,
            'span',
            {
              'data-tag': true,
              children: [
                tag,
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'button', {
                  type: 'button',
                  'aria-label': `Remove ${tag}`,
                  onClick: (e) => {
                    e.stopPropagation()
                    remove()
                  },
                  disabled,
                  children: '\xD7',
                }),
              ],
            },
            `${tag}-${i}`
          )
        }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'input', {
          ref: inputRef,
          type: 'text',
          value: draft,
          onChange: (e) => setDraft(e.target.value),
          onKeyDown,
          onBlur: () => {
            if (draft.trim()) {
              addTag(draft)
              setDraft('')
            }
          },
          placeholder: tags.length === 0 ? placeholder : void 0,
          disabled,
          className: inputClassName,
          style: inputStyle,
        }),
      ],
    })
  }
)
TagInput.displayName = 'TagInput'

exports.TagInput = TagInput
