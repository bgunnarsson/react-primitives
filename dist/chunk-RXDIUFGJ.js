// src/components/Tabs/Tabs.tsx
import React from 'react'
import * as RadixTabs from '@radix-ui/react-tabs'
import { jsx } from 'react/jsx-runtime'
var Tabs = RadixTabs.Root
var TabsList = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(RadixTabs.List, { ref, className, ...props })
)
TabsList.displayName = 'TabsList'
var TabsTrigger = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(RadixTabs.Trigger, { ref, className, ...props })
)
TabsTrigger.displayName = 'TabsTrigger'
var TabsContent = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(RadixTabs.Content, { ref, className, ...props })
)
TabsContent.displayName = 'TabsContent'

export { Tabs, TabsList, TabsTrigger, TabsContent }
