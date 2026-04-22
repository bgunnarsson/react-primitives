// src/components/Alert/Alert.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Alert = ({ as: headingLevel, heading, description, children, ...props }) => /* @__PURE__ */ jsxs("div", { role: "alert", ...props, children: [
  heading && /* @__PURE__ */ jsx(AlertTitle, { as: headingLevel, children: heading }),
  description && /* @__PURE__ */ jsx(AlertDescription, { children: description }),
  children
] });
var AlertTitle = ({ as: Tag = "h5", ...props }) => /* @__PURE__ */ jsx(Tag, { ...props });
var AlertDescription = (props) => /* @__PURE__ */ jsx("p", { ...props });

export {
  Alert,
  AlertTitle,
  AlertDescription
};
