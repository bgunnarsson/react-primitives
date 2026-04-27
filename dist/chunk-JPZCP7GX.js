// src/components/Breadcrumb/Breadcrumb.tsx
import { jsx } from "react/jsx-runtime";
var Breadcrumbs = (props) => /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb", ...props });
var BreadcrumbsList = (props) => /* @__PURE__ */ jsx("ul", { ...props });
var BreadcrumbsItem = (props) => /* @__PURE__ */ jsx("li", { ...props });
var BreadcrumbsLink = (props) => /* @__PURE__ */ jsx("a", { ...props });
var BreadcrumbsPage = (props) => /* @__PURE__ */ jsx("span", { "aria-current": "page", ...props });
var BreadcrumbsSeparator = ({
  separator,
  children,
  ...props
}) => /* @__PURE__ */ jsx("span", { "aria-hidden": "true", ...props, children: children ?? separator ?? "\u2022" });

export {
  Breadcrumbs,
  BreadcrumbsList,
  BreadcrumbsItem,
  BreadcrumbsLink,
  BreadcrumbsPage,
  BreadcrumbsSeparator
};
