import * as react_jsx_runtime from 'react/jsx-runtime';
import React__default from 'react';

interface EmptyStateProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
declare const EmptyState: (props: EmptyStateProps) => react_jsx_runtime.JSX.Element;
interface EmptyStateIconProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
declare const EmptyStateIcon: (props: EmptyStateIconProps) => react_jsx_runtime.JSX.Element;
interface EmptyStateTitleProps extends React__default.HTMLAttributes<HTMLHeadingElement> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
declare const EmptyStateTitle: ({ as: Tag, ...props }: EmptyStateTitleProps) => react_jsx_runtime.JSX.Element;
interface EmptyStateDescriptionProps extends React__default.HTMLAttributes<HTMLParagraphElement> {
}
declare const EmptyStateDescription: (props: EmptyStateDescriptionProps) => react_jsx_runtime.JSX.Element;
interface EmptyStateActionProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
declare const EmptyStateAction: (props: EmptyStateActionProps) => react_jsx_runtime.JSX.Element;

export { EmptyState, EmptyStateAction, type EmptyStateActionProps, EmptyStateDescription, type EmptyStateDescriptionProps, EmptyStateIcon, type EmptyStateIconProps, type EmptyStateProps, EmptyStateTitle, type EmptyStateTitleProps };
