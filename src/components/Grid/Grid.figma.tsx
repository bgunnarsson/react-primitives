import { figma } from '@figma/code-connect'
import { Grid, GridItem } from './Grid'

figma.connect(Grid, 'FIGMA_COMPONENT_URL', {
  props: {
    children: figma.string('Content'),
  },
  example: ({ children }) => (
    <Grid>
      <GridItem>{children}</GridItem>
    </Grid>
  ),
})
