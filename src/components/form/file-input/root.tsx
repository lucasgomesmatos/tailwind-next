'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type RootProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelect: (files: File[]) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export const Root = (props: RootProps) => {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelect: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
