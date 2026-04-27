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
} // src/components/Editable/Editable.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _jsxruntime = require('react/jsx-runtime')
var EditableContext = _react2.default.createContext(null)
var useEditable = () => {
  const ctx = _react2.default.useContext(EditableContext)
  if (!ctx) throw new Error('Editable subcomponents must be used inside <Editable>')
  return ctx
}
var Editable = _react2.default.forwardRef(
  (
    {
      value: valueProp,
      defaultValue = '',
      onValueChange,
      onSubmit,
      onCancel,
      editing: editingProp,
      defaultEditing = false,
      onEditingChange,
      disabled = false,
      placeholder,
      selectAllOnEdit = true,
      submitOnBlur = true,
      submitOnEnter = true,
      cancelOnEscape = true,
      onKeyDown,
      ...rest
    },
    ref
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = _react2.default.useState(defaultValue)
    const valueControlled = valueProp !== void 0
    const value = valueControlled ? valueProp : uncontrolledValue
    const [uncontrolledEditing, setUncontrolledEditing] = _react2.default.useState(defaultEditing)
    const editingControlled = editingProp !== void 0
    const editing = editingControlled ? !!editingProp : uncontrolledEditing
    const [draft, setDraft] = _react2.default.useState(value)
    const inputRef = _react2.default.useRef(null)
    const setEditing = (next) => {
      if (!editingControlled) setUncontrolledEditing(next)
      _optionalChain([onEditingChange, 'optionalCall', (_) => _(next)])
    }
    const setValue = (next) => {
      if (!valueControlled) setUncontrolledValue(next)
      _optionalChain([onValueChange, 'optionalCall', (_2) => _2(next)])
    }
    const startEdit = () => {
      if (disabled) return
      setDraft(value)
      setEditing(true)
    }
    const cancel = () => {
      setDraft(value)
      setEditing(false)
      _optionalChain([onCancel, 'optionalCall', (_3) => _3()])
    }
    const submit = () => {
      const next = draft
      setValue(next)
      setEditing(false)
      _optionalChain([onSubmit, 'optionalCall', (_4) => _4(next)])
    }
    _react2.default.useEffect(() => {
      if (editing) {
        const node = inputRef.current
        if (node) {
          node.focus()
          if (selectAllOnEdit && 'select' in node) node.select()
        }
      }
    }, [editing, selectAllOnEdit])
    const handleKeyDown = (e) => {
      _optionalChain([onKeyDown, 'optionalCall', (_5) => _5(e)])
      if (e.defaultPrevented) return
      if (!editing) return
      if (submitOnEnter && e.key === 'Enter' && !e.shiftKey) {
        const target = e.target
        if (target.tagName === 'TEXTAREA' && e.shiftKey) return
        e.preventDefault()
        submit()
      } else if (cancelOnEscape && e.key === 'Escape') {
        e.preventDefault()
        cancel()
      }
    }
    const ctx = {
      value,
      draft,
      setDraft,
      editing,
      startEdit,
      cancel,
      submit,
      disabled,
      inputRef,
      selectAllOnEdit,
      submitOnBlur,
      placeholder,
    }
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, EditableContext.Provider, {
      value: ctx,
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'div', {
        ref,
        'data-state': editing ? 'editing' : 'idle',
        'data-disabled': disabled || void 0,
        onKeyDown: handleKeyDown,
        ...rest,
      }),
    })
  }
)
Editable.displayName = 'Editable'
var EditablePreview = _react2.default.forwardRef(({ children, onClick, ...rest }, ref) => {
  const { value, editing, startEdit, disabled, placeholder } = useEditable()
  if (editing) return null
  const display = value || placeholder
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'span', {
    ref,
    role: 'button',
    tabIndex: disabled ? -1 : 0,
    'aria-disabled': disabled || void 0,
    'data-empty': !value || void 0,
    'data-placeholder': !value && placeholder ? '' : void 0,
    onClick: (e) => {
      _optionalChain([onClick, 'optionalCall', (_6) => _6(e)])
      if (!e.defaultPrevented) startEdit()
    },
    onKeyDown: (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        startEdit()
      }
    },
    ...rest,
    children: _nullishCoalesce(children, () => display),
  })
})
EditablePreview.displayName = 'EditablePreview'
var EditableInput = _react2.default.forwardRef((props, ref) => {
  const { draft, setDraft, editing, submit, cancel, inputRef, disabled, placeholder, submitOnBlur } = useEditable()
  const setRefs = (node) => {
    inputRef.current = node
    if (typeof ref === 'function') ref(node)
    else if (ref) ref.current = node
  }
  if (!editing) return null
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'input', {
    ref: setRefs,
    type: 'text',
    value: draft,
    onChange: (e) => setDraft(e.target.value),
    disabled,
    placeholder,
    onBlur: (e) => {
      _optionalChain([props, 'access', (_7) => _7.onBlur, 'optionalCall', (_8) => _8(e)])
      if (e.defaultPrevented) return
      if (submitOnBlur) submit()
      else cancel()
    },
    ...props,
  })
})
EditableInput.displayName = 'EditableInput'
var EditableTextarea = _react2.default.forwardRef((props, ref) => {
  const { draft, setDraft, editing, submit, cancel, inputRef, disabled, placeholder, submitOnBlur } = useEditable()
  const setRefs = (node) => {
    inputRef.current = node
    if (typeof ref === 'function') ref(node)
    else if (ref) ref.current = node
  }
  if (!editing) return null
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'textarea', {
    ref: setRefs,
    value: draft,
    onChange: (e) => setDraft(e.target.value),
    disabled,
    placeholder,
    onBlur: (e) => {
      _optionalChain([props, 'access', (_9) => _9.onBlur, 'optionalCall', (_10) => _10(e)])
      if (e.defaultPrevented) return
      if (submitOnBlur) submit()
      else cancel()
    },
    ...props,
  })
})
EditableTextarea.displayName = 'EditableTextarea'
var EditableControls = ({ children }) => {
  const { editing, startEdit, submit, cancel } = useEditable()
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _jsxruntime.Fragment, {
    children: children({ editing, startEdit, submit, cancel }),
  })
}

exports.Editable = Editable
exports.EditablePreview = EditablePreview
exports.EditableInput = EditableInput
exports.EditableTextarea = EditableTextarea
exports.EditableControls = EditableControls
