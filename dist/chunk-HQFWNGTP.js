// src/components/Form/Form.tsx
import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { jsx } from 'react/jsx-runtime'
var FormFieldContext = React.createContext({ id: '' })
var FormField = ({ id: idProp, error, children, className, ...props }) => {
  const generatedId = React.useId()
  const id = idProp ?? generatedId
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, {
    value: { id, error },
    children: /* @__PURE__ */ jsx('div', { className, ...props, children }),
  })
}
var FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  const { id } = React.useContext(FormFieldContext)
  return /* @__PURE__ */ jsx('label', { ref, htmlFor: id, className, ...props })
})
FormLabel.displayName = 'FormLabel'
var FormControl = React.forwardRef(({ ...props }, ref) => {
  const { id, error } = React.useContext(FormFieldContext)
  return /* @__PURE__ */ jsx(Slot, {
    ref,
    id,
    'aria-invalid': error ? true : void 0,
    'aria-describedby': error ? `${id}-message` : void 0,
    ...props,
  })
})
FormControl.displayName = 'FormControl'
var FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
  const { id, error } = React.useContext(FormFieldContext)
  const message = error ?? children
  if (!message) return null
  return /* @__PURE__ */ jsx('p', { ref, id: `${id}-message`, role: 'alert', className, ...props, children: message })
})
FormMessage.displayName = 'FormMessage'

export { FormField, FormLabel, FormControl, FormMessage }
