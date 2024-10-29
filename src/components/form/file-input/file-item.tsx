import { Button } from '@/components/button'
import { formatBytes } from '@/utils/format-bytes'
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'

interface FileItemProps {
  name: string
  size: number
}

export const FileItem = ({ name, size }: FileItemProps) => {
  const state = 'error' as 'complete' | 'error' | 'progress'

  return (
    <div className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4">
      <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
        <UploadCloud className="size-4" />
      </div>
      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-error-700 text-sm font-medium">
              Upload failed, please try again
            </span>
            <span className="text-error-600 text-sm">{name}</span>
          </div>
          <button
            type="button"
            className="text-error-700 hover:text-error-900 text-sm font-semibold"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-sm text-zinc-500">
              {formatBytes(size, 1)}
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-50">
              <div
                style={{
                  width: state === 'complete' ? '100%' : '80%',
                }}
                className="h-2 w-4/5 rounded-full bg-violet-600"
              />
            </div>

            <span className="text-sm font-medium text-zinc-700">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}
      {state === 'complete' ? (
        <Button type="button" variant="ghost">
          <CheckCircle2 className="size-5 fill-violet-500 text-white" />
        </Button>
      ) : (
        <Button type="button" variant="ghost">
          <Trash2 className="size-5 text-zinc-500" />
        </Button>
      )}
    </div>
  )
}
