import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Nav, NavList, NavItem } from './Nav'
import { Link } from '../Link/Link'

const meta = {
  title: 'Primitives/Nav',
  component: Nav,
  tags: ['autodocs'],
} satisfies Meta<typeof Nav>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Nav>
      <NavList>
        <NavItem>
          <Link href="#">Home</Link>
        </NavItem>
        <NavItem>
          <Link href="#">About</Link>
        </NavItem>
        <NavItem>
          <Link href="#">Contact</Link>
        </NavItem>
      </NavList>
    </Nav>
  ),
}
