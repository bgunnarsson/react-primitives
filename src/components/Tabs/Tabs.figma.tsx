import { figma } from '@figma/code-connect'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs'

figma.connect(Tabs, 'FIGMA_COMPONENT_URL', {
  props: {
    defaultValue: figma.string('Default Tab'),
  },
  example: ({ defaultValue }) => (
    <Tabs defaultValue={defaultValue}>
      <TabsList>
        <TabsTrigger value={defaultValue}>{defaultValue}</TabsTrigger>
      </TabsList>
      <TabsContent value={defaultValue}>Content</TabsContent>
    </Tabs>
  ),
})
