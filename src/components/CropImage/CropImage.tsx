import React from 'react'
import { buildImageUrl, buildSrcSet, DEFAULT_DENSITIES, type ImageFormat, type ImageUrlBuilder } from '../Image/Image'

export interface CropImageCrop {
  src: string
  width: number
  height: number
}

export interface CropImageProps extends Omit<React.HTMLAttributes<HTMLPictureElement>, 'children'> {
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
    React.ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'srcSet' | 'alt' | 'width' | 'height' | 'className'
  >
  /** Override URL builder. Default appends `width`/`height`/`format`/`quality` query params. */
  buildUrl?: ImageUrlBuilder
}

const cx = (...parts: Array<string | undefined | false | null>) => parts.filter(Boolean).join(' ') || undefined

export const CropImage = React.forwardRef<HTMLPictureElement, CropImageProps>(
  (
    {
      identifier,
      modifier,
      alt,
      mobile,
      desktop,
      breakpoint = 420,
      quality,
      format = 'webp',
      densities = DEFAULT_DENSITIES,
      eager,
      imgClassName,
      imgProps,
      buildUrl = buildImageUrl,
      className,
      ...rest
    },
    ref
  ) => {
    const sortedDensities = Array.from(new Set(densities))
      .filter((d) => d > 0 && Number.isFinite(d))
      .sort((a, b) => a - b)
    const baseDensity = sortedDensities[0] ?? 1

    const buildBase = (crop: CropImageCrop) =>
      buildUrl(crop.src, {
        width: crop.width * baseDensity,
        height: crop.height * baseDensity,
        quality,
        format,
      })

    const mobileSrcSet = buildSrcSet(
      mobile.src,
      mobile.width,
      mobile.height,
      sortedDensities,
      quality,
      format,
      buildUrl
    )

    const desktopSrcSet = desktop
      ? buildSrcSet(desktop.src, desktop.width, desktop.height, sortedDensities, quality, format, buildUrl)
      : null

    const fallbackCrop = desktop ?? mobile
    const fallbackBase = buildBase(fallbackCrop)
    const fallbackSrcSet = desktopSrcSet ?? mobileSrcSet

    return (
      <picture ref={ref} className={cx(`${identifier}__picture`, modifier, className)} {...rest}>
        <source
          media={`(max-width: ${breakpoint}px)`}
          srcSet={mobileSrcSet}
          width={mobile.width}
          height={mobile.height}
        />
        {desktop && desktopSrcSet ? (
          <source
            media={`(min-width: ${breakpoint + 1}px)`}
            srcSet={desktopSrcSet}
            width={desktop.width}
            height={desktop.height}
          />
        ) : null}
        <img
          className={cx(`${identifier}__image`, imgClassName)}
          src={fallbackBase}
          srcSet={fallbackSrcSet}
          width={fallbackCrop.width}
          height={fallbackCrop.height}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : undefined}
          decoding="async"
          {...imgProps}
        />
      </picture>
    )
  }
)
CropImage.displayName = 'CropImage'
