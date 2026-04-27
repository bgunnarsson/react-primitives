import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from './DropdownMenu'

const meta = {
  title: 'Primitives/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

const styles = `
  .sb-dd-trigger {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    font: 500 14px ui-sans-serif, system-ui, sans-serif;
    color: #111827;
    background: #ffffff;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    cursor: pointer;
    outline: none;
    transition: background 120ms ease, box-shadow 120ms ease;
  }
  .sb-dd-trigger:hover { background: #f9fafb; }
  .sb-dd-trigger:focus-visible { box-shadow: 0 0 0 2px #3b82f6; }
  .sb-dd-trigger[data-state="open"] { background: #f3f4f6; }

  .sb-dd-content {
    min-width: 220px;
    padding: 6px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -4px rgba(0, 0, 0, 0.08);
    font: 400 14px ui-sans-serif, system-ui, sans-serif;
    color: #111827;
    animation: sb-dd-in 140ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  @keyframes sb-dd-in {
    from { opacity: 0; transform: translateY(-4px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .sb-dd-label {
    padding: 6px 10px 4px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #6b7280;
  }

  .sb-dd-separator {
    height: 1px;
    margin: 4px -2px;
    background: #e5e7eb;
  }

  .sb-dd-item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 7px 10px 7px 28px;
    border-radius: 6px;
    cursor: pointer;
    outline: none;
    user-select: none;
    line-height: 1;
  }
  .sb-dd-item[data-highlighted] { background: #eff6ff; color: #1d4ed8; }
  .sb-dd-item[data-disabled] { color: #9ca3af; pointer-events: none; }
  .sb-dd-item--danger[data-highlighted] { background: #fef2f2; color: #b91c1c; }
  .sb-dd-item--danger { color: #b91c1c; }

  .sb-dd-shortcut {
    margin-left: auto;
    padding-left: 12px;
    font-size: 12px;
    color: #9ca3af;
    letter-spacing: 0.05em;
  }

  .sb-dd-indicator {
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #2563eb;
  }

  .sb-dd-sub-trigger[data-state="open"] { background: #eff6ff; color: #1d4ed8; }
  .sb-dd-sub-trigger::after {
    content: "›";
    margin-left: auto;
    padding-left: 12px;
    color: #9ca3af;
  }
`

const StoryFrame = ({ children }: { children: React.ReactNode }) => (
  <>
    <style>{styles}</style>
    <div style={{ padding: 48 }}>{children}</div>
  </>
)

const CheckIndicator = () => (
  <span className="sb-dd-indicator" aria-hidden>
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2.5 6.5L5 9l4.5-5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
)

const DotIndicator = () => (
  <span className="sb-dd-indicator" aria-hidden>
    <svg width="6" height="6" viewBox="0 0 6 6">
      <circle cx="3" cy="3" r="3" fill="currentColor" />
    </svg>
  </span>
)

export const Default: Story = {
  render: () => (
    <StoryFrame>
      <DropdownMenu>
        <DropdownMenuTrigger className="sb-dd-trigger">Open menu</DropdownMenuTrigger>
        <DropdownMenuContent className="sb-dd-content" sideOffset={6}>
          <DropdownMenuLabel className="sb-dd-label">My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="sb-dd-separator" />
          <DropdownMenuItem className="sb-dd-item">
            Profile <span className="sb-dd-shortcut">⇧⌘P</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="sb-dd-item">
            Settings <span className="sb-dd-shortcut">⌘,</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="sb-dd-item">
            Keyboard shortcuts <span className="sb-dd-shortcut">⌘K</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="sb-dd-separator" />
          <DropdownMenuItem className="sb-dd-item sb-dd-item--danger">
            Log out <span className="sb-dd-shortcut">⇧⌘Q</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </StoryFrame>
  ),
}

export const WithCheckboxes: Story = {
  render: () => {
    const [bookmarks, setBookmarks] = useState(true)
    const [urls, setUrls] = useState(false)
    const [activity, setActivity] = useState(true)
    return (
      <StoryFrame>
        <DropdownMenu>
          <DropdownMenuTrigger className="sb-dd-trigger">View options</DropdownMenuTrigger>
          <DropdownMenuContent className="sb-dd-content" sideOffset={6}>
            <DropdownMenuLabel className="sb-dd-label">Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator className="sb-dd-separator" />
            <DropdownMenuCheckboxItem className="sb-dd-item" checked={bookmarks} onCheckedChange={setBookmarks}>
              <CheckIndicator />
              Show bookmarks bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="sb-dd-item" checked={urls} onCheckedChange={setUrls}>
              <CheckIndicator />
              Show full URLs
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="sb-dd-item" checked={activity} onCheckedChange={setActivity}>
              <CheckIndicator />
              Show activity indicator
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </StoryFrame>
    )
  },
}

export const WithRadioGroup: Story = {
  render: () => {
    const [person, setPerson] = useState('pedro')
    return (
      <StoryFrame>
        <DropdownMenu>
          <DropdownMenuTrigger className="sb-dd-trigger">Assignee</DropdownMenuTrigger>
          <DropdownMenuContent className="sb-dd-content" sideOffset={6}>
            <DropdownMenuLabel className="sb-dd-label">People</DropdownMenuLabel>
            <DropdownMenuSeparator className="sb-dd-separator" />
            <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
              <DropdownMenuRadioItem className="sb-dd-item" value="pedro">
                <DotIndicator />
                Pedro Duarte
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem className="sb-dd-item" value="colm">
                <DotIndicator />
                Colm Tuite
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem className="sb-dd-item" value="benoit">
                <DotIndicator />
                Benoît Grélard
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </StoryFrame>
    )
  },
}

export const WithSubmenu: Story = {
  render: () => (
    <StoryFrame>
      <DropdownMenu>
        <DropdownMenuTrigger className="sb-dd-trigger">File</DropdownMenuTrigger>
        <DropdownMenuContent className="sb-dd-content" sideOffset={6}>
          <DropdownMenuItem className="sb-dd-item">
            New Tab <span className="sb-dd-shortcut">⌘T</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="sb-dd-item">
            New Window <span className="sb-dd-shortcut">⌘N</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="sb-dd-separator" />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="sb-dd-item sb-dd-sub-trigger">Share</DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="sb-dd-content" sideOffset={6} alignOffset={-6}>
              <DropdownMenuItem className="sb-dd-item">Email link</DropdownMenuItem>
              <DropdownMenuItem className="sb-dd-item">Copy link</DropdownMenuItem>
              <DropdownMenuItem className="sb-dd-item">Messages</DropdownMenuItem>
              <DropdownMenuSeparator className="sb-dd-separator" />
              <DropdownMenuItem className="sb-dd-item" disabled>
                AirDrop (offline)
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem className="sb-dd-item">
            Print <span className="sb-dd-shortcut">⌘P</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </StoryFrame>
  ),
}
