// src/components/Editable/Editable.tsx
import React from 'react'
import { Fragment, jsx } from 'react/jsx-runtime'
var EditableContext = React.createContext(null)
var useEditable = () => {
  const ctx = React.useContext(EditableContext)
  if (!ctx) throw new Error('Editable subcomponents must be used inside <Editable>')
  return ctx
}
var Editable = React.forwardRef(
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
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue)
    const valueControlled = valueProp !== void 0
    const value = valueControlled ? valueProp : uncontrolledValue
    const [uncontrolledEditing, setUncontrolledEditing] = React.useState(defaultEditing)
    const editingControlled = editingProp !== void 0
    const editing = editingControlled ? !!editingProp : uncontrolledEditing
    const [draft, setDraft] = React.useState(value)
    const inputRef = React.useRef(null)
    const setEditing = (next) => {
      if (!editingControlled) setUncontrolledEditing(next)
      onEditingChange?.(next)
    }
    const setValue = (next) => {
      if (!valueControlled) setUncontrolledValue(next)
      onValueChange?.(next)
    }
    const startEdit = () => {
      if (disabled) return
      setDraft(value)
      setEditing(true)
    }
    const cancel = () => {
      setDraft(value)
      setEditing(false)
      onCancel?.()
    }
    const submit = () => {
      const next = draft
      setValue(next)
      setEditing(false)
      onSubmit?.(next)
    }
    React.useEffect(() => {
      if (editing) {
        const node = inputRef.current
        if (node) {
          node.focus()
          if (selectAllOnEdit && 'select' in node) node.select()
        }
      }
    }, [editing, selectAllOnEdit])
    const handleKeyDown = (e) => {
      onKeyDown?.(e)
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
    return /* @__PURE__ */ jsx(EditableContext.Provider, {
      value: ctx,
      children: /* @__PURE__ */ jsx('div', {
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
var EditablePreview = React.forwardRef(({ children, onClick, ...rest }, ref) => {
  const { value, editing, startEdit, disabled, placeholder } = useEditable()
  if (editing) return null
  const display = value || placeholder
  return /* @__PURE__ */ jsx('span', {
    ref,
    role: 'button',
    tabIndex: disabled ? -1 : 0,
    'aria-disabled': disabled || void 0,
    'data-empty': !value || void 0,
    'data-placeholder': !value && placeholder ? '' : void 0,
    onClick: (e) => {
      onClick?.(e)
      if (!e.defaultPrevented) startEdit()
    },
    onKeyDown: (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        startEdit()
      }
    },
    ...rest,
    children: children ?? display,
  })
})
EditablePreview.displayName = 'EditablePreview'
var EditableInput = React.forwardRef((props, ref) => {
  const { draft, setDraft, editing, submit, cancel, inputRef, disabled, placeholder, submitOnBlur } = useEditable()
  const setRefs = (node) => {
    inputRef.current = node
    if (typeof ref === 'function') ref(node)
    else if (ref) ref.current = node
  }
  if (!editing) return null
  return /* @__PURE__ */ jsx('input', {
    ref: setRefs,
    type: 'text',
    value: draft,
    onChange: (e) => setDraft(e.target.value),
    disabled,
    placeholder,
    onBlur: (e) => {
      props.onBlur?.(e)
      if (e.defaultPrevented) return
      if (submitOnBlur) submit()
      else cancel()
    },
    ...props,
  })
})
EditableInput.displayName = 'EditableInput'
var EditableTextarea = React.forwardRef((props, ref) => {
  const { draft, setDraft, editing, submit, cancel, inputRef, disabled, placeholder, submitOnBlur } = useEditable()
  const setRefs = (node) => {
    inputRef.current = node
    if (typeof ref === 'function') ref(node)
    else if (ref) ref.current = node
  }
  if (!editing) return null
  return /* @__PURE__ */ jsx('textarea', {
    ref: setRefs,
    value: draft,
    onChange: (e) => setDraft(e.target.value),
    disabled,
    placeholder,
    onBlur: (e) => {
      props.onBlur?.(e)
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
  return /* @__PURE__ */ jsx(Fragment, { children: children({ editing, startEdit, submit, cancel }) })
}

export { Editable, EditablePreview, EditableInput, EditableTextarea, EditableControls }
