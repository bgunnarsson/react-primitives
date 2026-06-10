import React__default from 'react';

type ImageFormat = 'webp' | 'avif' | 'jpg' | 'jpeg' | 'png' | (string & {});
interface ImageUrlParams {
    width: number;
    height: number;
    quality?: number;
    format?: ImageFormat;
}
type ImageUrlBuilder = (src: string, params: ImageUrlParams) => string;
declare const buildImageUrl: ImageUrlBuilder;
declare const DEFAULT_DENSITIES: readonly [1, 2, 3];
declare const buildSrcSet: (src: string, width: number, height: number, densities: readonly number[], quality: number | undefined, format: ImageFormat | undefined, buildUrl: ImageUrlBuilder) => string;
interface ImageProps extends Omit<React__default.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height'> {
    src: string;
    alt: string;
    width: number;
    height: number;
    quality?: number;
    format?: ImageFormat;
    /** DPR descriptors. Defaults to `[1, 2, 3]`. */
    densities?: readonly number[];
    /** Sets `loading="eager"` and `fetchpriority="high"` (for above-the-fold images). */
    eager?: boolean;
    /** Override URL builder. Default appends `width`/`height`/`format`/`quality` query params. */
    buildUrl?: ImageUrlBuilder;
}
declare const Image: React__default.ForwardRefExoticComponent<ImageProps & React__default.RefAttributes<HTMLImageElement>>;

export { DEFAULT_DENSITIES, Image, type ImageFormat, type ImageProps, type ImageUrlBuilder, type ImageUrlParams, buildImageUrl, buildSrcSet };
