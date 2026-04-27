import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from './Pagination'

const meta = {
  title: 'Primitives/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(3)
    const total = 10

    return (
      <Pagination>
        <PaginationContent
          style={{ display: 'flex', alignItems: 'center', gap: 4, listStyle: 'none', padding: 0, margin: 0 }}
        >
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setPage((p) => Math.max(1, p - 1))
              }}
              style={{ padding: '4px 8px' }}
            >
              ‹ Prev
            </PaginationPrevious>
          </PaginationItem>

          {[1, 2, 3, null, 9, 10].map((p, i) =>
            p === null ? (
              <PaginationItem key={`ellipsis-${i}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={p}>
                <PaginationLink
                  href="#"
                  isActive={p === page}
                  onClick={(e) => {
                    e.preventDefault()
                    setPage(p)
                  }}
                  style={{ padding: '4px 8px', fontWeight: p === page ? 'bold' : undefined }}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setPage((p) => Math.min(total, p + 1))
              }}
              style={{ padding: '4px 8px' }}
            >
              Next ›
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  },
}
