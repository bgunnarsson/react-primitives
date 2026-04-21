# Stepper

A visual step indicator for multi-step flows such as wizards and checkout processes.

## Import

```tsx
import {
  Stepper,
  StepperItem,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
} from '@bgunnarsson/react-primitives'
```

## Props

### `Stepper`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | — | The current active step (1-based). |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction. |

Extends `React.HTMLAttributes<HTMLOListElement>`.

### `StepperItem`

| Prop | Type | Default | Description |
|---|---|---|---|
| `step` | `number` | — | The step number for this item. |

Sets `data-state` to `active`, `completed`, or `pending` based on `value` in context.

### `StepperIndicator`

Renders the step number by default, or `✓` when the step is completed. Pass `children` to override. Sets `data-state`.

### `StepperTitle` / `StepperDescription`

`<p>` wrappers.

### `StepperSeparator`

`<div>` for the line between steps. Place between `StepperItem` elements.

## Usage

```tsx
<Stepper value={2}>
  <StepperItem step={1}>
    <StepperIndicator />
    <StepperTitle>Account</StepperTitle>
  </StepperItem>
  <StepperSeparator />
  <StepperItem step={2}>
    <StepperIndicator />
    <StepperTitle>Profile</StepperTitle>
  </StepperItem>
  <StepperSeparator />
  <StepperItem step={3}>
    <StepperIndicator />
    <StepperTitle>Done</StepperTitle>
  </StepperItem>
</Stepper>
```

## Tailwind Example

```tsx
<Stepper value={currentStep} className="flex items-center list-none p-0 m-0">
  {steps.map(({ step, title }, i) => (
    <>
      <StepperItem key={step} step={step} className="flex items-center gap-2">
        <StepperIndicator className="flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold data-[state=active]:border-blue-600 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=completed]:border-blue-600 data-[state=completed]:bg-blue-600 data-[state=completed]:text-white data-[state=pending]:border-gray-300 data-[state=pending]:text-gray-400" />
        <StepperTitle className="text-sm font-medium data-[state=pending]:text-gray-400">{title}</StepperTitle>
      </StepperItem>
      {i < steps.length - 1 && (
        <StepperSeparator className="mx-2 h-px flex-1 bg-gray-200" />
      )}
    </>
  ))}
</Stepper>
```
