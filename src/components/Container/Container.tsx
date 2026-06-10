import type React from 'react'
import { forwardRef } from 'react'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => <div ref={ref} {...props} />)
Container.displayName = 'Container'
