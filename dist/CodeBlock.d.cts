import * as react_jsx_runtime from 'react/jsx-runtime';
import React__default from 'react';

interface CodeBlockProps extends React__default.HTMLAttributes<HTMLDivElement> {
    code: string;
    title?: string;
}
declare const CodeBlock: ({ code, title, children, ...props }: CodeBlockProps) => react_jsx_runtime.JSX.Element;

export { CodeBlock, type CodeBlockProps };
