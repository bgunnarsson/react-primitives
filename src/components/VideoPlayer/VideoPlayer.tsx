import React from 'react'

export interface VideoPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
  poster?: string
}

export const VideoPlayer = React.forwardRef<HTMLVideoElement, VideoPlayerProps>(
  ({ src, poster, className, ...props }, ref) => (
    <video ref={ref} src={src} poster={poster} className={className} {...props} />
  )
)
VideoPlayer.displayName = 'VideoPlayer'
