import React from 'react'
import { Slot } from '@radix-ui/react-slot'

interface FormFieldContextValue {
  id: string
  error?: string
}

const FormFieldContext = React.createContext<FormFieldContextValue>({ id: '' })

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string
  error?: string
}

export const FormField = ({ id: idProp, error, children, className, ...props }: FormFieldProps) => {
  const generatedId = React.useId()
  const id = idProp ?? generatedId
  return (
    <FormFieldContext.Provider value={{ id, error }}>
      <div className={className} {...props}>
        {children}
      </div>
    </FormFieldContext.Provider>
  )
}

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(({ className, ...props }, ref) => {
  const { id } = React.useContext(FormFieldContext)
  return <label ref={ref} htmlFor={id} className={className} {...props} />
})
FormLabel.displayName = 'FormLabel'

export interface FormControlProps extends React.HTMLAttributes<HTMLElement> {}

/** Slot wrapper — renders its child and injects `id`, `aria-invalid`, `aria-describedby` from FormField context */
export const FormControl = React.forwardRef<HTMLElement, FormControlProps>(({ ...props }, ref) => {
  const { id, error } = React.useContext(FormFieldContext)
  return (
    <Slot
      ref={ref}
      id={id}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${id}-message` : undefined}
      {...props}
    />
  )
})
FormControl.displayName = 'FormControl'

export interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, children, ...props }, ref) => {
    const { id, error } = React.useContext(FormFieldContext)
    const message = error ?? children
    if (!message) return null
    return (
      <p ref={ref} id={`${id}-message`} role="alert" className={className} {...props}>
        {message}
      </p>
    )
  }
)
FormMessage.displayName = 'FormMessage'
