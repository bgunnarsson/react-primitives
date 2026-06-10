"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/components/AudioPlayer/AudioPlayer.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _jsxruntime = require('react/jsx-runtime');
var AudioPlayer = _react2.default.forwardRef(
  ({ src, className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "audio", { ref, src, className, ...props })
);
AudioPlayer.displayName = "AudioPlayer";



exports.AudioPlayer = AudioPlayer;
