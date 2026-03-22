import React from 'react'
import * as RadixTabs from '@radix-ui/react-tabs'

export const Tabs = RadixTabs.Root

export interface TabsListProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.List> {}
export const TabsList = React.forwardRef<React.ElementRef<typeof RadixTabs.List>, TabsListProps>(
  ({ className, ...props }, ref) => <RadixTabs.List ref={ref} className={className} {...props} />
)
TabsList.displayName = 'TabsList'

export interface TabsTriggerProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger> {}
export const TabsTrigger = React.forwardRef<React.ElementRef<typeof RadixTabs.Trigger>, TabsTriggerProps>(
  ({ className, ...props }, ref) => <RadixTabs.Trigger ref={ref} className={className} {...props} />
)
TabsTrigger.displayName = 'TabsTrigger'

export interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.Content> {}
export const TabsContent = React.forwardRef<React.ElementRef<typeof RadixTabs.Content>, TabsContentProps>(
  ({ className, ...props }, ref) => <RadixTabs.Content ref={ref} className={className} {...props} />
)
TabsContent.displayName = 'TabsContent'
