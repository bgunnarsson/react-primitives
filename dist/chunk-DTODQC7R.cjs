"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// src/components/Rating/Rating.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _jsxruntime = require('react/jsx-runtime');
var Rating = _react2.default.forwardRef(
  ({
    value: valueProp,
    defaultValue = 0,
    onValueChange,
    max = 5,
    disabled,
    readOnly,
    name,
    className,
    style,
    renderItem,
    "aria-label": ariaLabel = "Rating"
  }, ref) => {
    const [uncontrolled, setUncontrolled] = _react2.default.useState(defaultValue);
    const [hover, setHover] = _react2.default.useState(null);
    const controlled = valueProp !== void 0;
    const value = controlled ? valueProp : uncontrolled;
    const setValue = (next) => {
      if (disabled || readOnly) return;
      if (!controlled) setUncontrolled(next);
      _optionalChain([onValueChange, 'optionalCall', _2 => _2(next)]);
    };
    const display = _nullishCoalesce(hover, () => ( value));
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "div",
      {
        ref,
        role: "radiogroup",
        "aria-label": ariaLabel,
        "aria-disabled": disabled || void 0,
        "aria-readonly": readOnly || void 0,
        className,
        style,
        onMouseLeave: () => setHover(null),
        children: Array.from({ length: max }, (_, i) => {
          const starValue = i + 1;
          const filled = display >= starValue;
          const active = value === starValue;
          return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            "label",
            {
              onMouseEnter: () => !disabled && !readOnly && setHover(starValue),
              "data-filled": filled ? "" : void 0,
              "data-active": active ? "" : void 0,
              style: { cursor: disabled || readOnly ? "default" : "pointer" },
              children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  "input",
                  {
                    type: "radio",
                    name,
                    value: starValue,
                    checked: active,
                    disabled,
                    readOnly,
                    onChange: () => setValue(starValue),
                    style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0,0,0,0)", border: 0 }
                  }
                ),
                renderItem ? renderItem({ index: i, filled, active }) : filled ? "\u2605" : "\u2606"
              ]
            },
            starValue
          );
        })
      }
    );
  }
);
Rating.displayName = "Rating";



exports.Rating = Rating;
