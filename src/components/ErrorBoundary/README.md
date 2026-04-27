# ErrorBoundary

A headless React error boundary. Catches errors thrown by descendants during render, lifecycle, and constructor phases, and renders a fallback in their place. Ships zero CSS — the fallback is whatever you pass in.

## Import

```tsx
import { ErrorBoundary } from '@bgunnarsson/react-primitives'
```

## Props

### `ErrorBoundary`

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | — | The protected subtree. |
| `fallback` | `ReactNode \| ({ error, reset }) => ReactNode` | — | UI to render when a descendant throws. Pass a function for access to `error` and `reset`. |
| `onError` | `(error: Error, info: React.ErrorInfo) => void` | — | Called once per caught error. Use it to log to Sentry, Datadog, etc. |
| `resetKeys` | `ReadonlyArray<unknown>` | — | When any value changes between renders, the boundary clears its error and re-renders children. |
| `onReset` | `() => void` | — | Called when the boundary clears its error (manual reset or `resetKeys` change). |

### Fallback render-prop

```ts
type ErrorBoundaryFallbackProps = {
  error: Error
  reset: () => void
}
```

## Usage

```tsx
<ErrorBoundary fallback={<p>Something went wrong.</p>}>
  <App />
</ErrorBoundary>
```

## Tailwind Example

```tsx
{/* Static fallback */}
<ErrorBoundary
  fallback={
    <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800">
      Something went wrong. Please refresh the page.
    </div>
  }
>
  <Dashboard />
</ErrorBoundary>

{/* Render-prop fallback with retry */}
<ErrorBoundary
  onError={(error, info) => {
    console.error(error, info.componentStack)
  }}
  fallback={({ error, reset }) => (
    <div className="rounded-md border border-red-200 bg-red-50 p-4">
      <p className="text-sm font-medium text-red-800">{error.message}</p>
      <button
        type="button"
        onClick={reset}
        className="mt-2 rounded bg-red-600 px-3 py-1 text-xs text-white hover:bg-red-700"
      >
        Try again
      </button>
    </div>
  )}
>
  <Widget />
</ErrorBoundary>

{/* Auto-reset when route or query changes */}
<ErrorBoundary
  resetKeys={[pathname, queryId]}
  fallback={({ error, reset }) => (
    <Fallback error={error} onRetry={reset} />
  )}
>
  <RouteContent />
</ErrorBoundary>
```

## Notes

- React error boundaries do **not** catch errors in event handlers, async code (`setTimeout`, promises), server-rendered HTML, or errors thrown inside the boundary itself. Wrap async work in try/catch and surface failures via state, then trigger a re-render that throws — or render an error UI directly.
- Place boundaries at meaningful unit-of-recovery seams (per-route, per-widget, per-list-item) rather than only at the app root. A boundary that wraps the whole app turns every error into a blank page.
- `resetKeys` performs a shallow equality check across the array. Pass primitives (route path, query id) or stable references; new object/array literals on every render will reset on every render.
- The `reset()` callback simply clears the boundary's caught error. If the same condition still throws on re-render, the boundary will catch it again immediately. Pair `reset` with a state change that prevents re-throwing.
- `onError` fires inside `componentDidCatch`, so it runs after the fallback has rendered. Side effects there (logging) are safe.
