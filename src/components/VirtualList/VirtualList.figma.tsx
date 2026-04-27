import { figma } from '@figma/code-connect'
import { VirtualList } from './VirtualList'

figma.connect(VirtualList, 'FIGMA_COMPONENT_URL', {
  props: {},
  example: () => (
    <VirtualList items={[]} itemSize={32} height={320}>
      {({ item, style }) => <div style={style}>{String(item)}</div>}
    </VirtualList>
  ),
})
