// src/components/FileInput/FileInput.tsx
import React from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
var FileInput = React.forwardRef(
  ({ accept, multiple, disabled, onFilesChange, children, className, ...props }, ref) => {
    const inputRef = React.useRef(null)
    const [isDragging, setIsDragging] = React.useState(false)
    React.useImperativeHandle(ref, () => inputRef.current)
    const handleFiles = (files) => {
      if (!files) return
      onFilesChange?.(Array.from(files))
    }
    const handleDragOver = (e) => {
      e.preventDefault()
      if (!disabled) setIsDragging(true)
    }
    const handleDragLeave = () => setIsDragging(false)
    const handleDrop = (e) => {
      e.preventDefault()
      setIsDragging(false)
      if (!disabled) handleFiles(e.dataTransfer.files)
    }
    return /* @__PURE__ */ jsxs('div', {
      'data-dragging': isDragging || void 0,
      'data-disabled': disabled || void 0,
      className,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
      ...props,
      children: [
        /* @__PURE__ */ jsx('input', {
          ref: inputRef,
          type: 'file',
          accept,
          multiple,
          disabled,
          style: { display: 'none' },
          onChange: (e) => handleFiles(e.target.files),
        }),
        /* @__PURE__ */ jsx('button', {
          type: 'button',
          disabled,
          onClick: () => inputRef.current?.click(),
          children: children ?? 'Choose file',
        }),
      ],
    })
  }
)
FileInput.displayName = 'FileInput'

export { FileInput }
