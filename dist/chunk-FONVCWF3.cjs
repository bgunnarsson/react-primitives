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
} // src/components/ContextMenu/ContextMenu.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _reactcontextmenu = require('@radix-ui/react-context-menu')
var RadixContextMenu = _interopRequireWildcard(_reactcontextmenu)
var _jsxruntime = require('react/jsx-runtime')
var ContextMenu = RadixContextMenu.Root
var ContextMenuTrigger = RadixContextMenu.Trigger
var ContextMenuGroup = RadixContextMenu.Group
var ContextMenuSub = RadixContextMenu.Sub
var ContextMenuRadioGroup = RadixContextMenu.RadioGroup
var ContextMenuContent = _react2.default.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixContextMenu.Portal, {
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixContextMenu.Content, { ref, className, ...props }),
  })
)
ContextMenuContent.displayName = 'ContextMenuContent'
var ContextMenuItem = _react2.default.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixContextMenu.Item, { ref, className, ...props })
)
ContextMenuItem.displayName = 'ContextMenuItem'
var ContextMenuCheckboxItem = _react2.default.forwardRef(({ className, children, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, RadixContextMenu.CheckboxItem, {
    ref,
    className,
    ...props,
    children: [/* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixContextMenu.ItemIndicator, {}), children],
  })
)
ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem'
var ContextMenuRadioItem = _react2.default.forwardRef(({ className, children, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, RadixContextMenu.RadioItem, {
    ref,
    className,
    ...props,
    children: [/* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixContextMenu.ItemIndicator, {}), children],
  })
)
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem'
var ContextMenuLabel = _react2.default.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixContextMenu.Label, { ref, className, ...props })
)
ContextMenuLabel.displayName = 'ContextMenuLabel'
var ContextMenuSeparator = _react2.default.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixContextMenu.Separator, { ref, className, ...props })
)
ContextMenuSeparator.displayName = 'ContextMenuSeparator'
var ContextMenuSubTrigger = _react2.default.forwardRef(({ className, children, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixContextMenu.SubTrigger, { ref, className, ...props, children })
)
ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger'
var ContextMenuSubContent = _react2.default.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixContextMenu.Portal, {
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixContextMenu.SubContent, { ref, className, ...props }),
  })
)
ContextMenuSubContent.displayName = 'ContextMenuSubContent'

exports.ContextMenu = ContextMenu
exports.ContextMenuTrigger = ContextMenuTrigger
exports.ContextMenuGroup = ContextMenuGroup
exports.ContextMenuSub = ContextMenuSub
exports.ContextMenuRadioGroup = ContextMenuRadioGroup
exports.ContextMenuContent = ContextMenuContent
exports.ContextMenuItem = ContextMenuItem
exports.ContextMenuCheckboxItem = ContextMenuCheckboxItem
exports.ContextMenuRadioItem = ContextMenuRadioItem
exports.ContextMenuLabel = ContextMenuLabel
exports.ContextMenuSeparator = ContextMenuSeparator
exports.ContextMenuSubTrigger = ContextMenuSubTrigger
exports.ContextMenuSubContent = ContextMenuSubContent
