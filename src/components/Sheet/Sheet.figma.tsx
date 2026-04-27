import { figma } from '@figma/code-connect'
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetClose } from './Sheet'

figma.connect(Sheet, 'FIGMA_COMPONENT_URL', {
  props: {
    title: figma.string('Title'),
    description: figma.string('Description'),
    side: figma.enum('Side', { Left: 'left', Right: 'right', Top: 'top', Bottom: 'bottom' }),
  },
  example: ({ title, description, side }) => (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent side={side}>
        <SheetTitle>{title}</SheetTitle>
        <SheetDescription>{description}</SheetDescription>
        <SheetClose>Close</SheetClose>
      </SheetContent>
    </Sheet>
  ),
})
