import React__default from 'react';

declare const getYouTubeEmbedUrl: (urlOrId: string) => string;
declare const getVimeoEmbedUrl: (urlOrId: string) => string;
interface EmbedProps extends Omit<React__default.IframeHTMLAttributes<HTMLIFrameElement>, 'title' | 'style'> {
    /** Embed URL. Use `getYouTubeEmbedUrl` / `getVimeoEmbedUrl` to convert raw share URLs. */
    src: string;
    /** Required for accessibility — announced by screen readers. */
    title: string;
}
declare const Embed: React__default.ForwardRefExoticComponent<EmbedProps & React__default.RefAttributes<HTMLIFrameElement>>;

export { Embed, type EmbedProps, getVimeoEmbedUrl, getYouTubeEmbedUrl };
