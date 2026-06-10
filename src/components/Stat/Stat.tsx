import type React from 'react'
import { forwardRef } from 'react'

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Stat = forwardRef<HTMLDivElement, StatProps>((props, ref) => <div ref={ref} {...props} />)
Stat.displayName = 'Stat'

export interface StatLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export const StatLabel = forwardRef<HTMLParagraphElement, StatLabelProps>((props, ref) => <p ref={ref} {...props} />)
StatLabel.displayName = 'StatLabel'

export interface StatValueProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export const StatValue = forwardRef<HTMLParagraphElement, StatValueProps>((props, ref) => <p ref={ref} {...props} />)
StatValue.displayName = 'StatValue'

export interface StatHelpTextProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export const StatHelpText = forwardRef<HTMLParagraphElement, StatHelpTextProps>((props, ref) => <p ref={ref} {...props} />)
StatHelpText.displayName = 'StatHelpText'
