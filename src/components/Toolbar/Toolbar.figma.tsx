import { figma } from '@figma/code-connect'
import { Toolbar, ToolbarButton, ToolbarSeparator } from './Toolbar'

figma.connect(Toolbar, 'FIGMA_COMPONENT_URL', {
  props: {
    label: figma.string('Label'),
  },
  example: ({ label }) => (
    <Toolbar>
      <ToolbarButton>{label}</ToolbarButton>
      <ToolbarSeparator />
      <ToolbarButton>{label}</ToolbarButton>
    </Toolbar>
  ),
})
