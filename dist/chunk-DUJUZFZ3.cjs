"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// src/components/ErrorBoundary/ErrorBoundary.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
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
var ErrorBoundary = class extends _react2.default.Component {
  constructor() {
    super(...arguments);
    this.state = { error: null };
    this.reset = () => {
      if (this.state.error !== null) {
        _optionalChain([this, 'access', _ => _.props, 'access', _2 => _2.onReset, 'optionalCall', _3 => _3()]);
        this.setState({ error: null });
      }
    };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    _optionalChain([this, 'access', _4 => _4.props, 'access', _5 => _5.onError, 'optionalCall', _6 => _6(error, info)]);
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
      return _nullishCoalesce(fallback, () => ( null));
    }
    return children;
  }
};



exports.ErrorBoundary = ErrorBoundary;
