import { figma } from '@figma/code-connect'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './Resizable'

figma.connect(ResizablePanelGroup, 'FIGMA_COMPONENT_URL', {
  props: {
    orientation: figma.enum('Orientation', {
      horizontal: 'horizontal',
      vertical: 'vertical',
    }),
  },
  example: ({ orientation }) => (
    <ResizablePanelGroup orientation={orientation as 'horizontal' | 'vertical'}>
      <ResizablePanel defaultSize={50}>Panel A</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>Panel B</ResizablePanel>
    </ResizablePanelGroup>
  ),
})
