import React__default from 'react';

interface ErrorBoundaryFallbackProps {
    error: Error;
    reset: () => void;
}
type ErrorBoundaryFallback = React__default.ReactNode | ((props: ErrorBoundaryFallbackProps) => React__default.ReactNode);
interface ErrorBoundaryProps {
    children?: React__default.ReactNode;
    /** UI to render when a descendant throws. Pass a node, or a function for access to `error` and `reset`. */
    fallback?: ErrorBoundaryFallback;
    /** Called once per caught error with the error and React's component stack info. */
    onError?: (error: Error, info: React__default.ErrorInfo) => void;
    /** When any value in this array changes between renders, the boundary clears its error and re-renders children. */
    resetKeys?: ReadonlyArray<unknown>;
    /** Called when the boundary clears its error (manual reset or `resetKeys` change). */
    onReset?: () => void;
}
interface ErrorBoundaryState {
    error: Error | null;
}
declare class ErrorBoundary extends React__default.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState;
    static getDerivedStateFromError(error: Error): ErrorBoundaryState;
    componentDidCatch(error: Error, info: React__default.ErrorInfo): void;
    componentDidUpdate(prevProps: ErrorBoundaryProps): void;
    reset: () => void;
    render(): React__default.ReactNode;
}

export { ErrorBoundary, type ErrorBoundaryFallback, type ErrorBoundaryFallbackProps, type ErrorBoundaryProps };
