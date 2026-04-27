import { figma } from '@figma/code-connect'
import { TreeView, TreeItem } from './TreeView'

figma.connect(TreeView, 'FIGMA_COMPONENT_URL', {
  props: {
    label: figma.string('Label'),
  },
  example: ({ label }) => (
    <TreeView>
      <TreeItem id="1" label={label} />
    </TreeView>
  ),
})
