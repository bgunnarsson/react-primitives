"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }// src/components/Form/Form.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _reactslot = require('@radix-ui/react-slot');
var _jsxruntime = require('react/jsx-runtime');
var FormFieldContext = _react2.default.createContext({ id: "" });
var FormField = ({ id: idProp, error, children, className, ...props }) => {
  const generatedId = _react2.default.useId();
  const id = _nullishCoalesce(idProp, () => ( generatedId));
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormFieldContext.Provider, { value: { id, error }, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className, ...props, children }) });
};
var FormLabel = _react2.default.forwardRef(
  ({ className, ...props }, ref) => {
    const { id } = _react2.default.useContext(FormFieldContext);
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "label", { ref, htmlFor: id, className, ...props });
  }
);
FormLabel.displayName = "FormLabel";
var FormControl = _react2.default.forwardRef(
  ({ ...props }, ref) => {
    const { id, error } = _react2.default.useContext(FormFieldContext);
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      _reactslot.Slot,
      {
        ref,
        id,
        "aria-invalid": error ? true : void 0,
        "aria-describedby": error ? `${id}-message` : void 0,
        ...props
      }
    );
  }
);
FormControl.displayName = "FormControl";
var FormMessage = _react2.default.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { id, error } = _react2.default.useContext(FormFieldContext);
    const message = _nullishCoalesce(error, () => ( children));
    if (!message) return null;
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { ref, id: `${id}-message`, role: "alert", className, ...props, children: message });
  }
);
FormMessage.displayName = "FormMessage";






exports.FormField = FormField; exports.FormLabel = FormLabel; exports.FormControl = FormControl; exports.FormMessage = FormMessage;
