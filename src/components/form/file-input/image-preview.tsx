'use client'

import { User } from 'lucide-react'
import Image from 'next/image'
import { useMemo } from 'react'
import { useFileInput } from './root'

export const ImagePreview = () => {
  const { files } = useFileInput()

  const previewUrl = useMemo(() => {
    const file = files[0]

    if (!file) return

    return URL.createObjectURL(file)
  }, [files])

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
      {previewUrl ? (
        <Image
          src={previewUrl}
          alt="Preview"
          className="h-16 w-16 rounded-full object-cover"
          width={64}
          height={64}
        />
      ) : (
        <User className="h-8 w-8 text-violet-500 dark:text-violet-300" />
      )}
    </div>
  )
}
