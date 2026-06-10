// src/components/ErrorBoundary/ErrorBoundary.tsx
import React from "react";
var arraysShallowEqual = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};
var ErrorBoundary = class extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { error: null };
    this.reset = () => {
      if (this.state.error !== null) {
        this.props.onReset?.();
        this.setState({ error: null });
      }
    };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    this.props.onError?.(error, info);
  }
  componentDidUpdate(prevProps) {
    const { error } = this.state;
    if (error === null) {
      return;
    }
    const { resetKeys } = this.props;
    if (resetKeys && prevProps.resetKeys && !arraysShallowEqual(prevProps.resetKeys, resetKeys)) {
      this.reset();
    }
  }
  render() {
    const { error } = this.state;
    const { fallback, children } = this.props;
    if (error !== null) {
      if (typeof fallback === "function") {
        return fallback({ error, reset: this.reset });
      }
      return fallback ?? null;
    }
    return children;
  }
};

export {
  ErrorBoundary
};
