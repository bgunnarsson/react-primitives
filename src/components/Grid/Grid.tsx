import React from 'react'

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Grid = (props: GridProps) => <div {...props} />

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {}
export const GridItem = (props: GridItemProps) => <div {...props} />
