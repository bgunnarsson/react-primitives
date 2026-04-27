import React from 'react'

export interface ErrorBoundaryFallbackProps {
  error: Error
  reset: () => void
}

export type ErrorBoundaryFallback =
  | React.ReactNode
  | ((props: ErrorBoundaryFallbackProps) => React.ReactNode)

export interface ErrorBoundaryProps {
  children?: React.ReactNode
  /** UI to render when a descendant throws. Pass a node, or a function for access to `error` and `reset`. */
  fallback?: ErrorBoundaryFallback
  /** Called once per caught error with the error and React's component stack info. */
  onError?: (error: Error, info: React.ErrorInfo) => void
  /** When any value in this array changes between renders, the boundary clears its error and re-renders children. */
  resetKeys?: ReadonlyArray<unknown>
  /** Called when the boundary clears its error (manual reset or `resetKeys` change). */
  onReset?: () => void
}

interface ErrorBoundaryState {
  error: Error | null
}

const arraysShallowEqual = (a: ReadonlyArray<unknown>, b: ReadonlyArray<unknown>) => {
  if (a.length !== b.length) {
    return false
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false
    }
  }
  return true
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.props.onError?.(error, info)
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    const { error } = this.state
    if (error === null) {
      return
    }
    const { resetKeys } = this.props
    if (resetKeys && prevProps.resetKeys && !arraysShallowEqual(prevProps.resetKeys, resetKeys)) {
      this.reset()
    }
  }

  reset = () => {
    if (this.state.error !== null) {
      this.props.onReset?.()
      this.setState({ error: null })
    }
  }

  render() {
    const { error } = this.state
    const { fallback, children } = this.props

    if (error !== null) {
      if (typeof fallback === 'function') {
        return fallback({ error, reset: this.reset })
      }
      return fallback ?? null
    }
    return children
  }
}
