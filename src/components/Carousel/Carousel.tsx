import React from 'react'
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'

export type CarouselApi = UseEmblaCarouselType[1]

interface CarouselContextValue {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: CarouselApi
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null)

export function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) throw new Error('useCarousel must be used within a Carousel')
  return context
}

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: Parameters<typeof useEmblaCarousel>[0]
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ opts, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(opts)
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    React.useEffect(() => {
      if (!api) return
      onSelect(api)
      api.on('reInit', onSelect)
      api.on('select', onSelect)
      return () => {
        api.off('reInit', onSelect)
        api.off('select', onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api as CarouselApi,
          scrollPrev: () => api?.scrollPrev(),
          scrollNext: () => api?.scrollNext(),
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div ref={ref} className={className} {...props}>
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = 'Carousel'

export interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ className, ...props }, ref) => {
    const { carouselRef } = useCarousel()
    return (
      <div ref={carouselRef} style={{ overflow: 'hidden' }}>
        <div ref={ref} className={className} {...props} />
      </div>
    )
  }
)
CarouselContent.displayName = 'CarouselContent'

export interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(({ className, ...props }, ref) => (
  <div ref={ref} role="group" aria-roledescription="slide" className={className} {...props} />
))
CarouselItem.displayName = 'CarouselItem'

export interface CarouselPreviousProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const CarouselPrevious = React.forwardRef<HTMLButtonElement, CarouselPreviousProps>(
  ({ className, onClick, ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useCarousel()
    return (
      <button
        ref={ref}
        className={className}
        disabled={!canScrollPrev}
        aria-label="Previous slide"
        onClick={(e) => {
          scrollPrev()
          onClick?.(e)
        }}
        {...props}
      />
    )
  }
)
CarouselPrevious.displayName = 'CarouselPrevious'

export interface CarouselNextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselNextProps>(
  ({ className, onClick, ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel()
    return (
      <button
        ref={ref}
        className={className}
        disabled={!canScrollNext}
        aria-label="Next slide"
        onClick={(e) => {
          scrollNext()
          onClick?.(e)
        }}
        {...props}
      />
    )
  }
)
CarouselNext.displayName = 'CarouselNext'
