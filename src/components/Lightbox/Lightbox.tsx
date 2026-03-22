import DefaultLightbox from 'yet-another-react-lightbox'
import type { LightboxProps as YarlLightboxProps, Slide } from 'yet-another-react-lightbox'

export type { Slide }

export interface LightboxProps extends YarlLightboxProps {}

export const Lightbox = (props: LightboxProps) => <DefaultLightbox {...props} />
