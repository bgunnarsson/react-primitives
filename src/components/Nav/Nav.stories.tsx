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

const styles = `
  .sb-nav {
    display: inline-flex;
    padding: 6px;
    background: #f3f4f6;
    border-radius: 10px;
    font: 500 14px ui-sans-serif, system-ui, sans-serif;
  }
  .sb-nav-list {
    display: flex;
    gap: 2px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .sb-nav-item { display: inline-flex; }
  .sb-nav-link {
    display: inline-flex;
    align-items: center;
    padding: 7px 14px;
    color: #374151;
    text-decoration: none;
    border-radius: 6px;
    transition: background 120ms ease, color 120ms ease;
  }
  .sb-nav-link:hover { background: #ffffff; color: #111827; }
  .sb-nav-link--active { background: #ffffff; color: #2563eb; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04); }
  .sb-nav-link:focus-visible { outline: 2px solid #3b82f6; outline-offset: 2px; }

  .sb-vnav {
    width: 220px;
    padding: 8px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    font: 400 14px ui-sans-serif, system-ui, sans-serif;
  }
  .sb-vnav-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .sb-vnav-link {
    display: flex;
    align-items: center;
    padding: 8px 10px;
    color: #374151;
    text-decoration: none;
    border-radius: 6px;
  }
  .sb-vnav-link:hover { background: #f3f4f6; color: #111827; }
`

export const Default: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <Nav className="sb-nav" aria-label="Primary">
        <NavList className="sb-nav-list">
          <NavItem className="sb-nav-item">
            <Link href="#" className="sb-nav-link sb-nav-link--active" aria-current="page">
              Home
            </Link>
          </NavItem>
          <NavItem className="sb-nav-item">
            <Link href="#" className="sb-nav-link">
              About
            </Link>
          </NavItem>
          <NavItem className="sb-nav-item">
            <Link href="#" className="sb-nav-link">
              Pricing
            </Link>
          </NavItem>
          <NavItem className="sb-nav-item">
            <Link href="#" className="sb-nav-link">
              Contact
            </Link>
          </NavItem>
        </NavList>
      </Nav>
    </>
  ),
}

export const Vertical: Story = {
  render: () => (
    <>
      <style>{styles}</style>
      <Nav className="sb-vnav" aria-label="Settings">
        <NavList className="sb-vnav-list">
          <NavItem>
            <Link href="#" className="sb-vnav-link">
              General
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#" className="sb-vnav-link">
              Profile
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#" className="sb-vnav-link">
              Notifications
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#" className="sb-vnav-link">
              Billing
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#" className="sb-vnav-link">
              Integrations
            </Link>
          </NavItem>
        </NavList>
      </Nav>
    </>
  ),
}
