import type React from 'react'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

// biome-ignore lint/a11y/noLabelWithoutControl: consumers wire htmlFor or wrap the input themselves; this primitive is a styling shell
export const Label = ({ className, ...props }: LabelProps) => <label className={className} {...props} />
