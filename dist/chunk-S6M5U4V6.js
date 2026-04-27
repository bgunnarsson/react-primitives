// src/components/Stepper/Stepper.tsx
import React from 'react'
import { jsx } from 'react/jsx-runtime'
var StepperContext = React.createContext({ value: 1, orientation: 'horizontal' })
var Stepper = ({ value, orientation = 'horizontal', ...props }) =>
  /* @__PURE__ */ jsx(StepperContext.Provider, {
    value: { value, orientation },
    children: /* @__PURE__ */ jsx('ol', {
      'data-orientation': orientation,
      'aria-label': 'Progress',
      ...props,
    }),
  })
var StepperItemContext = React.createContext({ step: 1, state: 'pending' })
var StepperItem = ({ step, ...props }) => {
  const { value } = React.useContext(StepperContext)
  const state = step === value ? 'active' : step < value ? 'completed' : 'pending'
  return /* @__PURE__ */ jsx(StepperItemContext.Provider, {
    value: { step, state },
    children: /* @__PURE__ */ jsx('li', { 'data-state': state, 'data-step': step, ...props }),
  })
}
var StepperIndicator = (props) => {
  const { step, state } = React.useContext(StepperItemContext)
  return /* @__PURE__ */ jsx('span', {
    'data-state': state,
    'aria-hidden': 'true',
    ...props,
    children: props.children ?? (state === 'completed' ? '\u2713' : step),
  })
}
var StepperTitle = (props) => /* @__PURE__ */ jsx('p', { ...props })
var StepperDescription = (props) => /* @__PURE__ */ jsx('p', { ...props })
var StepperSeparator = (props) => /* @__PURE__ */ jsx('div', { 'aria-hidden': 'true', ...props })

export { Stepper, StepperItem, StepperIndicator, StepperTitle, StepperDescription, StepperSeparator }
