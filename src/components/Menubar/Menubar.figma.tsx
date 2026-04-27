import { figma } from '@figma/code-connect'
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from './Menubar'

figma.connect(Menubar, 'FIGMA_COMPONENT_URL', {
  props: {
    label: figma.string('Label'),
    item: figma.string('Item'),
  },
  example: ({ label, item }) => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>{label}</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>{item}</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
})
