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

export const Default: Story = {
  args: {
    src: SAMPLE_SRC,
    controls: true,
    style: { width: 400 },
  },
}

export const Looping: Story = {
  args: {
    src: SAMPLE_SRC,
    controls: true,
    loop: true,
    style: { width: 400 },
  },
}

export const NoControls: Story = {
  args: {
    src: SAMPLE_SRC,
    controls: false,
    style: { width: 400 },
  },
}
