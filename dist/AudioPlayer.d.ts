import React__default from 'react';

interface AudioPlayerProps extends Omit<React__default.AudioHTMLAttributes<HTMLAudioElement>, 'style'> {
    src: string;
}
declare const AudioPlayer: React__default.ForwardRefExoticComponent<AudioPlayerProps & React__default.RefAttributes<HTMLAudioElement>>;

export { AudioPlayer, type AudioPlayerProps };
