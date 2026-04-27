import { figma } from '@figma/code-connect'
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from './Command'

figma.connect(Command, 'FIGMA_COMPONENT_URL', {
  props: {
    placeholder: figma.string('Placeholder'),
    emptyText: figma.string('Empty Text'),
  },
  example: ({ placeholder, emptyText }) => (
    <Command>
      <CommandInput placeholder={placeholder} />
      <CommandList>
        <CommandEmpty>{emptyText}</CommandEmpty>
        <CommandGroup>
          <CommandItem>Item</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
})
