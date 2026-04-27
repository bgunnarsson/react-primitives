import React from 'react'

interface StepperContextValue {
  value: number
  orientation: 'horizontal' | 'vertical'
}

const StepperContext = React.createContext<StepperContextValue>({ value: 1, orientation: 'horizontal' })

export interface StepperProps extends React.HTMLAttributes<HTMLOListElement> {
  value: number
  orientation?: 'horizontal' | 'vertical'
}

export const Stepper = ({ value, orientation = 'horizontal', ...props }: StepperProps) => (
  <StepperContext.Provider value={{ value, orientation }}>
    <ol data-orientation={orientation} aria-label="Progress" {...props} />
  </StepperContext.Provider>
)

interface StepperItemContextValue {
  step: number
  state: 'active' | 'completed' | 'pending'
}

const StepperItemContext = React.createContext<StepperItemContextValue>({ step: 1, state: 'pending' })

export interface StepperItemProps extends React.HTMLAttributes<HTMLLIElement> {
  step: number
}

export const StepperItem = ({ step, ...props }: StepperItemProps) => {
  const { value } = React.useContext(StepperContext)
  const state: 'active' | 'completed' | 'pending' = step === value ? 'active' : step < value ? 'completed' : 'pending'

  return (
    <StepperItemContext.Provider value={{ step, state }}>
      <li data-state={state} data-step={step} {...props} />
    </StepperItemContext.Provider>
  )
}

export interface StepperIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {}
export const StepperIndicator = (props: StepperIndicatorProps) => {
  const { step, state } = React.useContext(StepperItemContext)
  return (
    <span data-state={state} aria-hidden="true" {...props}>
      {props.children ?? (state === 'completed' ? '✓' : step)}
    </span>
  )
}

export interface StepperTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export const StepperTitle = (props: StepperTitleProps) => <p {...props} />

export interface StepperDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export const StepperDescription = (props: StepperDescriptionProps) => <p {...props} />

export interface StepperSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}
export const StepperSeparator = (props: StepperSeparatorProps) => <div aria-hidden="true" {...props} />
