import React from 'react'

export interface VideoPlayerProps extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, 'style'> {
  src: string
  poster?: string
}

export const VideoPlayer = React.forwardRef<HTMLVideoElement, VideoPlayerProps>(
  ({ src, poster, className, ...props }, ref) => (
    <video ref={ref} src={src} poster={poster} className={className} {...props} />
  )
)
VideoPlayer.displayName = 'VideoPlayer'
