"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/components/Avatar/Avatar.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _reactavatar = require('@radix-ui/react-avatar'); var RadixAvatar = _interopRequireWildcard(_reactavatar);
var _jsxruntime = require('react/jsx-runtime');
var Avatar = _react2.default.forwardRef(
  (props, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixAvatar.Root, { ref, ...props })
);
Avatar.displayName = "Avatar";
var AvatarImage = _react2.default.forwardRef(
  (props, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixAvatar.Image, { ref, ...props })
);
AvatarImage.displayName = "AvatarImage";
var AvatarFallback = _react2.default.forwardRef(
  (props, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixAvatar.Fallback, { ref, ...props })
);
AvatarFallback.displayName = "AvatarFallback";





exports.Avatar = Avatar; exports.AvatarImage = AvatarImage; exports.AvatarFallback = AvatarFallback;
