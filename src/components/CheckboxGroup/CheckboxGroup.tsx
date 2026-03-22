import React from 'react'
import { Checkbox } from '../Checkbox'
import { Label } from '../Label'

interface CheckboxGroupContextValue {
  name: string
  value: string[]
  onValueChange: (value: string[]) => void
  disabled?: boolean
}

const CheckboxGroupContext = React.createContext<CheckboxGroupContextValue | null>(null)

function useCheckboxGroup() {
  const ctx = React.useContext(CheckboxGroupContext)
  if (!ctx) throw new Error('CheckboxGroupItem must be used within CheckboxGroup')
  return ctx
}

export interface CheckboxGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  value: string[]
  onValueChange: (value: string[]) => void
  disabled?: boolean
}

export const CheckboxGroup = ({ name, value, onValueChange, disabled, children, ...props }: CheckboxGroupProps) => (
  <CheckboxGroupContext.Provider value={{ name, value, onValueChange, disabled }}>
    <div role="group" {...props}>
      {children}
    </div>
  </CheckboxGroupContext.Provider>
)

export interface CheckboxGroupItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  value: string
  disabled?: boolean
  children: React.ReactNode
}

export const CheckboxGroupItem = ({ value, disabled, children, ...props }: CheckboxGroupItemProps) => {
  const ctx = useCheckboxGroup()
  const id = `${ctx.name}-${value}`
  const isDisabled = disabled ?? ctx.disabled
  const checked = ctx.value.includes(value)

  const handleCheckedChange = (checkedState: boolean | 'indeterminate') => {
    if (checkedState === true) {
      ctx.onValueChange([...ctx.value, value])
    } else {
      ctx.onValueChange(ctx.value.filter((v) => v !== value))
    }
  }

  return (
    <div {...props}>
      <Checkbox
        id={id}
        name={ctx.name}
        value={value}
        checked={checked}
        onCheckedChange={handleCheckedChange}
        disabled={isDisabled}
      />
      <Label htmlFor={id}>{children}</Label>
    </div>
  )
}
