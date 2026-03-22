import React, { useState } from 'react'

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  title?: string
}

export const CodeBlock = ({ code, title, children, ...props }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div {...props}>
      <div data-slot="header">
        {title && <span data-slot="title">{title}</span>}
        <button data-slot="copy" data-copied={copied} onClick={handleCopy} type="button" aria-label="Copy code">
          {copied ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          )}
        </button>
      </div>
      <pre data-slot="pre">
        <code data-slot="code">
          {children ?? code}
        </code>
      </pre>
    </div>
  )
}
