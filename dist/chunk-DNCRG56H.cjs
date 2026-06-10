"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/components/Nav/Nav.tsx
var _react = require('react');
var _jsxruntime = require('react/jsx-runtime');
var Nav = _react.forwardRef.call(void 0, ({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "nav", { ref, className, ...props }));
Nav.displayName = "Nav";
var NavList = _react.forwardRef.call(void 0, ({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "ul", { ref, className, ...props }));
NavList.displayName = "NavList";
var NavItem = _react.forwardRef.call(void 0, ({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { ref, className, ...props }));
NavItem.displayName = "NavItem";





exports.Nav = Nav; exports.NavList = NavList; exports.NavItem = NavItem;
