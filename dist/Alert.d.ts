import * as react_jsx_runtime from 'react/jsx-runtime';
import React__default from 'react';

interface AlertProps extends React__default.HTMLAttributes<HTMLDivElement> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    heading?: React__default.ReactNode;
    description?: React__default.ReactNode;
}
declare const Alert: ({ as: headingLevel, heading, description, children, ...props }: AlertProps) => react_jsx_runtime.JSX.Element;
interface AlertTitleProps extends React__default.HTMLAttributes<HTMLHeadingElement> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
declare const AlertTitle: ({ as: Tag, ...props }: AlertTitleProps) => react_jsx_runtime.JSX.Element;
interface AlertDescriptionProps extends React__default.HTMLAttributes<HTMLParagraphElement> {
}
declare const AlertDescription: (props: AlertDescriptionProps) => react_jsx_runtime.JSX.Element;
interface AlertIconProps extends React__default.HTMLAttributes<HTMLSpanElement> {
}
declare const AlertIcon: (props: AlertIconProps) => react_jsx_runtime.JSX.Element;
interface AlertActionsProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
declare const AlertActions: (props: AlertActionsProps) => react_jsx_runtime.JSX.Element;

export { Alert, AlertActions, type AlertActionsProps, AlertDescription, type AlertDescriptionProps, AlertIcon, type AlertIconProps, type AlertProps, AlertTitle, type AlertTitleProps };
