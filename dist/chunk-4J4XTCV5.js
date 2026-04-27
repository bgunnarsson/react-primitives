import { Label } from './chunk-6UBKRBM4.js'
import { Checkbox } from './chunk-J7BMPAWF.js'

// src/components/CheckboxGroup/CheckboxGroup.tsx
import React from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
var CheckboxGroupContext = React.createContext(null)
function useCheckboxGroup() {
  const ctx = React.useContext(CheckboxGroupContext)
  if (!ctx) throw new Error('CheckboxGroupItem must be used within CheckboxGroup')
  return ctx
}
var CheckboxGroup = ({ name, value, onValueChange, disabled, children, ...props }) =>
  /* @__PURE__ */ jsx(CheckboxGroupContext.Provider, {
    value: { name, value, onValueChange, disabled },
    children: /* @__PURE__ */ jsx('div', { role: 'group', ...props, children }),
  })
var CheckboxGroupItem = ({ value, disabled, children, ...props }) => {
  const ctx = useCheckboxGroup()
  const id = `${ctx.name}-${value}`
  const isDisabled = disabled ?? ctx.disabled
  const checked = ctx.value.includes(value)
  const handleCheckedChange = (checkedState) => {
    if (checkedState === true) {
      ctx.onValueChange([...ctx.value, value])
    } else {
      ctx.onValueChange(ctx.value.filter((v) => v !== value))
    }
  }
  return /* @__PURE__ */ jsxs('div', {
    ...props,
    children: [
      /* @__PURE__ */ jsx(Checkbox, {
        id,
        name: ctx.name,
        value,
        checked,
        onCheckedChange: handleCheckedChange,
        disabled: isDisabled,
      }),
      /* @__PURE__ */ jsx(Label, { htmlFor: id, children }),
    ],
  })
}

export { CheckboxGroup, CheckboxGroupItem }
