import React__default from 'react'
import { ImageFormat, ImageUrlBuilder } from './Image.js'

interface CropImageCrop {
  src: string
  width: number
  height: number
}
interface CropImageProps extends Omit<React__default.HTMLAttributes<HTMLPictureElement>, 'children'> {
  /** BEM block name. Generates `{identifier}__picture` and `{identifier}__image` classes. */
  identifier: string
  /** Optional modifier class(es) appended to the `<picture>` element. */
  modifier?: string
  /** Alt text used on the fallback `<img>`. */
  alt: string
  /** Required mobile crop. */
  mobile: CropImageCrop
  /** Optional desktop crop. When omitted, the mobile crop is used at all viewports. */
  desktop?: CropImageCrop
  /** Pixel breakpoint between mobile and desktop sources. Defaults to `420`. */
  breakpoint?: number
  quality?: number
  format?: ImageFormat
  /** DPR descriptors. Defaults to `[1, 2, 3]`. */
  densities?: readonly number[]
  /** Sets `loading="eager"` and `fetchpriority="high"` on the inner `<img>`. */
  eager?: boolean
  /** className applied to the inner `<img>` (in addition to `{identifier}__image`). */
  imgClassName?: string
  /** Extra props forwarded to the inner `<img>`. */
  imgProps?: Omit<
    React__default.ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'srcSet' | 'alt' | 'width' | 'height' | 'className'
  >
  /** Override URL builder. Default appends `width`/`height`/`format`/`quality` query params. */
  buildUrl?: ImageUrlBuilder
}
declare const CropImage: React__default.ForwardRefExoticComponent<
  CropImageProps & React__default.RefAttributes<HTMLPictureElement>
>

export { CropImage, type CropImageCrop, type CropImageProps }
