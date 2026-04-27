import * as react_jsx_runtime from 'react/jsx-runtime'
import React__default from 'react'

interface StatProps extends React__default.HTMLAttributes<HTMLDivElement> {}
declare const Stat: (props: StatProps) => react_jsx_runtime.JSX.Element
interface StatLabelProps extends React__default.HTMLAttributes<HTMLParagraphElement> {}
declare const StatLabel: (props: StatLabelProps) => react_jsx_runtime.JSX.Element
interface StatValueProps extends React__default.HTMLAttributes<HTMLParagraphElement> {}
declare const StatValue: (props: StatValueProps) => react_jsx_runtime.JSX.Element
interface StatHelpTextProps extends React__default.HTMLAttributes<HTMLParagraphElement> {}
declare const StatHelpText: (props: StatHelpTextProps) => react_jsx_runtime.JSX.Element

export {
  Stat,
  StatHelpText,
  type StatHelpTextProps,
  StatLabel,
  type StatLabelProps,
  type StatProps,
  StatValue,
  type StatValueProps,
}
