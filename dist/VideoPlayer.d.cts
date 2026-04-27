import React__default from 'react'

interface VideoPlayerProps extends React__default.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
  poster?: string
}
declare const VideoPlayer: React__default.ForwardRefExoticComponent<
  VideoPlayerProps & React__default.RefAttributes<HTMLVideoElement>
>

export { VideoPlayer, type VideoPlayerProps }
