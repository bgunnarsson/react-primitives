# Tabs

A set of layered panels — only one panel is visible at a time, controlled by a row of tab triggers.

## Import

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@bgunnarsson/react-primitives'
```

## Props

### `Tabs` (root)

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Controlled active tab value. |
| `defaultValue` | `string` | — | Uncontrolled initial active tab. |
| `onValueChange` | `(value: string) => void` | — | Callback when active tab changes. |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Tab layout direction. |

### `TabsTrigger`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | **Required.** The tab this trigger activates. Must match a `TabsContent` value. |
| `disabled` | `boolean` | `false` | Disables this tab trigger. |

### `TabsContent`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | **Required.** The tab value this content belongs to. |
| `forceMount` | `boolean` | — | Keep content mounted even when not active. |

## Usage

```tsx
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings.</TabsContent>
  <TabsContent value="password">Change your password.</TabsContent>
</Tabs>
```

## Tailwind Example

```tsx
<Tabs defaultValue="overview" className="w-full">
  <TabsList className="inline-flex w-full items-center justify-start gap-0 border-b border-gray-200">
    {['overview', 'analytics', 'settings'].map((tab) => (
      <TabsTrigger
        key={tab}
        value={tab}
        className="relative -mb-px border-b-2 border-transparent px-4 py-2 text-sm font-medium capitalize text-gray-500 transition-colors hover:text-gray-800 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 focus-visible:outline-none"
      >
        {tab}
      </TabsTrigger>
    ))}
  </TabsList>
  <TabsContent value="overview" className="mt-5 text-sm text-gray-700">
    Overview panel content.
  </TabsContent>
  <TabsContent value="analytics" className="mt-5 text-sm text-gray-700">
    Analytics panel content.
  </TabsContent>
  <TabsContent value="settings" className="mt-5 text-sm text-gray-700">
    Settings panel content.
  </TabsContent>
</Tabs>

{/* Pill-style tabs */}
<Tabs defaultValue="all" className="w-full">
  <TabsList className="inline-flex rounded-lg bg-gray-100 p-1 gap-1">
    {['all', 'active', 'archived'].map((tab) => (
      <TabsTrigger
        key={tab}
        value={tab}
        className="rounded-md px-4 py-1.5 text-sm font-medium capitalize text-gray-600 transition-all data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
      >
        {tab}
      </TabsTrigger>
    ))}
  </TabsList>
</Tabs>
```

## Notes

- The `value` prop on `TabsTrigger` must exactly match the `value` prop on the corresponding `TabsContent`.
- Arrow keys navigate between triggers. `Home` and `End` jump to the first and last tab.
- Use `data-[state=active]:` Tailwind variants to style the active trigger.
