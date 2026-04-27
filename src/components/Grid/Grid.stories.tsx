import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Grid, GridItem } from './Grid'

const meta = {
  title: 'Primitives/Grid',
  component: Grid,
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof meta>

const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: '#e5e7eb', borderRadius: 6, padding: 16, fontSize: 14, textAlign: 'center' }}>
    {children}
  </div>
)

export const Default: Story = {
  render: () => (
    <Grid style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 16 }}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box>
    </Grid>
  ),
}

export const WithSpanning: Story = {
  render: () => (
    <Grid style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 12 }}>
      <GridItem style={{ gridColumn: 'span 2 / span 2' }}>
        <Box>Span 2</Box>
      </GridItem>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <GridItem style={{ gridColumn: 'span 3 / span 3' }}>
        <Box>Span 3</Box>
      </GridItem>
    </Grid>
  ),
}
