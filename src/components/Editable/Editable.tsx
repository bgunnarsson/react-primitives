import React from 'react'

interface EditableContextValue {
  value: string
  draft: string
  setDraft: (v: string) => void
  editing: boolean
  startEdit: () => void
  cancel: () => void
  submit: () => void
  disabled: boolean
  inputRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement>
  selectAllOnEdit: boolean
  submitOnBlur: boolean
  placeholder?: string
}

const EditableContext = React.createContext<EditableContextValue | null>(null)
const useEditable = () => {
  const ctx = React.useContext(EditableContext)
  if (!ctx) throw new Error('Editable subcomponents must be used inside <Editable>')
  return ctx
}

export interface EditableProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSubmit'> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  onSubmit?: (value: string) => void
  onCancel?: () => void
  editing?: boolean
  defaultEditing?: boolean
  onEditingChange?: (editing: boolean) => void
  disabled?: boolean
  placeholder?: string
  selectAllOnEdit?: boolean
  submitOnBlur?: boolean
  submitOnEnter?: boolean
  cancelOnEscape?: boolean
}

export const Editable = React.forwardRef<HTMLDivElement, EditableProps>(
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
    const valueControlled = valueProp !== undefined
    const value = valueControlled ? valueProp! : uncontrolledValue

    const [uncontrolledEditing, setUncontrolledEditing] = React.useState(defaultEditing)
    const editingControlled = editingProp !== undefined
    const editing = editingControlled ? !!editingProp : uncontrolledEditing

    const [draft, setDraft] = React.useState(value)
    const inputRef = React.useRef<HTMLInputElement | HTMLTextAreaElement>(null)

    const setEditing = (next: boolean) => {
      if (!editingControlled) setUncontrolledEditing(next)
      onEditingChange?.(next)
    }

    const setValue = (next: string) => {
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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(e)
      if (e.defaultPrevented) return
      if (!editing) return
      if (submitOnEnter && e.key === 'Enter' && !e.shiftKey) {
        const target = e.target as HTMLElement
        if (target.tagName === 'TEXTAREA' && e.shiftKey) return
        e.preventDefault()
        submit()
      } else if (cancelOnEscape && e.key === 'Escape') {
        e.preventDefault()
        cancel()
      }
    }

    const ctx: EditableContextValue = {
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

    return (
      <EditableContext.Provider value={ctx}>
        <div
          ref={ref}
          data-state={editing ? 'editing' : 'idle'}
          data-disabled={disabled || undefined}
          onKeyDown={handleKeyDown}
          {...rest}
        />
      </EditableContext.Provider>
    )
  }
)
Editable.displayName = 'Editable'

export interface EditablePreviewProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const EditablePreview = React.forwardRef<HTMLSpanElement, EditablePreviewProps>(
  ({ children, onClick, ...rest }, ref) => {
    const { value, editing, startEdit, disabled, placeholder } = useEditable()
    if (editing) return null
    const display = value || placeholder
    return (
      <span
        ref={ref}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled || undefined}
        data-empty={!value || undefined}
        data-placeholder={!value && placeholder ? '' : undefined}
        onClick={(e) => {
          onClick?.(e)
          if (!e.defaultPrevented) startEdit()
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            startEdit()
          }
        }}
        {...rest}
      >
        {children ?? display}
      </span>
    )
  }
)
EditablePreview.displayName = 'EditablePreview'

export interface EditableInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange'> {}

export const EditableInput = React.forwardRef<HTMLInputElement, EditableInputProps>((props, ref) => {
  const { draft, setDraft, editing, submit, cancel, inputRef, disabled, placeholder, submitOnBlur } = useEditable()
  const setRefs = (node: HTMLInputElement | null) => {
    ;(inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node
    if (typeof ref === 'function') ref(node)
    else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = node
  }
  if (!editing) return null
  return (
    <input
      ref={setRefs}
      type="text"
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      disabled={disabled}
      placeholder={placeholder}
      onBlur={(e) => {
        props.onBlur?.(e)
        if (e.defaultPrevented) return
        if (submitOnBlur) submit()
        else cancel()
      }}
      {...props}
    />
  )
})
EditableInput.displayName = 'EditableInput'

export interface EditableTextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'defaultValue' | 'onChange'> {}

export const EditableTextarea = React.forwardRef<HTMLTextAreaElement, EditableTextareaProps>((props, ref) => {
  const { draft, setDraft, editing, submit, cancel, inputRef, disabled, placeholder, submitOnBlur } = useEditable()
  const setRefs = (node: HTMLTextAreaElement | null) => {
    ;(inputRef as React.MutableRefObject<HTMLTextAreaElement | null>).current = node
    if (typeof ref === 'function') ref(node)
    else if (ref) (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = node
  }
  if (!editing) return null
  return (
    <textarea
      ref={setRefs}
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      disabled={disabled}
      placeholder={placeholder}
      onBlur={(e) => {
        props.onBlur?.(e)
        if (e.defaultPrevented) return
        if (submitOnBlur) submit()
        else cancel()
      }}
      {...props}
    />
  )
})
EditableTextarea.displayName = 'EditableTextarea'

export interface EditableControlsProps {
  children: (api: {
    editing: boolean
    startEdit: () => void
    submit: () => void
    cancel: () => void
  }) => React.ReactNode
}

export const EditableControls = ({ children }: EditableControlsProps) => {
  const { editing, startEdit, submit, cancel } = useEditable()
  return <>{children({ editing, startEdit, submit, cancel })}</>
}
