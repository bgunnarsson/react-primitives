import React__default from 'react'
import * as RadixTabs from '@radix-ui/react-tabs'

declare const Tabs: React__default.ForwardRefExoticComponent<
  RadixTabs.TabsProps & React__default.RefAttributes<HTMLDivElement>
>
interface TabsListProps extends React__default.ComponentPropsWithoutRef<typeof RadixTabs.List> {}
declare const TabsList: React__default.ForwardRefExoticComponent<
  TabsListProps & React__default.RefAttributes<HTMLDivElement>
>
interface TabsTriggerProps extends React__default.ComponentPropsWithoutRef<typeof RadixTabs.Trigger> {}
declare const TabsTrigger: React__default.ForwardRefExoticComponent<
  TabsTriggerProps & React__default.RefAttributes<HTMLButtonElement>
>
interface TabsContentProps extends React__default.ComponentPropsWithoutRef<typeof RadixTabs.Content> {}
declare const TabsContent: React__default.ForwardRefExoticComponent<
  TabsContentProps & React__default.RefAttributes<HTMLDivElement>
>

export { Tabs, TabsContent, type TabsContentProps, TabsList, type TabsListProps, TabsTrigger, type TabsTriggerProps }
