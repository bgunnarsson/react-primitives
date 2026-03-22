import React from 'react'
import { figma } from '@figma/code-connect'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './Table'

figma.connect(Table, 'FIGMA_COMPONENT_URL', {
  props: {},
  example: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Column</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Cell</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
})
