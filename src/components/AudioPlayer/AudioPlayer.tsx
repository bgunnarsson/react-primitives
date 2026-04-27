import React from 'react'

export interface AudioPlayerProps extends Omit<React.AudioHTMLAttributes<HTMLAudioElement>, 'style'> {
  src: string
}

export const AudioPlayer = React.forwardRef<HTMLAudioElement, AudioPlayerProps>(
  ({ src, className, ...props }, ref) => (
    <audio ref={ref} src={src} className={className} {...props} />
  )
)
AudioPlayer.displayName = 'AudioPlayer'
