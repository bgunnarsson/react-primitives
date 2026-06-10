"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/components/VideoPlayer/VideoPlayer.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _jsxruntime = require('react/jsx-runtime');
var VideoPlayer = _react2.default.forwardRef(
  ({ src, poster, className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "video", { ref, src, poster, className, ...props })
);
VideoPlayer.displayName = "VideoPlayer";



exports.VideoPlayer = VideoPlayer;
