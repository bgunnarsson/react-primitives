import type React from 'react'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container = (props: ContainerProps) => <div {...props} />
