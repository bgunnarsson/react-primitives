"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }// src/components/Pagination/Pagination.tsx
var _jsxruntime = require('react/jsx-runtime');
var Pagination = (props) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "nav", { "aria-label": "pagination", ...props });
var PaginationContent = (props) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "ul", { ...props });
var PaginationItem = (props) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { ...props });
var PaginationLink = ({ isActive, ...props }) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "a", { "aria-current": isActive ? "page" : void 0, "data-active": isActive || void 0, ...props });
var PaginationPrevious = (props) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "a", { "aria-label": "Go to previous page", ...props });
var PaginationNext = (props) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "a", { "aria-label": "Go to next page", ...props });
var PaginationEllipsis = (props) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { "aria-hidden": "true", ...props, children: _nullishCoalesce(props.children, () => ( "\u2026")) });









exports.Pagination = Pagination; exports.PaginationContent = PaginationContent; exports.PaginationItem = PaginationItem; exports.PaginationLink = PaginationLink; exports.PaginationPrevious = PaginationPrevious; exports.PaginationNext = PaginationNext; exports.PaginationEllipsis = PaginationEllipsis;
