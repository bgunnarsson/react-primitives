import * as react_jsx_runtime from 'react/jsx-runtime';
import React__default from 'react';

interface PictureSource {
    srcSet: string;
    media?: string;
    type?: string;
}
interface PictureProps extends React__default.HTMLAttributes<HTMLPictureElement> {
    src: string;
    alt: string;
    sources?: PictureSource[];
    loading?: 'lazy' | 'eager';
    width?: number;
    height?: number;
    /** className forwarded to the inner `<img>` element */
    imgClassName?: string;
}
declare const Picture: ({ src, alt, sources, loading, width, height, imgClassName, className, ...props }: PictureProps) => react_jsx_runtime.JSX.Element;

export { Picture, type PictureProps, type PictureSource };
