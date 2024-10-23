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
  onFilesSelect: (files: File[], multiple?: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export const Root = (props: RootProps) => {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelect(files: File[], multiple?: boolean) {
    if (!multiple) {
      setFiles(files)
      return
    }

    setFiles((prevFiles) => [...prevFiles, ...files])
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelect }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
