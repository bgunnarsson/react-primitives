"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }// src/components/Slider/Slider.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _reactslider = require('@radix-ui/react-slider'); var RadixSlider = _interopRequireWildcard(_reactslider);
var _jsxruntime = require('react/jsx-runtime');
var Slider = _react2.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, RadixSlider.Root, { ref, className, ...props, children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixSlider.Track, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixSlider.Range, {}) }),
    (_nullishCoalesce(_nullishCoalesce(props.defaultValue, () => ( props.value)), () => ( [0]))).map((_, i) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixSlider.Thumb, {}, i))
  ] })
);
Slider.displayName = "Slider";



exports.Slider = Slider;
//# sourceMappingURL=chunk-HSY45PMK.cjs.map