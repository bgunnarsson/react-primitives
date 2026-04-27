import type React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
} from './NavigationMenu'

const meta = {
  title: 'Primitives/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

const rootStyle: React.CSSProperties = { position: 'relative', display: 'flex', justifyContent: 'center' }
const listStyle: React.CSSProperties = {
  display: 'flex',
  gap: 4,
  padding: 6,
  margin: 0,
  listStyle: 'none',
  border: '1px solid #e5e7eb',
  borderRadius: 8,
  background: 'white',
}
const triggerStyle: React.CSSProperties = {
  padding: '8px 12px',
  borderRadius: 6,
  background: 'transparent',
  border: 'none',
  fontSize: 14,
  cursor: 'pointer',
}
const contentStyle: React.CSSProperties = {
  padding: 16,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 8,
  minWidth: 360,
}
const linkStyle: React.CSSProperties = {
  display: 'block',
  padding: 8,
  borderRadius: 4,
  textDecoration: 'none',
  color: '#111827',
}
const viewportStyle: React.CSSProperties = {
  position: 'absolute',
  top: 48,
  background: 'white',
  borderRadius: 8,
  border: '1px solid #e5e7eb',
  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
}

export const MegaMenu: Story = {
  render: () => (
    <NavigationMenu style={rootStyle}>
      <NavigationMenuList style={listStyle}>
        <NavigationMenuItem>
          <NavigationMenuTrigger style={triggerStyle}>Products</NavigationMenuTrigger>
          <NavigationMenuContent style={contentStyle}>
            <NavigationMenuLink href="#" style={linkStyle}>
              Primitives
            </NavigationMenuLink>
            <NavigationMenuLink href="#" style={linkStyle}>
              Design system
            </NavigationMenuLink>
            <NavigationMenuLink href="#" style={linkStyle}>
              Icons
            </NavigationMenuLink>
            <NavigationMenuLink href="#" style={linkStyle}>
              Templates
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger style={triggerStyle}>Company</NavigationMenuTrigger>
          <NavigationMenuContent style={contentStyle}>
            <NavigationMenuLink href="#" style={linkStyle}>
              About
            </NavigationMenuLink>
            <NavigationMenuLink href="#" style={linkStyle}>
              Careers
            </NavigationMenuLink>
            <NavigationMenuLink href="#" style={linkStyle}>
              Blog
            </NavigationMenuLink>
            <NavigationMenuLink href="#" style={linkStyle}>
              Contact
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" style={triggerStyle}>
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport style={viewportStyle} />
    </NavigationMenu>
  ),
}
