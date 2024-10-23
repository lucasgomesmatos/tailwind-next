'use client'

import { ComponentProps } from 'react'
import { useFileInput } from './root'

type ControlInputProps = ComponentProps<'input'>

export const Control = ({ multiple, ...props }: ControlInputProps) => {
  const { id, onFilesSelect } = useFileInput()

  const handleFilesSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return

    const files = Array.from(event.target.files)
    onFilesSelect(files, multiple)
  }

  return (
    <input
      {...props}
      type="file"
      className="sr-only"
      id={id}
      multiple={multiple}
      onChange={handleFilesSelect}
    />
  )
}
