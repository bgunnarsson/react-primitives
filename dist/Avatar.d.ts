import React__default from 'react';
import * as RadixAvatar from '@radix-ui/react-avatar';

interface AvatarProps extends React__default.ComponentPropsWithoutRef<typeof RadixAvatar.Root> {
}
declare const Avatar: React__default.ForwardRefExoticComponent<AvatarProps & React__default.RefAttributes<HTMLSpanElement>>;
interface AvatarImageProps extends React__default.ComponentPropsWithoutRef<typeof RadixAvatar.Image> {
}
declare const AvatarImage: React__default.ForwardRefExoticComponent<AvatarImageProps & React__default.RefAttributes<HTMLImageElement>>;
interface AvatarFallbackProps extends React__default.ComponentPropsWithoutRef<typeof RadixAvatar.Fallback> {
}
declare const AvatarFallback: React__default.ForwardRefExoticComponent<AvatarFallbackProps & React__default.RefAttributes<HTMLSpanElement>>;

export { Avatar, AvatarFallback, type AvatarFallbackProps, AvatarImage, type AvatarImageProps, type AvatarProps };
