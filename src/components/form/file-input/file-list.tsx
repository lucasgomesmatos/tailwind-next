'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './file-item'
import { useFileInput } from './root'

export const FileList = () => {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div className="mt-4 space-y-3" ref={parent}>
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            state="complete"
          />
        )
      })}
    </div>
  )
}
