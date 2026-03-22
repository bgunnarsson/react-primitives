import React from 'react'
import * as RadixToggleGroup from '@radix-ui/react-toggle-group'

export type ToggleGroupProps =
  | (RadixToggleGroup.ToggleGroupSingleProps & React.RefAttributes<HTMLDivElement>)
  | (RadixToggleGroup.ToggleGroupMultipleProps & React.RefAttributes<HTMLDivElement>)

export const ToggleGroup = React.forwardRef<
  HTMLDivElement,
  RadixToggleGroup.ToggleGroupSingleProps | RadixToggleGroup.ToggleGroupMultipleProps
>(({ className, ...props }, ref) => (
  <RadixToggleGroup.Root ref={ref} className={className} {...(props as RadixToggleGroup.ToggleGroupSingleProps)} />
))
ToggleGroup.displayName = 'ToggleGroup'

export interface ToggleGroupItemProps extends React.ComponentPropsWithoutRef<typeof RadixToggleGroup.Item> {}

export const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof RadixToggleGroup.Item>,
  ToggleGroupItemProps
>(({ className, ...props }, ref) => (
  <RadixToggleGroup.Item ref={ref} className={className} {...props} />
))
ToggleGroupItem.displayName = 'ToggleGroupItem'
