import { figma } from '@figma/code-connect'
import { ToggleGroup, ToggleGroupItem } from './ToggleGroup'

figma.connect(ToggleGroup, 'FIGMA_COMPONENT_URL', {
  props: {},
  example: () => (
    <ToggleGroup type="single">
      <ToggleGroupItem value="option-1">Option 1</ToggleGroupItem>
      <ToggleGroupItem value="option-2">Option 2</ToggleGroupItem>
    </ToggleGroup>
  ),
})
