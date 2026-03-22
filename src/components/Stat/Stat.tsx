import React from 'react'

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Stat = (props: StatProps) => <div {...props} />

export interface StatLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export const StatLabel = (props: StatLabelProps) => <p {...props} />

export interface StatValueProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export const StatValue = (props: StatValueProps) => <p {...props} />

export interface StatHelpTextProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export const StatHelpText = (props: StatHelpTextProps) => <p {...props} />
