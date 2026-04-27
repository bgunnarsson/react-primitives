import React from 'react'

const YOUTUBE_RE = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/)|youtu\.be\/)([\w-]{11})/
const VIMEO_RE = /vimeo\.com\/(?:video\/)?(\d+)/

export const getYouTubeEmbedUrl = (urlOrId: string) => {
  if (/^[\w-]{11}$/.test(urlOrId)) {
    return `https://www.youtube.com/embed/${urlOrId}`
  }
  const match = urlOrId.match(YOUTUBE_RE)
  return match ? `https://www.youtube.com/embed/${match[1]}` : urlOrId
}

export const getVimeoEmbedUrl = (urlOrId: string) => {
  if (/^\d+$/.test(urlOrId)) {
    return `https://player.vimeo.com/video/${urlOrId}`
  }
  const match = urlOrId.match(VIMEO_RE)
  return match ? `https://player.vimeo.com/video/${match[1]}` : urlOrId
}

const DEFAULT_ALLOW =
  'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'

export interface EmbedProps extends Omit<React.IframeHTMLAttributes<HTMLIFrameElement>, 'title' | 'style'> {
  /** Embed URL. Use `getYouTubeEmbedUrl` / `getVimeoEmbedUrl` to convert raw share URLs. */
  src: string
  /** Required for accessibility — announced by screen readers. */
  title: string
}

export const Embed = React.forwardRef<HTMLIFrameElement, EmbedProps>(
  (
    {
      src,
      title,
      allow,
      allowFullScreen,
      loading = 'lazy',
      referrerPolicy = 'strict-origin-when-cross-origin',
      className,
      ...rest
    },
    ref
  ) => (
    <iframe
      ref={ref}
      src={src}
      title={title}
      allow={allow ?? DEFAULT_ALLOW}
      allowFullScreen={allowFullScreen ?? true}
      loading={loading}
      referrerPolicy={referrerPolicy}
      className={className}
      {...rest}
    />
  )
)
Embed.displayName = 'Embed'
