import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PasswordInput } from './PasswordInput'

const meta = {
  title: 'Primitives/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>

export default meta
type Story = StoryObj<typeof meta>

const styles = (
  <style>{`
    .password-input-story-input { border: 0; outline: 0; padding: 8px 12px; }
    .password-input-story-toggle { border: 0; background: #f9fafb; padding: 0 12px; cursor: pointer; }
  `}</style>
)

export const Default: Story = {
  render: () => (
    <>
      {styles}
      <PasswordInput
        placeholder="Enter password"
        style={{ display: 'inline-flex', border: '1px solid #d1d5db', borderRadius: 6, overflow: 'hidden' }}
        inputClassName="password-input-story-input"
        toggleClassName="password-input-story-toggle"
      />
    </>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [visible, setVisible] = React.useState(false)
    return (
      <>
        {styles}
        <PasswordInput
          visible={visible}
          onVisibilityChange={setVisible}
          defaultValue="hunter2"
          style={{ display: 'inline-flex', border: '1px solid #d1d5db', borderRadius: 6, overflow: 'hidden' }}
          inputClassName="password-input-story-input"
          toggleClassName="password-input-story-toggle"
        />
      </>
    )
  },
}

export const CustomToggle: Story = {
  render: () => (
    <>
      {styles}
      <PasswordInput
        placeholder="Enter password"
        toggleLabel={(v) => (v ? '🙈' : '👁')}
        style={{ display: 'inline-flex', border: '1px solid #d1d5db', borderRadius: 6, overflow: 'hidden' }}
        inputClassName="password-input-story-input"
        toggleClassName="password-input-story-toggle"
      />
    </>
  ),
}
