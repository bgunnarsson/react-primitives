'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  } else {
    var newObj = {}
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          newObj[key] = obj[key]
        }
      }
    }
    newObj.default = obj
    return newObj
  }
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
} // src/components/AlertDialog/AlertDialog.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _reactalertdialog = require('@radix-ui/react-alert-dialog')
var RadixAlertDialog = _interopRequireWildcard(_reactalertdialog)
var _jsxruntime = require('react/jsx-runtime')
var AlertDialog = RadixAlertDialog.Root
var AlertDialogTrigger = RadixAlertDialog.Trigger
var AlertDialogPortal = RadixAlertDialog.Portal
var AlertDialogTitle = RadixAlertDialog.Title
var AlertDialogDescription = RadixAlertDialog.Description
var AlertDialogAction = RadixAlertDialog.Action
var AlertDialogCancel = RadixAlertDialog.Cancel
var AlertDialogOverlay = _react2.default.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixAlertDialog.Overlay, { ref, className, ...props })
)
AlertDialogOverlay.displayName = 'AlertDialogOverlay'
var AlertDialogContent = _react2.default.forwardRef(
  ({ className, overlayClassName, overlayStyle, children, ...props }, ref) =>
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, AlertDialogPortal, {
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, AlertDialogOverlay, {
          className: overlayClassName,
          style: overlayStyle,
        }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixAlertDialog.Content, { ref, className, ...props, children }),
      ],
    })
)
AlertDialogContent.displayName = 'AlertDialogContent'

exports.AlertDialog = AlertDialog
exports.AlertDialogTrigger = AlertDialogTrigger
exports.AlertDialogPortal = AlertDialogPortal
exports.AlertDialogTitle = AlertDialogTitle
exports.AlertDialogDescription = AlertDialogDescription
exports.AlertDialogAction = AlertDialogAction
exports.AlertDialogCancel = AlertDialogCancel
exports.AlertDialogOverlay = AlertDialogOverlay
exports.AlertDialogContent = AlertDialogContent
