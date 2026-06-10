import type React from 'react'
import { forwardRef } from 'react'

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Grid = forwardRef<HTMLDivElement, GridProps>((props, ref) => <div ref={ref} {...props} />)
Grid.displayName = 'Grid'

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {}
export const GridItem = forwardRef<HTMLDivElement, GridItemProps>((props, ref) => <div ref={ref} {...props} />)
GridItem.displayName = 'GridItem'
