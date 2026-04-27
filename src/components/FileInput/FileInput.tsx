import React from 'react'

export interface FileInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  accept?: string
  multiple?: boolean
  disabled?: boolean
  onFilesChange?: (files: File[]) => void
  children?: React.ReactNode
}

export const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({ accept, multiple, disabled, onFilesChange, children, className, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [isDragging, setIsDragging] = React.useState(false)

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    const handleFiles = (files: FileList | null) => {
      if (!files) {
        return
      }
      onFilesChange?.(Array.from(files))
    }

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault()
      if (!disabled) {
        setIsDragging(true)
      }
    }

    const handleDragLeave = () => setIsDragging(false)

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      if (!disabled) {
        handleFiles(e.dataTransfer.files)
      }
    }

    return (
      // biome-ignore lint/a11y/noStaticElementInteractions: drag-and-drop drop zone wraps an <input type="file"> which is the keyboard-accessible control
      <div
        data-dragging={isDragging || undefined}
        data-disabled={disabled || undefined}
        className={className}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        {...props}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          style={{ display: 'none' }}
          onChange={(e) => handleFiles(e.target.files)}
        />
        <button type="button" disabled={disabled} onClick={() => inputRef.current?.click()}>
          {children ?? 'Choose file'}
        </button>
      </div>
    )
  }
)
FileInput.displayName = 'FileInput'
