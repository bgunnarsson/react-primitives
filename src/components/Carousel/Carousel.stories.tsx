import type { Meta, StoryObj } from '@storybook/react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './Carousel'

const meta = {
  title: 'Primitives/Carousel',
  component: Carousel,
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 400, position: 'relative' }}>
      <Carousel>
        <CarouselContent style={{ display: 'flex' }}>
          {Array.from({ length: 5 }, (_, i) => (
            <CarouselItem key={i} style={{ minWidth: '100%' }}>
              <div
                style={{
                  background: '#f0f0f0',
                  height: 200,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                }}
              >
                Slide {i + 1}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <CarouselPrevious>← Prev</CarouselPrevious>
          <CarouselNext>Next →</CarouselNext>
        </div>
      </Carousel>
    </div>
  ),
}
