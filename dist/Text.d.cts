import * as react_jsx_runtime from 'react/jsx-runtime';
import React__default from 'react';

type TextElement = 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface TextProps extends React__default.HTMLAttributes<HTMLElement> {
    as?: TextElement;
}
declare const Text: ({ as: Tag, className, ...props }: TextProps) => react_jsx_runtime.JSX.Element;

export { Text, type TextProps };
