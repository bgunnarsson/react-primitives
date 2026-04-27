import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs'

const meta = {
  title: 'Primitives/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const tabStyles = `
  .story-tabs-list { display: inline-flex; border-bottom: 1px solid #e5e7eb; gap: 0; }
  .story-tabs-trigger { padding: 8px 16px; border: none; background: none; cursor: pointer; font-size: 14px; color: #6b7280; border-bottom: 2px solid transparent; margin-bottom: -1px; }
  .story-tabs-trigger[data-state=active] { color: #111827; border-bottom-color: #3b82f6; font-weight: 500; }
  .story-tabs-content { padding: 16px 0; font-size: 14px; color: #374151; }
`

export const Default: Story = {
  render: () => (
    <>
      <style>{tabStyles}</style>
      <Tabs defaultValue="account" style={{ width: 400 }}>
        <TabsList className="story-tabs-list">
          <TabsTrigger value="account" className="story-tabs-trigger">
            Account
          </TabsTrigger>
          <TabsTrigger value="password" className="story-tabs-trigger">
            Password
          </TabsTrigger>
          <TabsTrigger value="settings" className="story-tabs-trigger">
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="story-tabs-content">
          Account settings content.
        </TabsContent>
        <TabsContent value="password" className="story-tabs-content">
          Change your password here.
        </TabsContent>
        <TabsContent value="settings" className="story-tabs-content">
          Manage your settings.
        </TabsContent>
      </Tabs>
    </>
  ),
}
