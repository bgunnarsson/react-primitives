import React from 'react'
import * as RadixSlider from '@radix-ui/react-slider'

export interface SliderProps extends React.ComponentPropsWithoutRef<typeof RadixSlider.Root> {}

export const Slider = React.forwardRef<React.ElementRef<typeof RadixSlider.Root>, SliderProps>(
  ({ className, ...props }, ref) => (
    <RadixSlider.Root ref={ref} className={className} {...props}>
      <RadixSlider.Track>
        <RadixSlider.Range />
      </RadixSlider.Track>
      {(props.defaultValue ?? props.value ?? [0]).map((_, i) => (
        <RadixSlider.Thumb key={i} />
      ))}
    </RadixSlider.Root>
  )
)
Slider.displayName = 'Slider'
