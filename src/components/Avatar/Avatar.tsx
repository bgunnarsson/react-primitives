import React from 'react'
import * as RadixAvatar from '@radix-ui/react-avatar'

export interface AvatarProps extends React.ComponentPropsWithoutRef<typeof RadixAvatar.Root> {}
export const Avatar = React.forwardRef<React.ElementRef<typeof RadixAvatar.Root>, AvatarProps>(
  (props, ref) => <RadixAvatar.Root ref={ref} {...props} />
)
Avatar.displayName = 'Avatar'

export interface AvatarImageProps extends React.ComponentPropsWithoutRef<typeof RadixAvatar.Image> {}
export const AvatarImage = React.forwardRef<React.ElementRef<typeof RadixAvatar.Image>, AvatarImageProps>(
  (props, ref) => <RadixAvatar.Image ref={ref} {...props} />
)
AvatarImage.displayName = 'AvatarImage'

export interface AvatarFallbackProps extends React.ComponentPropsWithoutRef<typeof RadixAvatar.Fallback> {}
export const AvatarFallback = React.forwardRef<React.ElementRef<typeof RadixAvatar.Fallback>, AvatarFallbackProps>(
  (props, ref) => <RadixAvatar.Fallback ref={ref} {...props} />
)
AvatarFallback.displayName = 'AvatarFallback'
