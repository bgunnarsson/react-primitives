import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './Progress'

const meta = {
  title: 'Primitives/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100 } },
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

const progressStyles = `
  .sb-progress {
    position: relative;
    width: 300px;
    height: 8px;
    background: #e5e7eb;
    border-radius: 9999px;
    overflow: hidden;
  }
  .sb-progress > div {
    height: 100%;
    background: #3b82f6;
    border-radius: 9999px;
    transition: transform 400ms cubic-bezier(0.65, 0, 0.35, 1);
  }

  .sb-progress--thin { height: 4px; }
  .sb-progress--thick { height: 14px; }

  .sb-progress--success > div { background: #10b981; }
  .sb-progress--warning > div { background: #f59e0b; }
  .sb-progress--danger  > div { background: #ef4444; }

  .sb-progress--gradient > div {
    background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
  }

  .sb-progress--striped > div {
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.25) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.25) 50%,
      rgba(255, 255, 255, 0.25) 75%,
      transparent 75%,
      transparent
    );
    background-size: 16px 16px;
    background-color: #3b82f6;
    animation: sb-progress-stripes 1s linear infinite;
  }
  @keyframes sb-progress-stripes {
    from { background-position: 0 0; }
    to   { background-position: 16px 0; }
  }

  .sb-stack { display: flex; flex-direction: column; gap: 16px; }
  .sb-row   { display: flex; align-items: center; gap: 12px; }
  .sb-label { font: 500 12px ui-sans-serif, system-ui, sans-serif; color: #374151; width: 72px; }
`

export const Default: Story = {
  render: (args) => (
    <>
      <style>{progressStyles}</style>
      <Progress {...args} className="sb-progress" />
    </>
  ),
  args: { value: 60 },
}

export const Empty: Story = {
  render: (args) => (
    <>
      <style>{progressStyles}</style>
      <Progress {...args} className="sb-progress" />
    </>
  ),
  args: { value: 0 },
}

export const Full: Story = {
  render: (args) => (
    <>
      <style>{progressStyles}</style>
      <Progress {...args} className="sb-progress" />
    </>
  ),
  args: { value: 100 },
}

export const Sizes: Story = {
  render: () => (
    <>
      <style>{progressStyles}</style>
      <div className="sb-stack">
        <div className="sb-row"><span className="sb-label">Thin</span><Progress value={45} className="sb-progress sb-progress--thin" /></div>
        <div className="sb-row"><span className="sb-label">Default</span><Progress value={45} className="sb-progress" /></div>
        <div className="sb-row"><span className="sb-label">Thick</span><Progress value={45} className="sb-progress sb-progress--thick" /></div>
      </div>
    </>
  ),
  args: { value: 45 },
}

export const Colors: Story = {
  render: () => (
    <>
      <style>{progressStyles}</style>
      <div className="sb-stack">
        <div className="sb-row"><span className="sb-label">Default</span><Progress value={70} className="sb-progress" /></div>
        <div className="sb-row"><span className="sb-label">Success</span><Progress value={70} className="sb-progress sb-progress--success" /></div>
        <div className="sb-row"><span className="sb-label">Warning</span><Progress value={70} className="sb-progress sb-progress--warning" /></div>
        <div className="sb-row"><span className="sb-label">Danger</span><Progress value={70} className="sb-progress sb-progress--danger" /></div>
        <div className="sb-row"><span className="sb-label">Gradient</span><Progress value={70} className="sb-progress sb-progress--gradient" /></div>
      </div>
    </>
  ),
  args: { value: 70 },
}

export const Striped: Story = {
  render: (args) => (
    <>
      <style>{progressStyles}</style>
      <Progress {...args} className="sb-progress sb-progress--striped sb-progress--thick" />
    </>
  ),
  args: { value: 65 },
}
