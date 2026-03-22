import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FileInput } from './FileInput'

const meta = {
  title: 'Primitives/FileInput',
  component: FileInput,
  tags: ['autodocs'],
  args: {
    multiple: false,
    disabled: false,
  },
  argTypes: {
    accept: { control: 'text' },
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof FileInput>

export default meta
type Story = StoryObj<typeof meta>

const fileInputStyles = `
  .story-file-zone {
    border: 2px dashed #d1d5db;
    border-radius: 10px;
    padding: 32px 24px;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
    background: #fafafa;
  }
  .story-file-zone[data-dragging] {
    border-color: #3b82f6;
    background: #eff6ff;
  }
  .story-file-zone[data-disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .story-file-zone--has-files {
    border-color: #22c55e;
    background: #f0fdf4;
  }
  .story-file-zone button {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px solid #d1d5db;
    background: white;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  }
  .story-file-zone[data-dragging] button {
    border-color: #3b82f6;
    color: #3b82f6;
  }
  .story-file-zone--has-files button {
    border-color: #22c55e;
    color: #16a34a;
  }
  .story-file-hint {
    display: block;
    margin-top: 8px;
    font-size: 12px;
    color: #9ca3af;
  }
  .story-file-zone[data-dragging] .story-file-hint {
    color: #3b82f6;
  }
  .story-file-zone--has-files .story-file-hint {
    color: #16a34a;
  }
  .story-file-list {
    margin: 10px 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .story-file-list li {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 6px;
    background: white;
    border: 1px solid #e5e7eb;
    font-size: 13px;
    color: #374151;
  }
  .story-file-list li::before {
    content: '📄';
    font-size: 15px;
  }
`

export const Default: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([])
    const hasFiles = files.length > 0
    return (
      <>
        <style>{fileInputStyles}</style>
        <div style={{ width: 400 }}>
          <FileInput
            {...args}
            onFilesChange={setFiles}
            className={`story-file-zone${hasFiles ? ' story-file-zone--has-files' : ''}`}
          >
            {hasFiles ? `${files.length} file${files.length > 1 ? 's' : ''} selected` : 'Click or drag files here'}
            {hasFiles && (
              <span className="story-file-hint" style={{ marginTop: 0 }}>Drop to replace or click to change</span>
            )}
          </FileInput>
          {hasFiles && (
            <ul className="story-file-list">
              {files.map((f) => <li key={f.name}>{f.name}</li>)}
            </ul>
          )}
        </div>
      </>
    )
  },
}

export const Multiple: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([])
    const hasFiles = files.length > 0
    return (
      <>
        <style>{fileInputStyles}</style>
        <div style={{ width: 400 }}>
          <FileInput
            {...args}
            multiple
            onFilesChange={setFiles}
            className={`story-file-zone${hasFiles ? ' story-file-zone--has-files' : ''}`}
          >
            {hasFiles ? `${files.length} file${files.length > 1 ? 's' : ''} selected` : 'Click or drag files here'}
            {hasFiles && (
              <span className="story-file-hint" style={{ marginTop: 0 }}>Drop to replace or click to change</span>
            )}
          </FileInput>
          {hasFiles && (
            <ul className="story-file-list">
              {files.map((f) => <li key={f.name}>{f.name}</li>)}
            </ul>
          )}
        </div>
      </>
    )
  },
}
