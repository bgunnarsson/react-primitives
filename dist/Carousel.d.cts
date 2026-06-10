import React__default from 'react';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';

type CarouselApi = UseEmblaCarouselType[1];
interface CarouselContextValue {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    api: CarouselApi;
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
}
declare function useCarousel(): CarouselContextValue;
interface CarouselProps extends React__default.HTMLAttributes<HTMLDivElement> {
    opts?: Parameters<typeof useEmblaCarousel>[0];
}
declare const Carousel: React__default.ForwardRefExoticComponent<CarouselProps & React__default.RefAttributes<HTMLDivElement>>;
interface CarouselContentProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
declare const CarouselContent: React__default.ForwardRefExoticComponent<CarouselContentProps & React__default.RefAttributes<HTMLDivElement>>;
interface CarouselItemProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
declare const CarouselItem: React__default.ForwardRefExoticComponent<CarouselItemProps & React__default.RefAttributes<HTMLDivElement>>;
interface CarouselPreviousProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
}
declare const CarouselPrevious: React__default.ForwardRefExoticComponent<CarouselPreviousProps & React__default.RefAttributes<HTMLButtonElement>>;
interface CarouselNextProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
}
declare const CarouselNext: React__default.ForwardRefExoticComponent<CarouselNextProps & React__default.RefAttributes<HTMLButtonElement>>;

export { Carousel, type CarouselApi, CarouselContent, type CarouselContentProps, CarouselItem, type CarouselItemProps, CarouselNext, type CarouselNextProps, CarouselPrevious, type CarouselPreviousProps, type CarouselProps, useCarousel };
