import React__default from 'react'

interface FileInputProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  accept?: string
  multiple?: boolean
  disabled?: boolean
  onFilesChange?: (files: File[]) => void
  children?: React__default.ReactNode
}
declare const FileInput: React__default.ForwardRefExoticComponent<
  FileInputProps & React__default.RefAttributes<HTMLInputElement>
>

export { FileInput, type FileInputProps }
