import * as react_jsx_runtime from 'react/jsx-runtime'
import React__default from 'react'

interface StepperProps extends React__default.HTMLAttributes<HTMLOListElement> {
  value: number
  orientation?: 'horizontal' | 'vertical'
}
declare const Stepper: ({ value, orientation, ...props }: StepperProps) => react_jsx_runtime.JSX.Element
interface StepperItemProps extends React__default.HTMLAttributes<HTMLLIElement> {
  step: number
}
declare const StepperItem: ({ step, ...props }: StepperItemProps) => react_jsx_runtime.JSX.Element
interface StepperIndicatorProps extends React__default.HTMLAttributes<HTMLSpanElement> {}
declare const StepperIndicator: (props: StepperIndicatorProps) => react_jsx_runtime.JSX.Element
interface StepperTitleProps extends React__default.HTMLAttributes<HTMLParagraphElement> {}
declare const StepperTitle: (props: StepperTitleProps) => react_jsx_runtime.JSX.Element
interface StepperDescriptionProps extends React__default.HTMLAttributes<HTMLParagraphElement> {}
declare const StepperDescription: (props: StepperDescriptionProps) => react_jsx_runtime.JSX.Element
interface StepperSeparatorProps extends React__default.HTMLAttributes<HTMLDivElement> {}
declare const StepperSeparator: (props: StepperSeparatorProps) => react_jsx_runtime.JSX.Element

export {
  Stepper,
  StepperDescription,
  type StepperDescriptionProps,
  StepperIndicator,
  type StepperIndicatorProps,
  StepperItem,
  type StepperItemProps,
  type StepperProps,
  StepperSeparator,
  type StepperSeparatorProps,
  StepperTitle,
  type StepperTitleProps,
}
