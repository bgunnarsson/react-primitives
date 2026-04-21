# Stat

A compound component for displaying a single metric with a label and optional help text.

## Import

```tsx
import { Stat, StatLabel, StatValue, StatHelpText } from '@bgunnarsson/react-primitives'
```

## Props

All parts extend their respective HTML element attributes:

| Part | Element |
|---|---|
| `Stat` | `div` |
| `StatLabel` | `p` |
| `StatValue` | `p` |
| `StatHelpText` | `p` |

## Usage

```tsx
<Stat>
  <StatLabel>Total revenue</StatLabel>
  <StatValue>$12,450</StatValue>
  <StatHelpText>+4.5% from last month</StatHelpText>
</Stat>
```

## Tailwind Example

```tsx
{/* Single stat */}
<Stat className="rounded-xl border border-gray-200 bg-white p-6">
  <StatLabel className="text-sm font-medium text-gray-500">Total revenue</StatLabel>
  <StatValue className="mt-1 text-3xl font-bold text-gray-900">$12,450</StatValue>
  <StatHelpText className="mt-1 text-sm text-green-600">↑ 4.5% from last month</StatHelpText>
</Stat>

{/* Dashboard grid */}
<div className="grid grid-cols-3 gap-4">
  <Stat className="rounded-xl border border-gray-200 bg-white p-6">
    <StatLabel className="text-sm font-medium text-gray-500">Revenue</StatLabel>
    <StatValue className="mt-1 text-3xl font-bold">$12,450</StatValue>
    <StatHelpText className="mt-1 text-sm text-green-600">↑ 4.5%</StatHelpText>
  </Stat>
  {/* ... */}
</div>
```
