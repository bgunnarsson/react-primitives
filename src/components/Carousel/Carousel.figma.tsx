import { figma } from '@figma/code-connect'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './Carousel'

figma.connect(Carousel, 'FIGMA_COMPONENT_URL', {
  props: {},
  example: () => (
    <Carousel>
      <CarouselContent>
        <CarouselItem>Slide 1</CarouselItem>
        <CarouselItem>Slide 2</CarouselItem>
        <CarouselItem>Slide 3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious>Prev</CarouselPrevious>
      <CarouselNext>Next</CarouselNext>
    </Carousel>
  ),
})
