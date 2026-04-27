import React__default from 'react';

interface BannerProps extends React__default.HTMLAttributes<HTMLElement> {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    variant?: 'info' | 'success' | 'warning' | 'error' | (string & {});
    role?: React__default.AriaRole;
}
declare const Banner: React__default.ForwardRefExoticComponent<BannerProps & React__default.RefAttributes<HTMLElement>>;
interface BannerIconProps extends React__default.HTMLAttributes<HTMLSpanElement> {
}
declare const BannerIcon: React__default.ForwardRefExoticComponent<BannerIconProps & React__default.RefAttributes<HTMLSpanElement>>;
interface BannerTitleProps extends React__default.HTMLAttributes<HTMLParagraphElement> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'strong';
}
declare const BannerTitle: React__default.ForwardRefExoticComponent<BannerTitleProps & React__default.RefAttributes<HTMLElement>>;
interface BannerDescriptionProps extends React__default.HTMLAttributes<HTMLParagraphElement> {
}
declare const BannerDescription: React__default.ForwardRefExoticComponent<BannerDescriptionProps & React__default.RefAttributes<HTMLParagraphElement>>;
interface BannerActionsProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
declare const BannerActions: React__default.ForwardRefExoticComponent<BannerActionsProps & React__default.RefAttributes<HTMLDivElement>>;
interface BannerCloseProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
}
declare const BannerClose: React__default.ForwardRefExoticComponent<BannerCloseProps & React__default.RefAttributes<HTMLButtonElement>>;

export { Banner, BannerActions, type BannerActionsProps, BannerClose, type BannerCloseProps, BannerDescription, type BannerDescriptionProps, BannerIcon, type BannerIconProps, type BannerProps, BannerTitle, type BannerTitleProps };
