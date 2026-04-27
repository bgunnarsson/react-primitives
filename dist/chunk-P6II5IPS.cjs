"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }// src/components/Breadcrumb/Breadcrumb.tsx
var _jsxruntime = require('react/jsx-runtime');
var Breadcrumbs = (props) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "nav", { "aria-label": "breadcrumb", ...props });
var BreadcrumbsList = (props) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "ul", { ...props });
var BreadcrumbsItem = (props) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { ...props });
var BreadcrumbsLink = (props) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "a", { ...props });
var BreadcrumbsPage = (props) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { "aria-current": "page", ...props });
var BreadcrumbsSeparator = ({
  separator,
  children,
  ...props
}) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { "aria-hidden": "true", ...props, children: _nullishCoalesce(_nullishCoalesce(children, () => ( separator)), () => ( "\u2022")) });








exports.Breadcrumbs = Breadcrumbs; exports.BreadcrumbsList = BreadcrumbsList; exports.BreadcrumbsItem = BreadcrumbsItem; exports.BreadcrumbsLink = BreadcrumbsLink; exports.BreadcrumbsPage = BreadcrumbsPage; exports.BreadcrumbsSeparator = BreadcrumbsSeparator;
