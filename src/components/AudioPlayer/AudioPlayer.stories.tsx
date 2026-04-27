import type { Meta, StoryObj } from '@storybook/react'
import { AudioPlayer } from './AudioPlayer'

const meta = {
  title: 'Primitives/AudioPlayer',
  component: AudioPlayer,
  tags: ['autodocs'],
  argTypes: {
    controls: { control: 'boolean' },
    autoPlay: { control: 'boolean' },
    muted: { control: 'boolean' },
    loop: { control: 'boolean' },
    preload: { control: 'select', options: ['none', 'metadata', 'auto'] },
  },
} satisfies Meta<typeof AudioPlayer>

export default meta
type Story = StoryObj<typeof meta>

const SAMPLE_SRC =
  'https://upload.wikimedia.org/wikipedia/commons/4/4b/SOR-Bach-Air_Sample.ogg'

const fillAudio = `.sb-audio > audio { width: 100%; display: block; }`

export const Default: Story = {
  args: {
    src: SAMPLE_SRC,
    controls: true,
  },
  render: args => (
    <>
      <style>{fillAudio}</style>
      <div className="sb-audio" style={{ width: 400 }}>
        <AudioPlayer {...args} />
      </div>
    </>
  ),
}

export const Looping: Story = {
  args: {
    src: SAMPLE_SRC,
    controls: true,
    loop: true,
  },
  render: args => (
    <>
      <style>{fillAudio}</style>
      <div className="sb-audio" style={{ width: 400 }}>
        <AudioPlayer {...args} />
      </div>
    </>
  ),
}

export const NoControls: Story = {
  args: {
    src: SAMPLE_SRC,
    controls: false,
  },
  render: args => (
    <>
      <style>{fillAudio}</style>
      <div className="sb-audio" style={{ width: 400 }}>
        <AudioPlayer {...args} />
      </div>
    </>
  ),
}
