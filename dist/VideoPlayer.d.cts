import React__default from 'react';

interface VideoPlayerProps extends Omit<React__default.VideoHTMLAttributes<HTMLVideoElement>, 'style'> {
    src: string;
    poster?: string;
}
declare const VideoPlayer: React__default.ForwardRefExoticComponent<VideoPlayerProps & React__default.RefAttributes<HTMLVideoElement>>;

export { VideoPlayer, type VideoPlayerProps };
